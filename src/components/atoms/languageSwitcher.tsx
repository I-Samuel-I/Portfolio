'use client'

import LanguageIcon from "@/src/assets/icons/earth.svg"
import { useState } from "react"
import { sounds } from "../../data/sounds"
import { useTranslation } from "@/src/i18n/useTranslation"

export default function LanguageBtn() {
    const [moreOptions, setMoreOptions] = useState(false);
    const [isHolding, setIsHolding] = useState(false)
    const { setLanguage, t } = useTranslation();

    const toggleOptions = () => {
        setMoreOptions((current) => !current)
    }

    const playOpenSound = () => {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.45
        audio.play();
    }

    const handleLanguageChange = (nextLanguage: "pt" | "en") => {
        setLanguage(nextLanguage);
        setMoreOptions(false);
    }

    return (
        <div className="relative flex items-center ">
            <button
                type="button"
                onClick={() => {
                    playOpenSound();
                    toggleOptions();
                }}
                onPointerDown={() => setIsHolding(true)}
                onPointerUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onPointerCancel={() => setIsHolding(false)}
                aria-label={t.common.language}
                aria-expanded={moreOptions}
                className={`${isHolding ? "scale-80" : "scale-100"}
                flex h-9 w-9 cursor-pointer items-center justify-center transition-all duration-200`}>
                <LanguageIcon className="block h-8.5 w-8.5 text-text-main" aria-hidden="true" />
            </button>

            {moreOptions && (
                <div className="absolute right-[-12px] top-full z-50 mt-4 w-40 rounded-sm border border-border-main 
                bg-window-header px-2 py-2 text-text-main ">
                    <span className="absolute -top-[9px] right-5 h-4 w-4 rotate-45 border-l border-t border-border-main 
                    bg-window-header" />
                    <button
                        type="button"
                        onClick={() => handleLanguageChange("en")}
                        className=" cursor-pointer flex w-full items-center px-3 py-2 text-left text-xm font-normal tracking-normal 
                        text-text-main transition-colors duration-200 hover:bg-window-panel"
                    >
                        {t.common.english}
                    </button>
                    <div className="mx-1 h-px bg-border-soft" />
                    <button
                        type="button"
                        onClick={() => handleLanguageChange("pt")}
                        className="  cursor-pointer flex w-full items-center px-3 py-2 text-left text-xm font-normal tracking-normal 
                        text-text-main transition-colors duration-200 hover:bg-window-panel"
                    >
                        {t.common.portuguese}
                    </button>
                </div>
            )}
        </div>
    )
}
