"use client";

import { contactPOST } from "@/src/services/contact";
import ArrowDown from "@/src/assets/icons/arrow-down-0-1.svg";
import { useState, useRef } from "react";
import Loading from "../atoms/loading";
import OpenButton from "../atoms/openBtn";
import ModalSucess from "../atoms/modalSucess";
import Image from "next/image";
import ContactImage from "@/src/assets/images/contactMeIMG-removebg-preview.png";
import { useTranslation } from "@/src/i18n/useTranslation";

const subjects = ["project", "freelance", "collaboration", "question"];

export default function WindowContact() {
  const { t } = useTranslation();
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [modalSucess, setModalSucess] = useState("");
  const selectRef = useRef(null);

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmit(true);
    setError("");
    setModalSucess("");

    const form = event.currentTarget;
    const formData = new FormData(form);

    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      subject: formData.get("subject"),
      message: formData.get("message"),
      website: formData.get("website") || "",
    };

    try {
      await contactPOST(data);
      setModalSucess(true);
      form.reset();
    } catch (error) {
      setError(error instanceof Error ? error.message : t.contact.unexpected);
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <>
      <ModalSucess
        open={modalSucess}
        onClose={() => setModalSucess(false)}
        title={t.contact.title}
        message={t.contact.success}
      />

      <section className="h-full w-full overflow-y-auto scroll-css rounded-md bg-window p-4 sm:p-6 text-text-main">
        <div className="flex flex-col gap-8 lg:flex-row lg:gap-10 lg:justify-between">
          <aside className="flex w-full flex-col gap-8 lg:gap-14">
            <div>
              <h1 className="text-4xl font-bold leading-none tracking-normal text-text-heading">
                {t.contact.heading}
              </h1>
              <div className="mt-3 h-0.75 w-64 max-w-full bg-highlight" />

              <div className="mt-4 max-w-sm space-y-1 text-base font-semibold leading-relaxed text-text-muted">
                <p>{t.contact.options.project}</p>
                <p>{t.contact.options.collaboration}</p>
                <p>{t.contact.description}</p>
              </div>
            </div>
            <Image
              src={ContactImage}
              alt="Samuel Gomes"
              className="hidden h-80 w-80 object-cover lg:block"
            />
          </aside>

          <form
            className="flex w-full flex-col gap-4 lg:mt-10"
            onSubmit={handleSubmit}
          >
            <div>
              <label
                htmlFor="contact-name"
                className="mb-2 block text-sm font-bold text-text-main"
              >
                {t.contact.name} <span className="text-highlight">*</span>
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder={t.contact.name}
                required
                className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
              />
            </div>

            <div>
              <label
                htmlFor="contact-email"
                className="mb-2 block text-sm font-bold text-text-main"
              >
                {t.contact.email}
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder={t.contact.email}
                required
                className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
              />
            </div>

            <div>
              <label
                htmlFor="contact-subject"
                className="mb-2 block text-sm font-bold text-text-main"
              >
                {t.contact.subject} <span className="text-highlight">*</span>
              </label>
              <div className="relative">
                <select
                  id="contact-subject"
                  name="subject"
                  ref={selectRef}
                  defaultValue=""
                  required
                  className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4  text-sm font-semibold text-text-main outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/25 appearance-none"
                >
                  <option value="" disabled>
                    {t.contact.subjectLabel}
                  </option>
                  {subjects.map((subject) => (
                    <option key={subject} value={subject}>
                      {t.contact.options[subject]}
                    </option>
                  ))}
                </select>
                <ArrowDown
                  onClick={() => selectRef.current?.focus()}
                  className="h-7 w-7 right-2 text-highlight absolute top-1/2 -translate-y-1/2"
                  aria-hidden="true"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="contact-message"
                className="mb-2 block text-sm font-bold text-text-main"
              >
                {t.contact.message}
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder={t.contact.placeholderMessage}
                rows={7}
                maxLength={300}
                className="w-full resize-none rounded-md border border-border-muted bg-window-input px-4 py-3 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
              />
            </div>
            {error && (
              <p role="alert" className="text-sm font-semibold text-red-500">
                {error}
              </p>
            )}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              className="absolute left-[-9999px]"
            />

            <OpenButton
              disabled={isSubmit}
              type="submit"
              className="mx-auto cursor-pointer w-full h-13 rounded-md
            bg-button-bg px-8 text-base font-bold text-text-main 
            transition hover:bg-button-bg-hover"
            >
              {isSubmit ? <Loading /> : t.contact.send}
            </OpenButton>
          </form>
        </div>
      </section>
    </>
  );
}
