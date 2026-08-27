"use client"

type WindowType = "about" | "projects" | "contact";


import { motion } from "motion/react"
import { useDraggableWindow } from "../../hooks/useDraggableWindow";
import WindowAbout from "../templates/windowAbout";
import WindowContact from "../templates/windowContact";
import WindowProject from "../templates/windowProject";
import CloseBtn from "@/src/assets/icons/close.svg"
import { sounds } from "../../data/sounds";

type DraggableWindowProps = {
    title: WindowType;
    onClose: () => void;
    onFocus: () => void;
    isFocused: boolean;
}

const windowSize: Record<WindowType, string> = {
    about:
        "h-[80dvh] w-[50vw] lg:w-[65vw]",

    projects:
        "h-[80dvh] w-[100vw] lg:w-[70vw]",

    contact:
        "h-[70dvh] w-[40vw] lg:w-[50vw] lg:h-[80dvh]",
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
            transition={{ duration: 0.2 }}
            exit={{
                opacity: 0, scale: 0.90, x: -30,
            }}
            className={`draggable-window draggable-window--${title} pointer-events-auto absolute flex ${windowSize[title]}
            ${isFocused ? "z-10" : "z-0"}
            flex-col overflow-hidden rounded-window border border-border-muted
            bg-window text-text-main shadow-window`}>
            <div
                {...dragHandleProps}
                className={`flex select-none items-center justify-between border-b border-border-muted bg-window-header px-4 sm:px-5 py-3
                pb-2 text-[18px] sm:text-[20px] ${isDragging ? "cursor-grabbing" : "cursor-default md:cursor-grab"
                    }`}>
                <h1>{title}</h1>
                <motion.button
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={() => {
                        onClose?.();
                        playCloseSound();
                    }}
                    aria-label="fechar janela"
                    className="grid h-7 w-8 cursor-pointer place-items-center text-text-main transition-all hover:scale-110 hover:text-highlight"
                >
                    <CloseBtn className="w-7" />
                </motion.button>
            </div>
            <div className="relative min-h-0 flex-1 p-3">
                {title === "about" && <WindowAbout />}
                {title === "projects" && <WindowProject />}
                {title === "contact" && <WindowContact />}
            </div>
        </motion.div>
    )
}
