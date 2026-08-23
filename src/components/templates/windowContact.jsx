"use client"

import { contactPOST } from "@/src/services/contact";
import ArrowDown from "@/src/assets/icons/arrow-down-0-1.svg";
import { useState, useRef } from "react";
import Loading from "../atoms/loading";
import OpenButton from "../atoms/openBtn";
import ModalSucess from "../atoms/modalSucess"
import Image from "next/image";
import ContactImage from "@/src/assets/images/contactMeIMG-removebg-preview.png";

const subjects = ["project", "freelance", "collaboration", "question"];

export default function WindowContact() {
  const [isSubmit, setIsSubmit] = useState(false);
  const [error, setError] = useState("");
  const [modalSucess, setModalSucess] = useState("");
  const selectRef = useRef(null);


  async function handleSubmit(event) {
    event.preventDefault();

    setIsSubmit(true);
    setError("");
    setModalSucess("")

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
      setError(error instanceof Error ? error.message : "Erro inesperado.");
    } finally {
      setIsSubmit(false);
    }
  }

  return (
    <>
    <ModalSucess open={modalSucess} onClose={() => setModalSucess(false)} title="Success" message="Message sent successfully." />
    
    <section className="h-full w-full overflow-y-auto scroll-css rounded-md bg-window p-6 text-text-main shadow-window-inset">
      <div className="flex gap-10 justify-between">
        <aside className="flex w-full flex-col gap-14 ">
          <div>
            <h1 className="text-4xl font-bold leading-none tracking-normal text-text-heading">
              let&apos;s talk?
            </h1>
            <div className="mt-3 h-0.75 w-64 max-w-full bg-highlight" />

            <div className="mt-4 max-w-sm space-y-1 text-base font-semibold leading-relaxed text-text-muted">
              <p>have a project in mind?</p>
              <p>or just want to brainstorm an idea?</p>
              <p>send me a message and I&apos;ll get back to you as soon as possible.</p>
            </div>
          </div>
              <Image
                  src={ContactImage}
                  alt="Foto de Samuel Gomes"
                  className="h-80 w-80   object-cover"/>
                            

        </aside>

        <form
          className="flex flex-col w-full mt-10 gap-4"
          onSubmit={handleSubmit}
        >
          <div>
            <label
              htmlFor="contact-name"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              name <span className="text-highlight">*</span>
            </label>
            <input
              id="contact-name"
              name="name"
              type="text"
              placeholder="your name"
              required
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-email"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              email
            </label>
            <input
              id="contact-email"
              name="email"
              type="email"
              placeholder="your email"
              required
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
            />
          </div>

          <div>
            <label
              htmlFor="contact-subject"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              subject <span className="text-highlight">*</span>
            </label>
            <div1 className="relative">
          <select
              id="contact-subject"
              name="subject"
              ref={selectRef}
              defaultValue=""
              required
              className="h-12 w-full rounded-md border border-border-muted bg-window-input px-4  text-sm font-semibold text-text-main outline-none transition focus:border-highlight focus:ring-2 focus:ring-highlight/25 appearance-none"
            >
              <option value="" disabled>
                what is the subject?
              </option>
              {subjects.map((subject) => (
                <option key={subject} value={subject}>
                  {subject}
                </option>
              ))}
          </select>   
        <ArrowDown 
        onClick={() => selectRef.current?.focus()}
        className="h-7 w-7 right-2 text-highlight absolute top-1/2 -translate-y-1/2" aria-hidden="true" />
         </div1>
          </div>

          <div>
            <label
              htmlFor="contact-message"
              className="mb-2 block text-sm font-bold text-text-main"
            >
              message
            </label>
            <textarea
              id="contact-message"
              name="message"
              placeholder="write here..."
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
            {isSubmit ? <Loading/> : "send message"}
          </OpenButton>
        </form>
      </div>
    </section>
    </>
  );
}
