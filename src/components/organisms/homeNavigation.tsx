"use client"

import { useState } from "react";
import HomeNavBtn from "../atoms/homeNavBtn";
import WindowAbout from "../templates/windowAbout";

type NavSection = "about" | "projects" | "contact";

export default function HomeNavigation() {
    const [activeSection, setActiveSection] = useState<NavSection | null>(null);

    return (
        <>
            <nav className="mt-10 flex w-full max-w-[154px] flex-col gap-6">
                <HomeNavBtn onClick={() => setActiveSection("about")}> about</HomeNavBtn>
                <HomeNavBtn onClick={() => setActiveSection("projects")}> projects</HomeNavBtn>
                <HomeNavBtn onClick={() => setActiveSection("contact")}> contact</HomeNavBtn>
            </nav>

            {activeSection && (

                <section className="fixed inset-0 z-50 grid place-items-center ">
                    <div className="relative flex flex-col w-[850px] h-[900px] rounded-md border border-zinc-700 bg-[#1D1922]  text-zinc-50">
                        <div className="flex items-center justify-between pb-2 text-2xl p-5">
                            <h1>about</h1>
                            <button onClick={() => setActiveSection(null)}>[ x ]</button>
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