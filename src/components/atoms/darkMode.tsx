
"use client"

import MoonIcon from "@/src/assets/icons/moon.svg"
import SunIcon from "@/src/assets/icons/sun.svg"
import { useEffect, useState } from "react"
import { sounds } from "../../data/sounds"

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(true);
    const [isHolding, setIsHolding] = useState(false)

    useEffect(() => {
        document.documentElement.dataset.theme = isDarkMode ? "dark" : "light"
    }, [isDarkMode])

    const toogleDarkMode = () => {
        const nextIsDarkMode = !isDarkMode
        const nextTheme = nextIsDarkMode ? "dark" : "light"

        playModeSound(nextTheme)

        setIsDarkMode(nextIsDarkMode)
    }

    const playModeSound = (nextTheme: "dark" | "light") => {
        const sound = nextTheme === "dark" ? sounds.lightMode : sounds.darkMode;
        const audio = new Audio(sound)
        audio.volume = 0.10
        audio.play();
    }

    const Icon = isDarkMode ? MoonIcon : SunIcon
    return (
        <>
            <button
                type="button"
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onClick={() => {
                    toogleDarkMode()
                }}
                aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
                aria-pressed={isDarkMode}
                className={` transition-all duration-200 cursor-pointer
                ${isHolding ? "scale-80" : "scale-100"}`}>
                <Icon className="h-8.5 w-8.5 text-text-main" aria-hidden="true" />
            </button>
        </>
    )
}
