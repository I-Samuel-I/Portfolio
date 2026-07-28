import { projectsFilters, projects, techStacks, extraLinks } from "../../data/project";

export default function WindowProject() {
    return (
        <section className="scroll-css h-full w-full overflow-y-auto rounded-md bg-window p-6 text-text-main">
            <header className="mb-7 grid gap-5 md:grid-cols-[1fr_220px] md:items-start">
                <div className="flex flex-wrap gap-4 pl-8">
                    {projectsFilters.map((filter, index) => (
                        <button
                            key={filter}
                            type="button"
                            className={`h-10 min-w-24 rounded-md border px-6 text-sm font-bold transition ${index === 0
                                ? "border-highlight bg-button-bg text-text-main"
                                : "border-border-muted bg-window text-text-main hover:border-highlight hover:text-highlight"
                                }`}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

            </header>

            <section className="grid gap-6  border-border-muted pb-7 md:grid-cols-2 xl:grid-cols-3">
                {projects.map((project, index) => (
                    <article
                        key={project.id}
                        className="relative rounded-md border border-border-muted bg-window p-3 shadow-panel"
                    >
                        <div className="mt-3 flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-lg font-bold leading-tight text-text-heading">
                                    {project.title}
                                </h3>
                                <p className="mt-1 text-sm font-semibold leading-relaxed text-text-muted">
                                    {project.description}
                                </p>
                            </div>
                            <span className="grid size-7 shrink-0 place-items-center rounded-sm border border-border-muted text-xs font-bold text-highlight">
                                {index + 1}
                            </span>
                        </div>
                    </article>
                ))}
            </section>

            <section className="py-7">
                <div className="mb-5 flex items-center gap-4">
                    <h2 className="text-xl font-bold text-text-heading">tech stack & tecnologias</h2>
                    <span className="h-px flex-1 border-t border-dashed border-border-muted" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-7">
                    {techStacks.map((tech) => {
                        const TechIcon = tech.icons;
                        return (
                            <div
                                key={tech.title}
                                className="flex min-h-20 flex-col items-center justify-center gap-2 rounded-md border border-border-muted bg-window px-3 py-2 text-center text-xs font-bold text-text-main shadow-chip"
                            >
                                <TechIcon className="h-7 w-7 text-highlight" aria-hidden="true" />
                                <span>{tech.title}</span>
                            </div>
                        );
                    })}
                </div>
            </section>

            <footer className="flex flex-col">
                <div className="rounded-sm flex border border-dashed border-border-muted bg-window p-4">
                    <div>
                        <h3 className="mb-3 text-base font-bold text-highlight">conteudo extra</h3>
                        <ul className="list-disc pace-y-2 pl-5 text-[12px] font-semibold leading-relaxed text-text-muted">
                            <li>repositorios, codigo-fonte e projetos experimentais.</li>
                            <li>anotacoes, estudos e diarios de desenvolvimento.</li>
                            <li>email para contato.</li>
                        </ul>
                    </div>


                    <div className="grid gap-3 sm:grid-cols-3">
                        {extraLinks.map((link) => (
                            <a
                                key={link.label}
                                href="#"
                                className="rounded-md border border-border-muted bg-window p-4 text-sm font-bold text-text-main shadow-chip transition hover:border-highlight hover:text-highlight"
                            >
                                <span className="block text-base">{link.label}</span>
                                <span className="mt-1 block truncate text-xs font-semibold text-text-subtle">
                                    {link.text}
                                </span>
                            </a>
                        ))}
                    </div>
                </div>


            </footer>

        </section>
    );
}
