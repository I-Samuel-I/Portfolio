"use client"
import Link from "next/link";
import DarkMode from "../components/atoms/darkMode";
import LanguageBtn from "../components/atoms/languageSwitcher";
import OpenButton from "../components/atoms/openBtn";

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg">
      <main className="relative flex min-h-[940px] w-full max-w-[1850px] flex-col overflow-hidden rounded-[22px] border border-border-main bg-shell shadow-2xl shadow-black/50">
        <header className="z-10 flex h-[72px] shrink-0 items-center justify-between border-b border-border-muted bg-shell-header px-8 sm:px-9">
          <span className="text-xl font-medium tracking-normal text-text-main">
            MoonThread
          </span>
          <div className="mr-5 flex flex-row gap-5">
            <LanguageBtn />
            <DarkMode />
          </div>
        </header>

        <section className="flex flex-1 flex-col items-center justify-center px-6 text-center">
          <span className="text-8xl font-bold text-highlight">404</span>
          <h1 className="mt-6 text-4xl font-bold text-text-heading">
            Opps! Acessou uma pagina inexistente.
          </h1>
          <OpenButton>
            <Link
              href="/"
              className="mt-10 grid h-12 min-w-56 place-items-center rounded-md border border-border-muted bg-button-bg px-6 text-sm font-bold text-text-main shadow-panel transition hover:bg-button-bg-hover"
            >
              voltar para home
            </Link>
          </OpenButton>

        </section>
      </main>
    </div>
  );
}