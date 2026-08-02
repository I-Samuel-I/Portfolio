
import { useState, type ButtonHTMLAttributes } from "react"
import { sounds } from "../../data/sounds";

type CloseButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

export default function OpenButton({ children, onClick, className = "", type = "button", ...props }: CloseButtonProps) {

    const [isHolding, setIsHolding] = useState(false)

    function handleClick(event: React.MouseEvent<HTMLButtonElement>) {
        const audio = new Audio(sounds.openWindow)
        audio.volume = 0.35
        audio.play();

        onClick?.(event);
    }
    return (
        <button type={type} onClick={handleClick} {...props}
            onMouseDown={() => setIsHolding(true)}
            onMouseUp={() => setIsHolding(false)}
            onPointerLeave={() => setIsHolding(false)}
            className={`transition-all duration-200 cursor-pointer ${isHolding ? "scale-80" : "scale-100"
                } ${className}`}>
            {children}
        </button>
    )
}