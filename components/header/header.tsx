"use client";

import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const NAV_ITEMS = ["Home", "Sobre", "Projetos", "Contato"] as const;

export default function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => setIsMenuOpen((prev) => !prev);

    return (
        <header className="fixed top-0 left-0 w-full z-100 bg-[var(--primary-color)] border-b border-white/10 backdrop-blur-xl">
            <div className="flex items-center justify-between max-w-7xl mx-auto px-5 md:px-8 py-4">
                <div className="flex items-center cursor-default select-none">
                    <h1 className="flex items-center font-mono text-lg md:text-xl font-bold overflow-hidden whitespace-nowrap text-white">
                        <FaChevronLeft className="text-[var(--mint)]" />

                        <span className="relative inline-block overflow-hidden whitespace-nowrap border-r-2 border-white-500 animate-typing-header">
                            <span className="tracking-wide px-1">
                                Juan-Ramalho
                            </span>
                        </span>

                        <span className="flex items-center !leading-none text-[var(--coral)]">
                            /
                            <FaChevronRight />
                        </span>
                    </h1>
                </div>

                <button
                    className="flex min-h-11 min-w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-white/10 bg-white/5 cursor-pointer p-1 z-110 md:hidden"
                    onClick={toggleMenu}
                    aria-label="Abrir menu"
                    aria-expanded={isMenuOpen}
                >
                    <span
                        className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? "translate-y-[7px] rotate-45" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? "opacity-0" : ""
                            }`}
                    />
                    <span
                        className={`block w-6 h-0.5 bg-white rounded-sm transition-all duration-300 ease-in-out ${isMenuOpen ? "-translate-y-[7px] -rotate-45" : ""
                            }`}
                    />
                </button>

                <nav
                    className={`fixed top-0 w-[78%] max-w-[320px] h-screen bg-[var(--surface-color)] flex items-center justify-center transition-all duration-350 ease-in-out shadow-[-4px_0_20px_rgba(0,0,0,0.4)] md:static md:w-auto md:max-w-none md:h-auto md:bg-transparent md:shadow-none ${isMenuOpen ? "right-0" : "-right-full"
                        }`}
                >
                    <ul className="flex flex-col gap-8 list-none p-0 m-0 text-center md:flex-row md:gap-10">
                        {NAV_ITEMS.map((item) => (
                            <li key={item}>
                                <a
                                    href={`#${item.toLowerCase()}`}
                                    onClick={() => setIsMenuOpen(false)}
                                    className="text-[var(--secondary-color)] no-underline text-base font-medium tracking-wide transition-colors duration-250 ease-in-out relative hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-[var(--mint)] after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-[var(--primary-gradient)] after:transition-all after:duration-300 after:ease-in-out hover:after:w-full"
                                >
                                    {item}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            </div>
        </header>
    );
}
