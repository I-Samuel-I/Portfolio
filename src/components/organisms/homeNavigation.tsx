"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import WindowAbout from "../templates/windowAbout";
import { useDraggableWindow } from "../../hooks/useDraggableWindow";

type NavSection = "about" | "projects" | "contact";

export default function HomeNavigation() {
    const [activeSection, setActiveSection] = useState<NavSection | null>(null);
    const isWindowOpen = activeSection !== null;

    const { windowProps, dragHandleProps, isDragging } = useDraggableWindow(isWindowOpen)
    return (
        <>
            <nav className="mt-10 flex w-full max-w-[154px] flex-col gap-6">
                <HomeNavBtn onClick={() => setActiveSection("about")}> about</HomeNavBtn>
                <HomeNavBtn onClick={() => setActiveSection("projects")}> projects</HomeNavBtn>
                <HomeNavBtn onClick={() => setActiveSection("contact")}> contact</HomeNavBtn>
            </nav>

            {activeSection && (

                <section className="fixed inset-0 z-50 overflow-hidden">
                    <div
                        {...windowProps}
                        className="absolute flex h-[900px] max-h-[calc(100vh-24px)] w-[850px] max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-md border border-zinc-700 bg-[#1D1922] text-zinc-50">
                        <div
                            {...dragHandleProps}
                            className={`flex shrink-0 select-none touch-none items-center justify-between p-5 pb-2 text-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>


                             <h1>{activeSection}</h1>
                            <button
                                onPointerDown={(event) => event.stopPropagation()}
                                onClick={() => setActiveSection(null)}
                            >
                                [ x ]
                            </button>
                        </div>
                        <div className="relative min-h-0 flex-1 p-3">
                            {activeSection === "about" && <WindowAbout />}
                        </div>

                    </div>

                </section>

            )}


        </>
    )

}
