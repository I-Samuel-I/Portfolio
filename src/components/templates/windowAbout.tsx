import Image from "next/image";
import ProfilePic from "../../assets/images/me02.png";
import MobileIcon from "@/src/assets/icons/mobile-programming-0-1.svg"
import UxIcon from "@/src/assets/icons/web-design-0-2.svg"
import HtmlTag from "@/src/assets/icons/source-code.svg"

export default function WindowAbout() {
    return (
        <section className="scroll-css h-full w-full overflow-y-auto rounded-md bg-window p-6 text-text-main">
            <article className="flex flex-col gap-6 border-b border-border-muted pb-6 md:flex-row ">
                <div className="mx-auto flex w-full  items-center justify-center">
                    <Image
                        src={ProfilePic}
                        alt="Foto de Samuel Gomes"
                        width={300}
                        height={300}
                        className="h-90 w-90 rounded-full  object-cover"
                    />
                </div>
                <div className="flex w-full flex-col">

                    <h1 className="text-4xl font-bold leading-none tracking-normal text-text-heading">
                        hi! i&apos;m samuel,
                    </h1>
                    <div className="mt-2 h-0.75 w-64 max-w-full bg-highlight" />
                    <h2 className="mt-4 text-lg font-bold text-highlight">
                        web developer & mobile developer...
                    </h2>

                    <div className="mt-4 max-w-xl space-y-4 text-base leading-relaxed text-text-muted">
                        <p>
                            I&apos;m a full-stack web and mobile developer with 1 year of professional experience.
                            I enjoy building different kinds of systems, thinking about both the technical
                            side and the experience of the people who will use them, always looking to turn
                            problems into simple, useful, and well-built solutions.
                        </p>
                        <p>
                            In my personal projects, I like to bring a more handcrafted feeling to the interface. I&apos;m
                            interested in hand-drawn elements, small imperfections, and visual details that make each
                            project feel built with care, intention, and personality... I think that comes, in part, from
                            my love for stop-motion films.
                        </p>
                    </div>
                </div>
            </article>
            <article className="flex flex-row  gap-4 border-b  border-border-muted py-6">
                <div className="inline-flex w-full h-12  items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <HtmlTag className="h-7 w-7 text-highlight" />
                    <span>web dev</span>
                </div>

                <div className="inline-flex h-12 w-full items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <MobileIcon className="h-7 w-7 text-highlight" />
                    <span>mobile dev</span>
                </div>

                <div className="inline-flex h-12  w-full items-center justify-center gap-3 rounded-md border-2 border-border-muted bg-window-panel px-4 text-sm font-bold text-text-main shadow-chip">
                    <UxIcon className="h-7 w-7 text-highlight" />
                    <span>ux/ui design</span>
                </div>
            </article>

            <article className="grid gap-6 py-6 md:grid-cols-3">
                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">education</h3>
                    <div className="space-y-5 text-sm leading-relaxed  font-medium text-text-muted">
                        <div>
                            <p className="text-text-main">Computer Technician</p>
                            <p className="text-highlight">Federal Institute of Paraiba</p>
                        </div>
                        <div>
                            <p className="text-text-main">Systems Analysis and Development</p>
                            <p className="text-highlight">UNIFIP University Center</p>
                        </div>
                    </div>
                </div>

                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">languages</h3>
                    <ul className=" space-y-3 pl-5 text-sm leading-relaxed font-medium text-text-muted">
                        <li>
                            Portuguese
                            <span className="block text-highlight">Fluent</span>
                        </li>
                        <li>
                            English
                            <span className="block text-highlight">Intermediate</span>
                        </li>
                    </ul>
                </div>

                <div className="min-h-56 rounded-md border border-border-muted bg-window-panel p-5 shadow-panel">
                    <h3 className="mb-5 text-lg font-bold text-highlight">interests</h3>
                    <ul className="list-disc space-y-1 pl-5 text-sm font-medium leading-relaxed text-text-muted">
                        <li>Indie games</li>
                        <li>Digital illustration</li>
                        <li>Volleyball</li>
                        <li>Playing piano</li>
                        <li>Steampunk and horror themes</li>
                    </ul>
                </div>
            </article>
        </section>
    );
}
