"use client";

import Image from "next/image";
import { useState } from "react";
import ArrowDown from "@/src/assets/icons/arrow-down-0-1.svg";
import ArrowLeft from "@/src/assets/icons/arrow-left-0-2.svg";
import GithubIcon from "@/src/assets/icons/github.svg";
import SiteIcon from "@/src/assets/icons/globe-0-2.svg";
import { useTranslation } from "@/src/i18n/useTranslation";
import { projects, projectsFilters } from "../../data/project";
import OpenButton from "../atoms/openBtn";

export default function MobileProject() {
    const { t } = useTranslation();
    const [category, setCategory] = useState("all");
    const [selectedId, setSelectedId] = useState<number | null>(null);

    const filteredProjects = projects
        .filter((project) => category === "all" || project.category === category)
        .sort((a, b) => Number(b.date) - Number(a.date) || a.id - b.id);
    const selectedProject = projects.find((project) => project.id === selectedId);

    if (selectedProject) {
        return (
            <article className="scroll-css h-full overflow-y-auto overscroll-contain touch-pan-y bg-window px-4 pb-8 pt-4 text-text-main">
                <button
                    type="button"
                    onClick={() => setSelectedId(null)}
                    className="mb-4 flex min-h-11 items-center gap-2 font-bold md:text-xl text-highlight"
                    aria-label={t.project.closeDetails}
                >
                    <ArrowLeft className="h-7 w-7" aria-hidden="true" />
                    <span>{t.common.close}</span>
                </button>

                <div className="overflow-hidden rounded-md border border-border-muted bg-window-panel p-2 shadow-panel">
                    <Image src={selectedProject.image} alt={`Preview do projeto ${selectedProject.title}`} className="aspect-video w-full rounded-sm object-cover" />
                </div>

                <div className="mt-5 flex items-start justify-between gap-3">
                    <div>
                        <h2 className="text-3xl font-bold text-text-heading">{selectedProject.title}</h2>
                        <p className="mt-1 text-sm font-bold text-highlight">{selectedProject.date}</p>
                    </div>
                    <span className="rounded-sm border border-border-muted bg-window-panel px-3 py-2 text-xs font-bold text-highlight">
                        {selectedProject.category}
                    </span>
                </div>

                <p className="mt-5 text-sm md:text-xl font-semibold leading-relaxed text-text-muted">
                    {t.project.descriptions[selectedProject.descriptionKey as keyof typeof t.project.descriptions]}
                </p>

                <div className="mt-6">
                    <h3 className="mb-3 font-bold md:text-xl text-highlight">{t.common.technologies}</h3>
                    <div className="flex flex-wrap gap-2">
                        {selectedProject.techs.map((tech) => (
                            <span key={tech} className="rounded-md border border-border-muted bg-window-panel px-3 py-2 text-xs font-bold">
                                {tech.replace(/\.+$/, "")}
                            </span>
                        ))}
                    </div>
                </div>

                <div className="mt-7 grid gap-3">
                    {selectedProject.link && (
                        <a href={selectedProject.link} target="_blank" rel="noreferrer" className="flex h-12 items-center justify-center gap-3 rounded-md border border-border-muted bg-window-panel font-bold md:text-xl text-highlight">
                            <SiteIcon className="h-6 w-6" aria-hidden="true" /> {t.common.site}
                        </a>
                    )}
                    {selectedProject.github && (
                        <a href={selectedProject.github} target="_blank" rel="noreferrer" className="flex h-12 items-center justify-center gap-3 rounded-md border border-border-muted bg-window-panel font-bold md:text-xl text-highlight">
                            <GithubIcon className="h-6 w-6" aria-hidden="true" /> {t.common.github}
                        </a>
                    )}
                </div>
            </article>
        );
    }

    return (
        <section className="scroll-css h-full overflow-y-auto overscroll-contain touch-pan-y bg-window px-4 pb-8 pt-5 text-text-main">
            <header className="border-b border-border-muted pb-5">
                <h2 className="text-3xl font-bold text-text-heading">{t.nav.projects}</h2>
                <div className="mt-2 h-0.75 w-32 bg-highlight" />
                <div className="mt-5 flex gap-2 overflow-x-auto pb-1">
                    {projectsFilters.map((filter) => (
                        <OpenButton
                            key={filter}
                            type="button"
                            onClick={() => setCategory(filter)}
                            className={`h-10 shrink-0 rounded-md border px-5 text-sm md:text-xl font-bold ${category === filter ? "border-highlight bg-button-bg text-highlight" : "border-border-muted bg-window"}`}
                        >
                            {t.project.filters[filter as keyof typeof t.project.filters]}
                        </OpenButton>
                    ))}
                </div>
            </header>

            <div className="grid gap-4 pt-5">
                {filteredProjects.length === 0 && (
                    <div className="rounded-md border border-border-muted p-6 text-center">
                        <h3 className="font-bold md:text-xl text-text-heading">{t.project.noProjects}</h3>
                        <p className="mt-2 text-sm md:text-xl text-text-subtle">{t.project.tryAnother}</p>
                    </div>
                )}

                {filteredProjects.map((project) => (
                    <article key={project.id} className="rounded-md border border-border-muted bg-window-panel p-3 shadow-panel">
                        <div className="mb-3 flex items-start justify-between gap-3">
                            <div>
                                <h3 className="text-lg md:text-xl font-bold text-text-heading">{project.title}</h3>
                                <p className="text-xs font-bold text-highlight">{project.date}</p>
                            </div>
                            <span className="grid size-7 place-items-center rounded-sm border-2 border-border-muted text-xs font-black text-highlight">{project.id}</span>
                        </div>
                        <button type="button" onClick={() => setSelectedId(project.id)} className="block w-full overflow-hidden rounded-md border border-border-muted">
                            <Image src={project.image} alt={`Preview do projeto ${project.title}`} className="aspect-video w-full object-cover" />
                        </button>
                        <button type="button" onClick={() => setSelectedId(project.id)} className="mt-3 flex min-h-10 items-center gap-1 text-sm md:text-xl font-bold text-highlight">
                            {t.project.moreDetails}<ArrowDown className="h-5 w-5" aria-hidden="true" />
                        </button>
                    </article>
                ))}
            </div>
        </section>
    );
}
