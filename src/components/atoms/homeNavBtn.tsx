import { sounds } from "../../data/sounds";

type NavButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}

export default function HomeNavBtn({ children, onClick }: NavButtonProps) {
    function playOpenSound() {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.45
        audio.play();
    }

    return (
        <button
            onClick={() => {
                playOpenSound();
                onClick?.();
            }}
            className="flex cursor-pointer h-[55px] w-[200px] items-center gap-4 rounded-[4px] border 
        border-border-muted bg-window-header/70 px-5 text-sm font-medium text-text-muted 
        shadow-nav-button transition hover:border-border-hover hover:text-text-main" >
            {children}
        </button>
    )
}
