import Image from "next/image";
import { BsTypescript } from "react-icons/bs";
import { FaAngular, FaDocker, FaJava, FaNode, FaReact } from "react-icons/fa";
import { PiFileSqlDuotone } from "react-icons/pi";
import { RiNextjsLine, RiTailwindCssFill } from "react-icons/ri";
import { SiSpring } from "react-icons/si";
import Reveal from "../ui/reveal/reveal";

const TECHS = [
    { title: "Java", icon: <FaJava />, color: "var(--java-text)" },
    { title: "Spring", icon: <SiSpring />, color: "var(--spring-text)" },
    { title: "React", icon: <FaReact />, color: "var(--react-text)" },
    { title: "Node", icon: <FaNode />, color: "var(--node-text)" },
    { title: "Next", icon: <RiNextjsLine />, color: "var(--next-text)" },
    { title: "Angular", icon: <FaAngular />, color: "var(--angular-text)" },
    { title: "Docker", icon: <FaDocker />, color: "var(--docker-text)" },
    { title: "Tailwind", icon: <RiTailwindCssFill />, color: "var(--tailwind-text)" },
    { title: "Typescript", icon: <BsTypescript />, color: "var(--typescript-text)" },
    { title: "SQL", icon: <PiFileSqlDuotone />, color: "var(--sql-text)" },
];

export default function Description() {
    return (
        <section id="home" className="min-h-dvh pt-28 pb-16 px-5 md:px-8 scroll-mt-20">
            <div className="mx-auto grid w-full max-w-7xl items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
                <Reveal direction="left" className="flex flex-col items-start">
                    <span className="section-kicker mb-4">Full Stack Developer</span>

                    <h1 className="max-w-4xl text-4xl font-black leading-tight text-white md:text-6xl lg:text-7xl">
                        Construo sistemas web com arquitetura sólida,
                        <span className="text-gradient"> interfaces vivas </span>
                        e foco em entrega.
                    </h1>

                    <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--secondary-text)] md:text-lg">
                        Sou Juan Ramalho, desenvolvedor Full Stack em evolução constante. Trabalho com Java,
                        Spring Boot, Angular, React, Next.js e Node.js, conectando boas práticas de backend,
                        front-end e produto para transformar ideias em aplicações utilizáveis.
                    </p>

                    <div className="mt-8 flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
                        <a
                            href="https://www.linkedin.com/in/juan-ramalho/"
                            className="inline-flex min-h-11 items-center justify-center rounded-full bg-[var(--mint)] px-6 py-3 text-sm font-bold text-[#071313] transition duration-300 hover:-translate-y-0.5 hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Linkedin
                        </a>
                        <a
                            href="https://drive.google.com/file/d/1ps3jOolu7qKC7QmdzcaytxcOFcY7of3r/view?usp=sharing"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--coral)] hover:text-[var(--coral)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            Download CV
                        </a>
                        <a
                            href="https://github.com/JuanRNS"
                            className="inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-bold text-white transition duration-300 hover:-translate-y-0.5 hover:border-[var(--cyan)] hover:text-[var(--cyan)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
                            target="_blank"
                            rel="noreferrer"
                        >
                            GitHub
                        </a>
                    </div>
                </Reveal>

                <Reveal delay={0.12} direction="right" className="glass-panel relative overflow-hidden rounded-[2rem] p-5 md:p-7">
                    <div className="grid gap-5 sm:grid-cols-[0.82fr_1fr] lg:grid-cols-1 xl:grid-cols-[0.82fr_1fr]">
                        <div className="relative aspect-[4/5] min-h-[320px] overflow-hidden rounded-[1.5rem] border border-white/10">
                            <Image
                                src="/perfil.jpeg"
                                alt="Foto de perfil de Juan Ramalho"
                                fill
                                sizes="(min-width: 1280px) 360px, (min-width: 640px) 40vw, 90vw"
                                className="object-cover"
                                priority
                            />
                            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071313] via-[#071313]/64 to-transparent p-5">
                                <p className="font-mono text-xs font-bold text-[var(--mint)]">Juan Ramalho</p>
                                <p className="mt-1 text-sm text-white/80">ADS + desenvolvimento full stack</p>
                            </div>
                        </div>

                        <div className="flex flex-col justify-between gap-6">
                            <div>
                                <span className="section-kicker">Sobre mim</span>
                                <h2 className="mt-3 text-2xl font-black text-white">
                                    Gosto de pegar problemas confusos e dar forma a sistemas claros.
                                </h2>
                                <p className="mt-4 text-sm leading-7 text-[var(--secondary-text)]">
                                    Tenho experiência prática com migração de serviços, componentes globais,
                                    formulários dinâmicos, APIs REST e bancos relacionais e NoSQL. Também venho
                                    estudando IA e agentes para acelerar fluxos de desenvolvimento.
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-3">
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                    <strong className="block text-2xl text-[var(--amber)]">2025</strong>
                                    <span className="mt-1 block text-xs text-[var(--secondary-color)]">experiência profissional</span>
                                </div>
                                <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                                    <strong className="block text-2xl text-[var(--mint)]">10+</strong>
                                    <span className="mt-1 block text-xs text-[var(--secondary-color)]">tecnologias no stack</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </Reveal>
            </div>

            <Reveal delay={0.2} className="mx-auto mt-12 flex w-full max-w-7xl flex-col gap-4">
                <span className="section-kicker">Experiência com tecnologias</span>
                <div className="grid grid-cols-5 gap-3 sm:grid-cols-10">
                    {TECHS.map((tech) => (
                        <div
                            key={tech.title}
                            title={tech.title}
                            className="flex aspect-square min-h-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.045] text-2xl shadow-[0_16px_40px_rgba(0,0,0,0.16)] transition duration-300 hover:-translate-y-1 hover:border-white/25"
                            style={{ color: tech.color }}
                        >
                            {tech.icon}
                        </div>
                    ))}
                </div>
            </Reveal>
        </section>
    );
}
