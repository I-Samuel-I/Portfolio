import { SOCIAL } from "@/src/constants/externalLink"

export default function Links() {
    return (
        <nav aria-label="Links sociais">
            <ul className="flex items-center gap-3">
                {SOCIAL.map(({ label, href, Icon }) => (
                    <a key={label} href={href} aria-label={label} target="_blank" className="flex h-9 w-9 items-center justify-center text-text-main transition-all duration-200
                hover:scale-110 hover:text-highlight">
                        <Icon className="h-8.5 w-8.5" aria-hidden="true" />
                    </a>
                ))}
            </ul>
        </nav>
    )
}
    
