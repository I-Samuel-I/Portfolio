type NavButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
}


export default function HomeNavBtn({ children, onClick }: NavButtonProps) {

    return (
        <button className="flex cursor-pointer h-[55px] w-[200px] items-center gap-4 rounded-[4px] border 
        border-[#CDBFAF]/80 bg-black/20 px-5 text-sm font-medium text-zinc-300 
        shadow-[inset_0_0_12px_rgba(255,255,255,0.05),0_0_0_1px_rgba(0,0,0,0.8)] 
        transition hover:border-[#bda6ff]/80 hover:text-zinc-50" onClick={onClick}>
            {children}
        </button>
    )
}