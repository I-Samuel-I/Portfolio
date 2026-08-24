"use client";

import DarkMode from "../components/atoms/darkMode";
import LanguageBtn from "../components/atoms/languageSwitcher";
import Links from "../components/atoms/links";
import MusicButton from "../components/atoms/musicButton";
import BatPhysicsPrototype from "../components/organisms/batPhysics";
import HomeNavigation from "../components/organisms/homeNavigation";
import { useTranslation } from "../i18n/useTranslation";

export default function Home() {
  const { t } = useTranslation();

  return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg">
      <main
        className="relative flex min-h-[100dvh] lg:min-h-[min(940px,100dvh)] w-full max-w-[1200px] md:max-w-[1800px] flex-col overflow-hidden rounded-none sm:rounded-[18px] md:rounded-[22px] border border-border-main bg-shell shadow-2xl shadow-black/50"
      >
        <header className="z-10 flex h-14 md:h-[72px] shrink-0 items-center justify-between border-b border-border-muted bg-shell-header px-4 sm:px-6 md:px-8">
          <span className="text-xl font-medium tracking-normal text-text-main">
            {t.common.brand}
          </span>
          <div className="flex items-center gap-3 sm:gap-5 mr-2 sm:mr-5">
            <LanguageBtn />
            <DarkMode />
          </div>
        </header>
        <div className="pointer-events-auto absolute right-0 bottom-14 top-0 z-0 w-[70%] md:w-[60%] lg:w-[70%] hidden sm:block">
          <BatPhysicsPrototype />
        </div>

        <section className="grid flex-1 grid-cols-1 gap-8 px-6 sm:px-10 md:px-16 py-12 sm:py-20 lg:grid-cols-[minmax(280px,0.78fr)_minmax(360px,1fr)]">
          <div className="flex  flex-col justify-start pt-5 sm:pt-3">
            <h1 className="text-5xl sm:text-6xl font-normal leading-tight tracking-normal text-text-heading">
              {t.home.title}
            </h1>
            <p className="mt-3 text-xl font-normal text-text-muted">
              {t.home.role}
            </p>

            <div className="mt-10 flex w-fit flex-col items-center text-text-main">
              <span className="text-3xl font-normal tracking-normal">
                {t.common.enter}
              </span>
              <span className="mt-2 text-4xl leading-none" aria-hidden="true">
                &#8595;
              </span>
            </div>

            <HomeNavigation />
          </div>
        </section>

        <footer className="flex flex-col sm:flex-row h-auto sm:h-14 shrink-0 items-center justify-between border-t border-border-muted bg-shell-header px-4 sm:px-10 py-3 sm:py-0 gap-3">
          <div className="w-full sm:w-auto flex items-center justify-start">
            <MusicButton />
          </div>
          <div className="w-full sm:w-auto flex items-center justify-end">
            <Links />
          </div>
        </footer>
      </main>
    </div>
  );
}
