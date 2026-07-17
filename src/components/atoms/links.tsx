"use client"

import { SOCIAL } from "@/src/constants/externalLink"
import { sounds } from "../../data/sounds"

export default function Links() {

    const playOpenSound = () => {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.45
        audio.play();
    }
    return (
        <nav aria-label="Links sociais">
            <button className="flex items-center gap-3" onClick={playOpenSound}>
                {SOCIAL.map(({ label, href, Icon }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" className="flex h-9 w-9 items-center justify-center text-text-main transition-all duration-200
                hover:scale-110 hover:text-highlight">
                        <Icon className="h-8.5 w-8.5" aria-hidden="true" />
                    </a>
                ))}
            </button>
        </nav>
    )
}

