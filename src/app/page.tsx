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

    <main
      className=" relative flex h-[100dvh] w-full flex-col overflow-hidden bg-shell"
    >
      <header className="z-10 flex min-h-16 shrink-0 items-center justify-between border-b border-border-muted bg-shell-header px-6 py-3 sm:px-10">
        <span className="text-xl font-medium tracking-normal text-text-main">
          {t.common.brand}
        </span>
        <div className="flex items-center  gap-7 mr-3">
          <LanguageBtn />
          <DarkMode />
        </div>
      </header>
      <div className="pointer-events-auto absolute right-0 bottom-14 top-0 z-0 w-[70%] md:w-[60%] lg:w-[70%] hidden sm:block">
        <BatPhysicsPrototype />
      </div>

      <section className="  scroll-css min-h-0 flex-1 overflow-y-auto
        px-6 
        sm:px-10 sm:py-10
        md:px-16
        lg:py-12">

        <div className="home-content flex flex-col justify-start pt-5 sm:pt-3">
          <h1 className="home-content__title text-[40px] sm:text-5xl 2xl:text-6xl font-normal leading-tight tracking-normal text-text-heading">
            {t.home.title}
          </h1>
          <p className="mt-3  text-[20px]  font-normal text-text-muted">
            {t.home.role}
          </p>

          <div className="home-entry mt-10 flex w-fit flex-col items-center text-text-main">
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

      <footer className="grid shrink-0 grid-cols-2 mt-10 items-center gap-x-4 gap-y-3 border-t border-border-muted bg-shell-header px-4 py-3 sm:h-16 sm:grid-cols-[1fr_auto_1fr] sm:px-10 sm:py-0">
        <div className="flex items-center justify-start">
          <MusicButton />
        </div>

        <p className="col-span-2 row-start-2 text-center mt-6 text-xs font-medium tracking-wide text-text-muted sm:col-span-1 sm:col-start-2 sm:row-start-1 sm:text-sm">
          &copy; 2026 Samuel Gomes
        </p>

        <div className="flex items-center justify-end sm:col-start-3">
          <Links />
        </div>
      </footer>
    </main>

  );
}
