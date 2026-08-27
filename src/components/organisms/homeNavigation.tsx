"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import DraggableWindow from "./draggableWindow";
import MobileWindow from "./mobileWindow";
import { AnimatePresence, motion } from "motion/react";
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

    return (
        <>
            <nav className="home-navigation mt-10 flex w-full max-w-38.5 flex-col gap-6">
                <HomeNavBtn onClick={() => openWindow("about")}>{t.nav.about}</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("projects")}>{t.nav.projects}</HomeNavBtn>
                <HomeNavBtn onClick={() => openWindow("contact")}>{t.nav.contact}</HomeNavBtn>
            </nav>

            {/* Mobile & Tablet */}
            <section className="pointer-events-none fixed inset-0 z-50 overflow-hidden lg:hidden">
                <AnimatePresence>
                    {activeWindow.length > 0 && (
                        <motion.div
                            key="mobile-background"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="pointer-events-auto absolute inset-0 z-0 bg-black/45 backdrop-blur-sm"
                        />
                    )}

                    {activeWindow.map((title) => (
                        <MobileWindow
                            key={title}
                            title={title}
                            onClose={() => closeWindow(title)}
                        />
                    ))}
                </AnimatePresence>
            </section>

            {/* Desktop */}
            <section className="pointer-events-none fixed inset-0 z-50 hidden overflow-hidden lg:block">

                {activeWindow.map((title) => (
                    <DraggableWindow
                        key={title}
                        title={title}
                        onClose={() => closeWindow(title)}
                        onFocus={() => focusWindow(title)}
                        isFocused={focusedWindow === title}
                    />
                ))}

            </section>

        </>
    )

}
