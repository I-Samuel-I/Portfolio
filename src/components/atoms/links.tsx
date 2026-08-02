"use client"

import { SOCIAL } from "@/src/constants/externalLink"
import OpenButton from "./openBtn"

export default function Links() {

    return (
        <nav aria-label="Links sociais">
            <div className="flex items-center gap-3" >
                {SOCIAL.map(({ label, href, Icon }) => (
                    <OpenButton key={label} className="flex h-9 w-9 items-center justify-center hover:text-highlight">
                        <a href={href} aria-label={label} target="_blank">
                            <Icon className="h-8.5 w-8.5" aria-hidden="true" />
                        </a>
                    </OpenButton>
                ))}
            </div>
        </nav>
    )
}

