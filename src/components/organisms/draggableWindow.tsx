"use client"

type WindowType = "about" | "projects" | "contact";


import { motion } from "motion/react"
import { useDraggableWindow } from "../../hooks/useDraggableWindow";
import WindowAbout from "../templates/windowAbout";
import WindowContact from "../templates/windowContact";
import WindowProject from "../templates/windowProject";
import { sounds } from "../../data/sounds";

type DraggableWindowProps = {
    title: string;
    onClose: () => void;
    onFocus: () => void;
    isFocused: boolean;
}

const windowSize: Record<WindowType, string> = {
    about: "h-190 w-230",
    projects: "h-190 w-200",
    contact: "h-180 w-175",
};

export default function DraggableWindow({ title, onClose, onFocus, isFocused }: DraggableWindowProps) {

    const { windowProps, dragHandleProps, isDragging } = useDraggableWindow(true)

    function playCloseSound() {
        const audio = new Audio(sounds.closeWindow)
        audio.volume = 0.35
        audio.play();
    }

    return (
        <motion.div
            onPointerDown={onFocus}
            {...windowProps}
            initial={{ opacity: 0, scale: 0.90 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.1 }}
            exit={{
                opacity: 0, scale: 0.90, x: -30,
            }}
            className={`pointer-events-auto absolute flex ${windowSize[title]}
            ${isFocused ? "z-10" : "z-0"}
            flex-col overflow-hidden rounded-window border border-border-muted
            bg-window text-text-main shadow-window`}
        >
            <div
                {...dragHandleProps}
                className={`flex shrink-0 select-none touch-none items-center justify-between border-b border-border-muted bg-window-header p-5 
                pb-2 text-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}>
                <h1>{title}</h1>
                <button
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => {
                        onClose?.();
                        playCloseSound();
                    }}
                    className="transition-colors cursor-pointer hover:text-highlight"
                >
                    [ x ]
                </button>
            </div>
            <div className="relative min-h-0 flex-1 p-3">
                {title === "about" && <WindowAbout />}
                {title === "projects" && <WindowProject />}
                {title === "contact" && <WindowContact />}
            </div>
        </motion.div>
    )
}
