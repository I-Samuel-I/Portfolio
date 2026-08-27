import Image from "next/image";
import ProfilePic from "../../assets/images/me02.png";
import MobileIcon from "@/src/assets/icons/mobile-programming-0-1.svg";
import UxIcon from "@/src/assets/icons/web-design-0-2.svg";
import HtmlTag from "@/src/assets/icons/source-code.svg";
import { useTranslation } from "@/src/i18n/useTranslation";

export default function MobileAbout() {
    const { t } = useTranslation();

    return (
     

        
        <section className="scroll-css h-full overflow-y-auto overscroll-contain touch-pan-y bg-window px-4 pb-8 pt-5 text-text-main">
            <article className="border-b border-border-muted pb-6">
                <Image
                    src={ProfilePic}
                    alt="Samuel Gomes"
                    placeholder="blur"
                    className="mx-auto h-50 w-50 md:h-80 md:w-80 rounded-full object-cover shadow-panel"
                />

                <div className="mt-5">
                    <h2 className="text-4xl md:text-5xl font-bold leading-none text-text-heading">
                        {t.about.heading}
                    </h2>
                    <div className="mt-2 h-0.75 w-40 max-w-full bg-highlight" />
                    <h3 className="mt-4 text-base md:text-2xl font-bold text-highlight">
                        {t.about.subtitle}
                    </h3>
                    <div className="mt-4 space-y-4 text-md md:text-xl leading-relaxed text-text-muted">
                        <p>{t.about.intro1}</p>
                        <p>{t.about.intro2}</p>
                    </div>
                </div>
            </article>

            <article className="grid gap-3 border-b border-border-muted py-6">
                <div className="flex min-h-14 items-center gap-4 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold shadow-chip">
                    <HtmlTag className="h-7 w-7 shrink-0 text-highlight" />
                    <span>{t.about.cards.web}</span>
                </div>
                <div className="flex min-h-14 items-center gap-4 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold shadow-chip">
                    <MobileIcon className="h-7 w-7 shrink-0 text-highlight" />
                    <span>{t.about.cards.mobile}</span>
                </div>
                <div className="flex min-h-14 items-center gap-4 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold shadow-chip">
                    <UxIcon className="h-7 w-7 shrink-0 text-highlight" />
                    <span>{t.about.cards.ux}</span>
                </div>
            </article>

            <article className="grid gap-4 pt-6">
                <div className="rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-4 text-lg font-bold md:text-xl text-highlight">{t.about.cards.education}</h3>
                    <div className="space-y-4 text-sm md:text-xl font-medium leading-relaxed text-text-muted">
                        <div>
                            <p className="text-text-main">{t.about.education.technician}</p>
                            <p className="text-highlight">{t.about.education.institution1}</p>
                        </div>
                        <div >
                            <p className="text-text-main">{t.about.education.analysis}</p>
                            <p className="text-highlight">{t.about.education.institution2}</p>
                        </div>
                    </div>
                </div>

                <div className="rounded-md border  border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-4 text-lg  md:text-xl font-bold text-highlight">{t.about.cards.languages}</h3>
                    <ul className="space-y-3 text-sm md:text-xl font-medium leading-relaxed text-text-muted">
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

                <div className="rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-4 text-lg md:text-xl font-bold text-highlight">{t.about.cards.interests}</h3>
                    <ul className="list-disc space-y-1 md:text-xl pl-5 text-sm font-medium leading-relaxed text-text-muted">
                        {t.about.interests.map((interest) => (
                            <li key={interest}>{interest}</li>
                        ))}
                    </ul>
                </div>
            </article>
        </section>
    
    );
}
