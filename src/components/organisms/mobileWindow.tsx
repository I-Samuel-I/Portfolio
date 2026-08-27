
import { sounds } from "../../data/sounds";
import { motion } from "motion/react"
import CloseBtn from "@/src/assets/icons/arrow-down-double.svg"
import MobileAbout from "../templates/mobileAbout";
import MobileContact from "../templates/mobileContact";
import MobileProject from "../templates/mobileProject";
type WindowType = "about" | "projects" | "contact";

type WindowProps = {
    title: WindowType;
    onClose: () => void;
}


export default function MobileWindow({ title, onClose }: WindowProps) {

    function playCloseSound() {
        const audio = new Audio(sounds.closeWindow)
        audio.volume = 0.35
        audio.play();
    }

    return (
        <motion.div
            role="dialog"
            aria-modal="true"
            aria-labelledby={`mobile-window-${title}`}
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 30, stiffness: 300 }}
            className="pointer-events-auto absolute inset-x-0 bottom-0 z-10 flex h-[90dvh] flex-col overflow-hidden rounded-t-2xl border-x border-t border-border-muted bg-window text-text-main shadow-window"
        >
                <div className="flex shrink-0 select-none items-center justify-between border-b border-border-muted bg-window-header px-4 py-3 text-lg">
                    <div className="flex items-center gap-3">
                      
                        <h1 id={`mobile-window-${title}`} className="font-bold capitalize">{title}</h1>
                    </div>
                    <motion.button
                        onPointerDown={(event) => event.stopPropagation()}
                        onClick={() => {
                            onClose?.();
                            playCloseSound();
                        }}
                        aria-label="fechar janela"
                        className="grid h-10 w-10 cursor-pointer place-items-center rounded-full text-text-main transition-colors hover:bg-window-panel hover:text-highlight"
                    >
                        <CloseBtn className="w-6" />
                    </motion.button>
                </div>
                <div className="relative min-h-0 flex-1">
                    {title === "about" && <MobileAbout/>}
                    {title === "projects" && <MobileProject />}
                    {title === "contact" && <MobileContact />}
                </div>
        </motion.div>
    )
}
