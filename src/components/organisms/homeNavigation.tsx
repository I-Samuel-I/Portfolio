"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import WindowAbout from "../templates/windowAbout";
import { useDraggableWindow } from "../../hooks/useDraggableWindow";
import WindowProject from "../templates/windowProject";

type NavSection = "about" | "projects" | "contact";

export default function HomeNavigation() {
    const [activeSection, setActiveSection] = useState<NavSection[]>([]);
    const isWindowOpen = activeSection.length > 0;


    function openWindow(section: NavSection) {
        setActiveSection((current)=>{
            if (current.includes(section)) {
                return current.filter((s) => s !== section);
            }
            return [...current, section];
        })
    }

    function closeWindow(section: NavSection) {
        setActiveSection((current)=>{
            return current.filter((s) => s !== section);
        })
    }

    const { windowProps, dragHandleProps, isDragging } = useDraggableWindow(isWindowOpen)
    return (
        <>
            <nav className="mt-10 flex w-full max-w-38.5 flex-col gap-6">
                <HomeNavBtn onClick={() => openWindow("about")}> about</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("projects")}> projects</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("contact")}> contact</HomeNavBtn>
            </nav>

            {activeSection.length > 0 && (

                <section className="fixed inset-0 z-50 overflow-hidden">
                    <div
                        {...windowProps}
                        className="absolute flex h-225 max-h-[calc(100vh-24px)] w-212.5 max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-md border border-zinc-700 bg-[#1D1922] text-zinc-50">
                        <div
                            {...dragHandleProps}
                            className={`flex shrink-0 select-none touch-none items-center justify-between p-5 pb-2 text-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"}`}>

                            <h1>{activeSection}</h1>
                            <button
                                onPointerDown={(event) => event.stopPropagation()}
                                onClick={() => setActiveSection([])}
                            >
                                [ x ]
                            </button>
                        </div>
                        <div className="relative min-h-0 flex-1 p-3">
                            {activeSection.includes("about") && <WindowAbout />}
                            {activeSection.includes("projects") && <WindowProject />}
                        </div>
                    </div>
                </section>
            )}
        </>
    )

}
