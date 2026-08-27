"use client";

import { FormEvent, useRef, useState } from "react";
import ArrowDown from "@/src/assets/icons/arrow-down-0-1.svg";
import { useTranslation } from "@/src/i18n/useTranslation";
import { contactPOST } from "@/src/services/contact";
import Loading from "../atoms/loading";
import ModalSucess from "../atoms/modalSucess";
import Image from "next/image";
import ContactImage from "@/src/assets/images/contactMeIMG-removebg-preview.png";
import OpenButton from "../atoms/openBtn";

const subjects = ["project", "freelance", "collaboration", "question"] as const;

export default function MobileContact() {
    const { t } = useTranslation();
    const [isSubmit, setIsSubmit] = useState(false);
    const [error, setError] = useState("");
    const [modalSuccess, setModalSuccess] = useState(false);
    const selectRef = useRef<HTMLSelectElement>(null);

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        setIsSubmit(true);
        setError("");

        const form = event.currentTarget;
        const formData = new FormData(form);

        try {
            await contactPOST({
                name: String(formData.get("name") ?? ""),
                email: String(formData.get("email") ?? ""),
                subject: String(formData.get("subject") ?? ""),
                message: String(formData.get("message") ?? ""),
                website: String(formData.get("website") ?? ""),
            });
            setModalSuccess(true);
            form.reset();
        } catch (submitError) {
            setError(submitError instanceof Error ? submitError.message : t.contact.unexpected);
        } finally {
            setIsSubmit(false);
        }
    }

    const fieldClass = "h-12 w-full rounded-md border border-border-muted bg-window-input px-4 text-sm md:text-xl font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25";

    return (
        <>
            <ModalSucess
                open={modalSuccess}
                onClose={() => setModalSuccess(false)}
                title={t.contact.title}
                message={t.contact.success}
            />

            <section className="scroll-css h-full overflow-y-auto overscroll-contain touch-pan-y bg-window px-4 pb-8 pt-5 text-text-main">
                <header className="border-b border-border-muted pb-6">
                    <h2 className="text-3xl font-bold leading-tight text-text-heading">
                        {t.contact.heading}
                    </h2>
                    <div className="mt-2 h-0.75 w-40 max-w-full bg-highlight" />
                    <p className="mt-4 text-sm md:text-xl font-semibold leading-relaxed text-text-muted">
                        {t.contact.description}
                    </p>
                    <div className="flex mt-10 item-center justify-center">
                        <Image
                            src={ContactImage}
                            alt="Samuel Gomes"
                            className="h-60 w-60 md:h-80 md:w-80 object-cover"
                        />
                    </div>

                </header>

                <form className="flex flex-col gap-5 pt-6" onSubmit={handleSubmit}>
                    <label className="text-sm md:text-xl font-bold" htmlFor="mobile-contact-name">
                        {t.contact.name} <span className="text-highlight">*</span>
                        <input id="mobile-contact-name" name="name" type="text" required placeholder={t.contact.name} className={`${fieldClass} mt-2`} />
                    </label>

                    <label className="text-sm md:text-xl font-bold" htmlFor="mobile-contact-email">
                        {t.contact.email} <span className="text-highlight">*</span>
                        <input id="mobile-contact-email" name="email" type="email" required placeholder={t.contact.email} className={`${fieldClass} mt-2`} />
                    </label>

                    <label className="text-sm md:text-xl font-bold" htmlFor="mobile-contact-subject">
                        {t.contact.subject} <span className="text-highlight">*</span>
                        <span className="relative mt-2 block">
                            <select
                                ref={selectRef}
                                id="mobile-contact-subject"
                                name="subject"
                                required
                                defaultValue=""
                                className={`${fieldClass} appearance-none pr-11`}
                            >
                                <option value="" disabled>{t.contact.subjectLabel}</option>
                                {subjects.map((subject) => (
                                    <option key={subject} value={subject}>{t.contact.options[subject]}</option>
                                ))}
                            </select>
                            <ArrowDown
                                onClick={() => selectRef.current?.focus()}
                                className="pointer-events-none absolute right-3 top-1/2 h-6 w-6 -translate-y-1/2 text-highlight"
                                aria-hidden="true"
                            />
                        </span>
                    </label>

                    <label className="text-sm md:text-xl font-bold" htmlFor="mobile-contact-message">
                        {t.contact.message}
                        <textarea
                            id="mobile-contact-message"
                            name="message"
                            required
                            rows={7}
                            maxLength={300}
                            placeholder={t.contact.placeholderMessage}
                            className="mt-2 w-full resize-none rounded-md border border-border-muted bg-window-input px-4 py-3 text-sm md:text-xl font-semibold text-text-main outline-none transition placeholder:text-text-subtle focus:border-highlight focus:ring-2 focus:ring-highlight/25"
                        />
                    </label>

                    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="absolute left-[-9999px]" />
                    {error && <p role="alert" className="text-sm md:text-xl font-semibold text-red-500">{error}</p>}

                    <OpenButton disabled={isSubmit} type="submit" className="h-13 w-full rounded-md bg-button-bg px-6 text-base md:text-xl font-bold hover:bg-button-bg-hover disabled:cursor-not-allowed disabled:opacity-60">
                        {isSubmit ? <Loading /> : t.contact.send}
                    </OpenButton>
                </form>
            </section>
        </>
    );
}
