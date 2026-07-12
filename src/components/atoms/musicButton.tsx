"use client"

import HeadphoneMuteIcon from "@/src/assets/icons/headphone-mute.svg"
import MusicIcon from "@/src/assets/icons/music-note-square.svg"
import { useState } from "react"

export default function MusicButton() {
    const [isMuted, setIsMuted] = useState(true);
    const [isHolding, setIsHolding] = useState(false)


    const toggleMusic = () => {
        setIsMuted((current) => !current)
    }

    const Icon = isMuted ? HeadphoneMuteIcon : MusicIcon

    return (
        <>
            <button
                type="button"
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onClick={toggleMusic}
                aria-label={isMuted ? "Ativar musica" : "Desativar musica"}
                aria-pressed={isMuted}
                className={` transition-all duration-200 cursor-pointer
                ${isHolding ? "scale-80" : "scale-100"}`}>
                <Icon className="h-8.5 w-8.5 text-white" aria-hidden="true" />
            </button>
        </>
    )
}
