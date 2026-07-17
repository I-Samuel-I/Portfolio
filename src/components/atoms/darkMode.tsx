
"use client"

import MoonIcon from "@/src/assets/icons/moon.svg"
import SunIcon from "@/src/assets/icons/sun.svg"
import { useState } from "react"

export default function DarkMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);
    const [isHolding, setIsHolding] = useState(false)


    const toogleDarkMode = () => {
        setIsDarkMode((current) => !current)
    }
    const Icon = isDarkMode ? MoonIcon : SunIcon
    return (
        <>
            <button
                type="button"
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onClick={toogleDarkMode}
                aria-label={isDarkMode ? "Ativar modo claro" : "Ativar modo escuro"}
                aria-pressed={isDarkMode}
                className={` transition-all duration-200 cursor-pointer
                ${isHolding ? "scale-80" : "scale-100"}`}>
                <Icon className="h-8.5 w-8.5 text-text-main" aria-hidden="true" />
            </button>
        </>
    )
}
