"use client";

import Image from "next/image";
import ArrowDown from "@/src/assets/icons/arrow-down-0-1.svg"
import ArrowLeft from "@/src/assets/icons/arrow-left-0-2.svg";
import SiteIcon from "@/src/assets/icons/globe-0-2.svg";
import GithubIcon from "@/src/assets/icons/github.svg";
import { AnimatePresence, motion } from "motion/react"
import { projectsFilters, projects, techStacks, extraLinks, techIconAliases } from "../../data/project";
import { useState } from "react";
import CloseButton from "../atoms/closeBtn";
import OpenButton from "../atoms/openBtn";

export default function WindowProject() {

    const [moreDetails, setMoreDetails] = useState<number | null>(null);
    const [categorySelect, setCategorySelect] = useState<string>("all");

    const filteredProjects = [
        ...(categorySelect === "all"
            ? projects
            : projects.filter((project) => project.category === categorySelect)),
    ].sort((a, b) => {
        const dateOrder = Number(b.date) - Number(a.date);

        if (dateOrder !== 0) {
            return dateOrder;
        }

        return a.id - b.id;
    });

    const projectSelected = projects.find((project) => project.id === moreDetails)

    const normalizeTechName = (name: string) => name.toLowerCase().replace(/[^a-z0-9]/g, "");
    const libraryTech = techStacks.find((tech) => tech.title === "library");

    const modalTechs = projectSelected?.techs.map((techTitle) => {
        const normalizedTechTitle = normalizeTechName(techTitle);
        const aliasTitle = techIconAliases[normalizedTechTitle] ?? normalizedTechTitle;
        const tech = techStacks.find((item) => normalizeTechName(item.title) === normalizeTechName(aliasTitle)) ?? libraryTech;
        return {
            title: techTitle.replace(/\.+$/, ""),
            icons: tech?.icons,
        };
    }) ?? [];

    const openProjectDetails = (id: number) => {
        setMoreDetails(id);
    }
    const closeProjectDetail = () => {
        setMoreDetails(null)
    }

    return (
        <section className="relative h-full w-full overflow-hidden rounded-md bg-window text-text-main">
            <div className={`scroll-css h-full w-full p-6 ${projectSelected ? "overflow-hidden" : "overflow-y-auto"}`}>
                <header className="mb-7 grid gap-5 md:grid-cols-[1fr_220px] md:items-start">
                    <div className="flex flex-wrap gap-4">
                        {projectsFilters.map((filter) => (
                            <OpenButton
                                key={filter}
                                type="button"
                                onClick={() =>

                                    setCategorySelect(filter)}
                                className={`h-10 min-w-24 rounded-md border px-6 text-sm font-bold transition 
                                border-border-muted bg-window text-text-main hover:border-highlight 
                                hover:text-highlight cursor-pointer 
                                ${categorySelect === filter ? "border-highlight bg-button-bg text-highlight" : ""}`}>
                                {filter}
                            </OpenButton>
                        ))}
                    </div>
                </header>

                <section className="grid gap-6  border-border-muted pb-7 md:grid-cols-2 xl:grid-cols-3">

                    {filteredProjects.length === 0 && (
                        <div className="col-span-full flex flex-col items-center justify-center gap-3 rounded-md border border-border-muted bg-window p-6 text-text-main">
                            <h3 className="text-lg font-bold text-text-heading">No projects found</h3>
                            <p className="text-sm font-semibold text-text-subtle">Try selecting another category.</p>
                        </div>
                    )}

                    {filteredProjects.map((project) => {
                        const ProjectImages = project.image
                        return (
                            <article
                                key={project.id}
                                className="relative rounded-md border border-border-muted bg-window p-3 shadow-panel"
                            >
                                <div className="mt-1 mb-3 flex items-start justify-between gap-3">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight text-text-heading">
                                            {project.title}
                                        </h3>
                                    </div>
                                    <span className="grid size-7 shrink-0 place-items-center rounded-sm border-2 border-border-muted text-xs font-black text-highlight">
                                        {project.id}
                                    </span>
                                </div>
                                <OpenButton
                                    onClick={() => openProjectDetails(project.id)}
                                    className="aspect-video overflow-hidden rounded-md border border-border-muted bg-window-panel">
                                    <Image
                                        src={ProjectImages}
                                        alt="project-image"
                                        className="h-full w-full object-cover transition duration-300 hover:scale-[1.03]"
                                    />
                                </OpenButton>
                                <OpenButton
                                    type="button"
                                    onClick={() => openProjectDetails(project.id)}
                                    className="mt-3 cursor-pointer flex items-center gap-1"
                                >
                                    <h3 className="text-sm font-bold leading-tight text-highlight">
                                        More details
                                    </h3>
                                    <ArrowDown className="h-5 w-5 text-highlight" />
                                </OpenButton>
                            </article>
                        )
                    })}
                </section>

                <section className="py-7">
                    <div className="mb-5 flex items-center gap-4">
                        <h2 className="text-xl font-bold text-text-heading">tech stack & technologies</h2>
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
                    <div className="rounded-sm border border-dashed border-border-muted bg-window p-4">
                        <h3 className="mb-2 text-base font-bold text-highlight">extra content</h3>

                        <div className="flex items-start gap-3">
                            <div>
                                <ul className="list-disc pl-5 text-[12px] font-semibold leading-relaxed text-text-muted">
                                    <li>repositories, source code, and experimental projects.</li>
                                    <li>notes, studies, and development journals.</li>
                                    <li>email for contact.</li>
                                </ul>
                            </div>
                            <div className="self-stretch border-l border-border-muted" />
                            <div className="grid flex-1 gap-3 max-h-25 sm:grid-cols-3">
                                {extraLinks.map((link) => {
                                    const ExtraIcon = link.icon
                                    return (
                                        <OpenButton
                                            key={link.label}
                                            className="rounded-md border border-border-muted bg-window p-4 text-sm font-bold text-text-main 
                                            shadow-chip transition hover:border-highlight hover:text-highlight">
                                            <a href={link.link} target="_blank" rel="noopener noreferrer" className="flex flex-col gap-1">
                                                <div className="flex gap-1">
                                                    <ExtraIcon className="h-5 w-5 text-highlight" aria-hidden="true" />
                                                    <span className="block text-sm">{link.label}</span>
                                                </div>
                                                <span className="mt-1 block truncate text-xs font-semibold text-text-subtle">
                                                    {link.text}
                                                </span>
                                            </a>
                                        </OpenButton>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </footer>
            </div>

            <AnimatePresence>
                {projectSelected && (
                    <motion.div
                        key={projectSelected.id}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.25, ease: "easeOut" }}
                        className="absolute inset-0 z-50 grid place-items-center bg-black/45 p-3 backdrop-blur-sm">
                        <motion.article
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="project-modal-title"
                            initial={{ opacity: 0, scale: 0.92, y: 24 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.96, y: 12 }}
                            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                            className="scroll-css relative grid max-h-[calc(100%-2rem)] w-full max-w-6xl gap-7 overflow-y-auto rounded-md border border-border-muted bg-window p-4 pt-14 text-text-main shadow-window md:grid-cols-[1.25fr_0.9fr]"
                        >
                            <CloseButton
                                type="button"
                                onClick={() => {
                                    closeProjectDetail();
                                }}
                                aria-label="close project details"
                                className="absolute left-4 cursor-pointer top-4 grid size-8 place-items-center rounded-sm  transition hover:border-highlight hover:text-highlight"
                            >
                                <ArrowLeft className="h-8  w-8" aria-hidden="true" />
                            </CloseButton>

                            <div className="flex flex-col justify gap-4">
                                <div className="w-full overflow-hidden rounded-md border border-border-muted bg-window-panel p-2 shadow-panel md:min-w-[520px]">
                                    <Image
                                        src={projectSelected.image}
                                        alt={`Preview do projeto ${projectSelected.title}`}
                                        className="h-full w-full rounded-sm object-cover"
                                    />
                                </div>

                                <div className="flex flex-wrap items-center gap-4 text-sm font-bold text-highlight">
                                    <span>status:</span>
                                    <span className="rounded-full border border-border-muted bg-window-panel px-5 py-2 text-text-main">
                                        completed
                                    </span>
                                    <div className="flex gap-3 w-full mt-18">

                                        {projectSelected.link && (
                                            <a className="flex items-center gap-2 flex-1"
                                                href={projectSelected.link}
                                                target="_blank"
                                                rel="noreferrer">
                                                <OpenButton className="flex flex-1 h-12  items-center justify-center gap-3 rounded-md border border-border-muted 
                                            bg-window-panel px-4 text-[16px] font-bold text-highlight ">
                                                    <SiteIcon className="h-7 w-7" aria-hidden="true" />
                                                    <p>site</p>
                                                </OpenButton>
                                            </a>)
                                        }

                                        {projectSelected.github && (
                                            <a className="flex items-center  gap-2 flex-1"
                                                href={projectSelected.github}
                                                target="_blank"
                                                rel="noreferrer">
                                                <OpenButton className="flex flex-1 h-12 items-center justify-center gap-2 rounded-md border border-border-muted 
                                            bg-window-panel px-4 text-[16px] font-bold text-highlight transition">
                                                    <GithubIcon className="h-7 w-7" aria-hidden="true" />
                                                    <p>github</p>
                                                </OpenButton>
                                            </a>

                                        )}


                                    </div>
                                </div>

                            </div>

                            <div className="flex min-w-0 flex-col justify-between gap-6">
                                <div>
                                    <div className="mb-4 flex flex-wrap items-center gap-3">
                                        <h2 id="project-modal-title" className="text-3xl font-bold text-text-heading">
                                            {projectSelected.title}
                                        </h2>
                                        <span className="rounded-sm border border-border-muted bg-window-panel px-4 py-2 text-sm font-bold text-text-main">
                                            {projectSelected.date}
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-3">
                                        <p className="max-w-xl text-base font-semibold leading-relaxed text-text-muted">
                                            {projectSelected.description}
                                        </p>
                                        <div className="flex flex-wrap items-center gap-2">
                                            <p className="text-sm font-bold text-text-main">category: </p>
                                            <div className="rounded-sm border w-fit border-border-muted bg-window-panel px-4 py-2 text-sm font-bold text-highlight">
                                                {projectSelected.category}
                                            </div>
                                        </div>
                                    </div>
                                    <div className="my-6 border-t border-dashed border-border-muted" />

                                    <h3 className="mb-3 text-base font-bold text-highlight">tecnologias</h3>
                                    <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-3">
                                        {modalTechs.map((tech) => {
                                            const TechIcon = tech.icons;
                                            return (
                                                <div
                                                    key={tech.title}
                                                    className="place-items-center gap-10 rounded-md border border-border-muted bg-window-panel px-3 py-2 text-center text-[10px] font-bold text-text-main"
                                                >
                                                    {TechIcon && <TechIcon className="h-7 w-7 text-highlight" aria-hidden="true" />}
                                                    <span>{tech.title}</span>
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            </div>
                        </motion.article>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
