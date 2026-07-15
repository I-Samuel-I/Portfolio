"use client"

import { useDraggableWindow } from "../../hooks/useDraggableWindow";
import WindowAbout from "../templates/windowAbout";
import WindowContact from "../templates/windowContact";
import WindowProject from "../templates/windowProject";

type DraggableWindowProps = {
    title: string;
    onClose: () => void;

}

export default function DraggableWindow({ title,  onClose }: DraggableWindowProps) {

    const { windowProps, dragHandleProps, isDragging } = useDraggableWindow(true)

    return (
        <div
            {...windowProps}
            className="pointer-events-auto absolute flex h-200 max-h-[calc(100vh-24px)] w-212.5 \
        max-w-[calc(100vw-24px)] flex-col overflow-hidden rounded-md border border-zinc-700 
        bg-[#1D1922] text-zinc-50"
        >
            <div
                {...dragHandleProps}
                className={`flex shrink-0 select-none touch-none items-center justify-between p-5 
                pb-2 text-2xl ${isDragging ? "cursor-grabbing" : "cursor-grab"
                    }`}>
                <h1>{title}</h1>
                <button
                    onPointerDown={(event) => event.stopPropagation()}
                    onClick={onClose}                >
                    [ x ]
                </button>
            </div>
            <div className="relative min-h-0 flex-1 p-3">
                {title === "about" && <WindowAbout />}
                {title === "projects" && <WindowProject />}
                {title === "contact" && <WindowContact />}
            </div>
        </div>
    )
}