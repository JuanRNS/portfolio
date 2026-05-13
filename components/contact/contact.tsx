import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";
import Reveal from "../ui/reveal/reveal";

const SOCIAL_LINKS = [
    { href: "https://www.linkedin.com/in/juan-ramalho/", label: "Linkedin", icon: <CiLinkedin size={24} /> },
    { href: "https://github.com/JuanRNS", label: "GitHub", icon: <FaGithub size={22} /> },
    { href: "#", label: "Instagram", icon: <IoLogoInstagram size={24} /> },
    { href: "#", label: "X", icon: <FaXTwitter size={21} /> },
];

export default function Contact() {
    return (
        <footer className="w-full px-5 py-20 md:px-8 scroll-mt-24" id="contato">
            <Reveal className="glass-panel mx-auto grid max-w-7xl gap-8 rounded-[2rem] p-6 md:grid-cols-[1fr_0.8fr] md:p-10">
                <div>
                    <span className="section-kicker">Contato</span>
                    <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                        Vamos conversar sobre o próximo projeto?
                    </h2>
                    <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--secondary-text)]">
                        Desenvolvedor Full Stack com foco em arquitetura de sistemas, interfaces de alta performance
                        e entrega ponta a ponta. Tenho experiência com Java, Spring Boot, Node.js, TypeScript,
                        Angular, React, Next.js, PostgreSQL, MongoDB e Docker.
                    </p>
                </div>

                <div className="flex flex-col justify-between gap-8">
                    <a
                        href="mailto:juanramalho90@gmail.com"
                        className="group flex min-h-16 items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.04] p-4 transition duration-300 hover:-translate-y-1 hover:border-[var(--mint)]"
                    >
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-[var(--mint)] text-[#071313]">
                            <MdOutlineEmail size={24} />
                        </span>
                        <span>
                            <span className="block text-xs font-bold uppercase text-[var(--secondary-color)]">Email</span>
                            <span className="break-all text-sm font-bold text-white group-hover:text-[var(--mint)] md:text-base">
                                juanramalho90@gmail.com
                            </span>
                        </span>
                    </a>

                    <div className="flex items-center gap-3">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.label}
                                href={link.href}
                                aria-label={link.label}
                                className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-[var(--secondary-text)] transition duration-300 hover:-translate-y-1 hover:border-[var(--coral)] hover:text-[var(--coral)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
                                target={link.href === "#" ? undefined : "_blank"}
                                rel={link.href === "#" ? undefined : "noreferrer"}
                            >
                                {link.icon}
                            </a>
                        ))}
                    </div>
                </div>
            </Reveal>
        </footer>
    );
}
