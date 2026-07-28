"use client"

import HeadphoneMuteIcon from "@/src/assets/icons/headphone-mute.svg"
import MusicIcon from "@/src/assets/icons/music-note-square.svg"
import { useRef, useState } from "react"
import { motion } from "motion/react"
import { sounds } from "../../data/sounds";

export default function MusicButton() {
    const [isMuted, setIsMuted] = useState(true);
    const [isHolding, setIsHolding] = useState(false)
    const musicRef = useRef<HTMLAudioElement | null>(null);

    function playClickSound() {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.45
        audio.play();
    }
    const toggleMusic = () => {
        playClickSound();

        if (!musicRef.current) {
            musicRef.current = new Audio(sounds.musicTheme01)
            musicRef.current.volume = 0.10
            musicRef.current.loop = true
        }

        setIsMuted((current) => {
            const muted = !current

            if (muted) {
                musicRef.current?.pause()
                musicRef.current!.currentTime = 0
            } else {
                musicRef.current?.play()
            }
            return muted
        })
    }
    const Icon = isMuted ? HeadphoneMuteIcon : MusicIcon

    return (
        <>
            <motion.button

                animate={
                    !isMuted
                        ? {
                            scale: [1, 1.20, 1],
                            opacity: [1, 0.65, 1],
                        }
                        : {
                            scale: 1,
                            opacity: 1,
                        }
                }
                transition={
                    !isMuted
                        ? {
                            duration: 1.6,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }
                        : {
                            duration: 0.2,
                        }
                }

                type="button"
                onMouseDown={() => setIsHolding(true)}
                onMouseUp={() => setIsHolding(false)}
                onPointerLeave={() => setIsHolding(false)}
                onClick={toggleMusic}
                aria-label={isMuted ? "Ativar musica" : "Desativar musica"}
                aria-pressed={isMuted}
                className={` transition-all duration-200 cursor-pointer
                ${isHolding ? "scale-80" : "scale-100"}`}>
                <Icon className="h-8.5 w-8.5 text-text-main" aria-hidden="true" />
            </motion.button>
        </>
    )
}
