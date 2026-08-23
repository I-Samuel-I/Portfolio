"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import DraggableWindow from "./draggableWindow";
import { AnimatePresence } from "motion/react";
import { useTranslation } from "@/src/i18n/useTranslation";

type NavSection = "about" | "projects" | "contact";

export default function HomeNavigation() {
    const [activeWindow, setActiveWindow] = useState<NavSection[]>([]);
    const [focusedWindow, setFocusedWindow] = useState<NavSection | null>(null);
    const { t } = useTranslation();

    function openWindow(section: NavSection) {
        setActiveWindow((current) => {
            const filtered = current.filter((s) => s !== section);
            return [...filtered, section];
        })
        setFocusedWindow(section);
    }

    function closeWindow(section: NavSection) {
        setActiveWindow((current) => {
            return current.filter((s) => s !== section);
        })
    }

    function focusWindow(section: NavSection) {
        setFocusedWindow(section);
    }
    
    const  isTopWindow = activeWindow[activeWindow.length - 1] === focusedWindow;
    return (
        <>
            <nav className="mt-10 flex w-full max-w-38.5 flex-col gap-6">
                <HomeNavBtn onClick={() => openWindow("about")}>{t.nav.about}</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("projects")}>{t.nav.projects}</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("contact")}>{t.nav.contact}</HomeNavBtn>
            </nav>
            <section className={`
            fixed pointer-events-none fixed inset-0 z-50 overflow-hidden inset-0 z-50 overflow-hidden ${isTopWindow ? "pointer-events-auto" : "pointer-events-none"}`}>
                <AnimatePresence>
                    {activeWindow.map((title) => (
                        <DraggableWindow
                            key={title}
                            title={title}
                            onClose={() => closeWindow(title)}
                            onFocus={()=> focusWindow(title)}
                            isFocused={focusedWindow=== title}
                        />
                    ))}
                </AnimatePresence>

            </section>

        </>
    )

}
