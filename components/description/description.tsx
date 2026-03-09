import Image from "next/image";
import { BsTypescript } from "react-icons/bs";
import { FaAngular, FaDocker, FaJava, FaNode, FaReact } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";

export default function Description() {
    return (
        <section id="home" className="flex flex-col items-center justify-center pt-28 pb-16 px-6 text-center">
            <div className="relative w-[120px] h-[120px] mb-12">
                <div className="absolute inset-[-4px] rounded-full bg-[var(--primary-gradient)]" />
                <Image
                    src="/perfil.jpeg"
                    alt="Foto de perfil de Juan Ramalho"
                    width={120}
                    height={120}
                    className="rounded-full object-cover relative z-10"
                    priority
                />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-title-full-stack leading-tight mb-4 animate-fade-name">
                Desenvolvedor Full Stack
            </h1>


            <p className="text-[var(--secondary-color)] text-sm md:text-base max-w-[480px] leading-relaxed mb-8">
                Sou um desenvolvedor Full Stack com foco em arquiteturas escaláveis
                e transição de ecossistemas tecnológicos. Atualmente, curso Análise
                e Desenvolvimento de Sistemas
                e aplico boas práticas como Clean Code
                e TDD para entregar soluções robustas de ponta a ponta.
            </p>

            <div className="flex gap-4 mb-12">
                <a
                    href="https://www.linkedin.com/in/juan-ramalho/"
                    className="px-6 py-3 border border-white text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                    target="_blank"
                >
                    Linkedin
                </a>
                <a
                    href="https://drive.google.com/file/d/1ps3jOolu7qKC7QmdzcaytxcOFcY7of3r/view?usp=sharing"
                    download
                    className="px-6 py-3 bg-white text-black rounded-full text-sm font-semibold transition-all duration-300 hover:bg-gray-200"
                    target="_blank"
                >
                    Download CV
                </a>
                <a
                    href="https://github.com/JuanRNS"
                    className="px-6 py-3 border border-white text-white rounded-full text-sm font-semibold transition-all duration-300 hover:bg-white hover:text-black"
                    target="_blank"
                >
                    GitHub
                </a>
            </div>

            <div className="flex flex-col items-center gap-4">
                <span className="text-[var(--secondary-color)] text-xs font-semibold tracking-[0.2em] uppercase">
                    Experiência com tecnologias
                </span>
                <div className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-6 items-center">
                    <div
                        title="Java"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--java-text)] text-lg font-bold">
                        <FaJava />
                    </div>
                    <div
                        title="Spring"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--spring-text)] text-lg font-bold">
                        <SiSpring />
                    </div>
                    <div
                        title="React"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--react-text)] text-lg font-bold">
                        <FaReact />
                    </div>
                    <div
                        title="Node"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--node-text)] text-lg font-bold">
                        <FaNode />
                    </div>
                    <div
                        title="Next"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--next-text)] text-lg font-bold">
                        <RiNextjsLine />
                    </div>
                    <div
                        title="Angular"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--angular-text)] text-lg font-bold">
                        <FaAngular />
                    </div>
                    <div
                        title="Docker"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--docker-text)] text-lg font-bold">
                        <FaDocker />
                    </div>
                    <div
                        title="Tailwind"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--tailwind-text)] text-lg font-bold">
                        <RiTailwindCssFill />
                    </div>
                    <div
                        title="Typescript"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--typescript-text)] text-lg font-bold">
                        <BsTypescript />
                    </div>
                    <div
                        title="SQL"
                        className="w-10 h-10 flex items-center justify-center rounded-lg bg-[var(--card-color)] text-[var(--sql-text)] text-lg font-bold">
                        <PiFileSqlDuotone />
                    </div>
                </div>
            </div>
        </section>
    );
}