'use client'

import LanguageIcon from "@/src/assets/icons/earth.svg"
import { useState } from "react"

export default function LanguageBtn() {
    const [moreOptions, setMoreOptions] = useState(false);
    const [isHolding, setIsHolding] = useState(false)


    const toggleOptions = () => {
        setMoreOptions((current) => !current)
    }

    return (
        <div className="relative flex items-center ">
            <button
                type="button"
                onClick={toggleOptions}
                onPointerDown={() => setIsHolding(true)}
                onPointerUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onPointerCancel={() => setIsHolding(false)}
                aria-label="Selecionar idioma"
                aria-expanded={moreOptions}
                className={`${isHolding ? "scale-80" : "scale-100"}
                flex h-9 w-9 cursor-pointer items-center justify-center transition-all duration-200`}>
                <LanguageIcon className="block h-8.5 w-8.5 text-text-main" aria-hidden="true" />
            </button>

            {moreOptions && (
                <div className="absolute right-[-12px] top-full z-30 mt-4 w-40 rounded-sm border border-border-main 
                bg-window-header px-2 py-2 text-text-main ">
                    <span className="absolute -top-[9px] right-5 h-4 w-4 rotate-45 border-l border-t border-border-main 
                    bg-window-header" />
                    <button
                        type="button"
                        onClick={() => setMoreOptions(false)}
                        className=" cursor-pointer flex w-full items-center px-3 py-2 text-left text-xm font-normal tracking-normal 
                        text-text-main transition-colors duration-200 hover:bg-window-panel"
                    >
                        English
                    </button>
                    <div className="mx-1 h-px bg-border-soft" />
                    <button
                        type="button"
                        onClick={() => setMoreOptions(false)}
                        className="  cursor-pointer flex w-full items-center px-3 py-2 text-left text-xm font-normal tracking-normal 
                        text-text-main transition-colors duration-200 hover:bg-window-panel"
                    >
                        Portugues
                    </button>
                </div>
            )}
        </div>
    )
}
