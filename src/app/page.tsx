import DarkMode from "../components/atoms/darkMode";
import LanguageBtn from "../components/atoms/languageSwitcher";
import Links from "../components/atoms/links";
import MusicButton from "../components/atoms/musicButton";
import BatPhysicsPrototype from "../components/organisms/batPhysics";
import HomeNavigation from "../components/organisms/homeNavigation";



export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-app-bg">
      <main className="relative flex min-h-[925px] w-full max-w-[1850px] flex-col overflow-hidden rounded-[22px] border border-border-main bg-shell shadow-2xl shadow-black/50">
        <header className="z-10 flex h-[72px] shrink-0 items-center justify-between border-b border-border-muted bg-shell-header px-8 sm:px-9">
          <span className="text-xl font-medium tracking-normal text-text-main">
            MoonThread
          </span>
          <div className="flex flex-row gap-5 mr-5">
            <LanguageBtn />
            <DarkMode />
          </div>
        </header>

        <div className="pointer-events-auto absolute right-0 bottom-14 top-[72px] z-0 w-[70%] border border-border-soft">
          <BatPhysicsPrototype />
        </div>

        <section className="grid flex-1 grid-cols-1 gap-10 px-16 py-24  lg:grid-cols-[minmax(280px,0.78fr)_minmax(360px,1fr)]">
          <div className="flex  flex-col justify-start pt-5 sm:pt-3">
            <h1 className="text-6xl font-normal leading-tight tracking-normal text-text-heading">
              Hi! I&apos;m Samuel
            </h1>
            <p className="mt-3 text-xl font-normal text-text-muted">
              Web Developer &amp; Mobile Developer
            </p>

            <div className="mt-10 flex w-fit flex-col items-center text-text-main">
              <span className="text-3xl font-normal tracking-normal">
                [ enter ]
              </span>
              <span className="mt-2 text-4xl leading-none" aria-hidden="true">
                &#8595;
              </span>
            </div>

            <HomeNavigation />
          </div>
        </section>

        <footer className="flex h-14 shrink-0 items-center justify-between border-t border-border-muted bg-shell-header px-10 sm:px-12">
          <MusicButton />
          <Links />
        </footer>
      </main>
    </div>
  );
}


