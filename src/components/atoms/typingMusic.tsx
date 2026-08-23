
import { useState, type ButtonHTMLAttributes } from "react"
import { sounds } from "../../data/sounds";
type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function OpenButton({ children, onClick, className = "", type = "button", ...props }: CloseButtonProps) {

    
    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.35
        audio.play();

        onClick?.(event);
    }
    return (
       <>
       </>
    )
}