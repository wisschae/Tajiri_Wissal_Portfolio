"use client"

import Image from "next/image"

export function LogoFooter() {
    return (
        <div className="fixed bottom-6 left-6 z-50">
            <a
                href="#hero"
                className="block transition-transform hover:scale-110 duration-300"
                aria-label="Retour en haut"
            >
                <Image
                    src="/logoW.png"
                    alt="Logo Wissal Tajiri"
                    width={100}
                    height={100}
                    className="object-contain"
                />
            </a>
        </div>
    )
}
