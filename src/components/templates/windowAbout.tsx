import Image from "next/image";
import ProfilePic from "../../assets/images/me02.png";
import MobileIcon from "@/src/assets/icons/mobile-programming-0-1.svg"
import UxIcon from "@/src/assets/icons/web-design-0-2.svg"
import HtmlTag from "@/src/assets/icons/source-code.svg"
import { useTranslation } from "@/src/i18n/useTranslation";

export default function WindowAbout() {
    const { t } = useTranslation();

    return (
        <section className="scroll-css h-full w-full overflow-y-auto rounded-md bg-window p-4 sm:p-6 text-text-main">
            <article className="flex flex-col gap-6 border-b border-border-muted pb-6 md:flex-row ">
                <div className="mx-auto flex w-full  items-center justify-center">
                    <Image
                        src={ProfilePic}
                        alt="Samuel Gomes"
                        width={300}
                        height={300}
                        className="h-48 w-48 sm:h-64 sm:w-64 md:h-72 md:w-72 rounded-full object-cover"
                    />
                </div>
                <div className="flex w-full flex-col">

                    <h1 className="text-4xl font-bold leading-none tracking-normal text-text-heading">
                        {t.about.heading}
                    </h1>
                    <div className="mt-2 h-0.75 w-64 max-w-full bg-highlight" />
                    <h2 className="mt-4 text-lg font-bold text-highlight">
                        {t.about.subtitle}
                    </h2>

                    <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-text-muted">
                        <p>{t.about.intro1}</p>
                        <p>{t.about.intro2}</p>
                    </div>
                </div>
            </article>
            <article className="grid grid-cols-1 gap-3 border-b border-border-muted py-6 sm:grid-cols-3 sm:gap-4">
                <div className="inline-flex w-full h-12  items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <HtmlTag className="h-7 w-7 text-highlight" />
                    <span>{t.about.cards.web}</span>
                </div>

                <div className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <MobileIcon className="h-7 w-7 text-highlight" />
                    <span>{t.about.cards.mobile}</span>
                </div>

                <div className="inline-flex h-12  w-full items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <UxIcon className="h-7 w-7 text-highlight" />
                    <span>{t.about.cards.ux}</span>
                </div>
            </article>

            <article className="grid gap-6 py-6 md:grid-cols-3">
                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">{t.about.cards.education}</h3>
                    <div className="space-y-5 text-sm leading-relaxed  font-medium text-text-muted">
                        <div>
                            <p className="text-text-main">{t.about.education.technician}</p>
                            <p className="text-highlight">{t.about.education.institution1}</p>
                        </div>
                        <div>
                            <p className="text-text-main">{t.about.education.analysis}</p>
                            <p className="text-highlight">{t.about.education.institution2}</p>
                        </div>
                    </div>
                </div>

                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">{t.about.cards.languages}</h3>
                    <ul className=" space-y-3 pl-5 text-sm leading-relaxed font-medium text-text-muted">
                        <li>
                            {t.about.languageList.portuguese}
                            <span className="block text-highlight">{t.about.languageList.fluent}</span>
                        </li>
                        <li>
                            {t.about.languageList.english}
                            <span className="block text-highlight">{t.about.languageList.intermediate}</span>
                        </li>
                    </ul>
                </div>

                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">{t.about.cards.interests}</h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm font-medium leading-relaxed text-text-muted">
                        {t.about.interests.map((interest) => (
                            <li key={interest}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    );
}
