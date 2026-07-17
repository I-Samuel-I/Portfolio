"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import DraggableWindow from "./draggableWindow";
import { AnimatePresence } from "motion/react";

type NavSection = "about" | "projects" | "contact";

export default function HomeNavigation() {
    const [activeWindow, setActiveWindow] = useState<NavSection[]>([]);


    function openWindow(section: NavSection) {
        setActiveWindow((current) => {
            if (current.includes(section)) {
                return current;
            }
            return [...current, section];
        })
    }

    function closeWindow(section: NavSection) {
        setActiveWindow((current) => {
            return current.filter((s) => s !== section);
        })
    }

    return (
        <>
            <nav className="mt-10 flex w-full max-w-38.5 flex-col gap-6">
                <HomeNavBtn onClick={() => openWindow("about")}> about</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("projects")}> projects</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("contact")}> contact</HomeNavBtn>
            </nav>
                <section className="fixed pointer-events-none fixed inset-0 z-50 overflow-hidden inset-0 z-50 overflow-hidden">
                    <AnimatePresence>
                        {activeWindow.map((title) => (
                            <DraggableWindow
                                key={title}
                                title={title}
                                onClose={() => closeWindow(title)}
                            />
                        ))}
                    </AnimatePresence>

                </section>
         
        </>
    )

}
