import { projectsFilters, projects, techStacks, extraLinks } from "../../data/project";

export default function WindowProject() {
    return (
        <section className="scroll-css h-full w-full overflow-y-auto rounded-md bg-window p-6 text-text-main shadow-window-inset">
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

            <section className="grid gap-6 border-b border-dashed border-border-muted pb-7 md:grid-cols-2 xl:grid-cols-3">
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

            <section className="border-b border-dashed border-border-muted py-7">
                <div className="mb-5 flex items-center gap-4">
                    <h2 className="text-xl font-bold text-text-heading">tech stack & tecnologias</h2>
                    <span className="h-px flex-1 border-t border-dashed border-border-muted" />
                </div>

                <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 xl:grid-cols-8">
                    {techStacks.map((tech) => (
                        <div
                            key={tech.title}
                            className="grid min-h-16 place-items-center rounded-md border border-border-muted bg-window px-3 py-2 text-center text-xs font-bold text-text-main shadow-chip"
                        >
                            <span>{tech.image}</span>
                        </div>
                    ))}
                </div>
            </section>

            <footer className="grid gap-5 pt-6 md:grid-cols-[1fr_1.25fr]">
                <div className="rounded-sm border border-dashed border-border-muted bg-window p-4">
                    <h3 className="mb-3 text-base font-bold text-highlight">conteudo extra</h3>
                    <ul className="list-disc space-y-2 pl-5 text-sm font-semibold leading-relaxed text-text-muted">
                        <li>repositorios, codigo-fonte e projetos experimentais.</li>
                        <li>anotacoes, estudos e diarios de desenvolvimento.</li>
                        <li>recursos uteis e ferramentas que uso no dia a dia.</li>
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
            </footer>

        </section>
    );
}
