import DarkMode from "../components/atoms/darkMode";
import HomeNavBtn from "../components/atoms/homeNavBtn";
import LanguageBtn from "../components/atoms/languageSwitcher";
import Links from "../components/atoms/links";
import MusicButton from "../components/atoms/musicButton";
import HomeNavigation from "../components/organisms/homeNavigation";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#17141D]">
      <main className="flex min-h-[925px] w-full max-w-[1850px] flex-col overflow-hidden rounded-[22px] border border-zinc-200/75 bg-[#1D1922] shadow-2xl shadow-black/50">
        <header className="flex h-[72px] shrink-0 items-center justify-between border-b border-zinc-200/75 px-8 sm:px-9">
          <span className="text-xl font-medium tracking-normal text-zinc-100">
            MoonThread
          </span>
          <div className="flex flex-row gap-5 mr-5">
            <LanguageBtn />
            <DarkMode />
          </div>
        </header>

        <section className="grid flex-1 grid-cols-1 gap-10 px-16 py-24  lg:grid-cols-[minmax(280px,0.78fr)_minmax(360px,1fr)]">
          <div className="flex  flex-col justify-start pt-5 sm:pt-3">
            <h1 className="text-6xl font-normal leading-tight tracking-normal text-zinc-50 ]">
              Hi! I&apos;m Samuel
            </h1>
            <p className="mt-3 text-xl font-normal text-zinc-100">
              Web Developer &amp; Mobile Developer
            </p>

            <div className="mt-10 flex w-fit flex-col items-center text-zinc-50">
              <span className="text-3xl font-normal tracking-normal">
                [ enter ]
              </span>
              <span className="mt-2 text-4xl leading-none" aria-hidden="true">
                &#8595;
              </span>
            </div>

            <HomeNavigation />
          </div>

          <div className="hidden min-h-[320px] lg:block" aria-hidden="true" />
        </section>

        <footer className="flex h-14 shrink-0 items-center justify-between border-t border-zinc-200/75 px-10 sm:px-12">
          <MusicButton/>
          <Links/>
        </footer>
      </main>
    </div>
  );
}


