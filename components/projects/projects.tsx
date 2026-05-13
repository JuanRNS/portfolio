import ProjectGallery, { type Project } from "./project-gallery";
import Reveal from "../ui/reveal/reveal";

const PROJECTS: Project[] = [
    {
        title: "Evento Fácil",
        status: "MVP em produção",
        description:
            "Plataforma para automatizar o fluxo operacional de eventos e recepções, integrando controle de agenda e processos administrativos.",
        link: "https://event-manager-alpha-lake.vercel.app/login",
        accent: "var(--coral)",
        stack: ["Next.js", "TypeScript", "Produto"],
        images: [
            {
                src: "/event-manager.png",
                alt: "Tela do projeto Evento Fácil",
                label: "Preview principal",
            },
        ],
    },
    {
        title: "App Fut",
        status: "MVP em produção",
        description:
            "Solução para gerenciamento de partidas esportivas, automatizando controle de presença, sorteio equilibrado de equipes e estatísticas.",
        link: "https://app-fut-pi.vercel.app/",
        accent: "var(--mint)",
        stack: ["Next.js", "Ranking", "Gestão esportiva"],
        images: [
            {
                src: "/app-fut-login.png",
                alt: "Tela de login do App Fut",
                label: "Login",
            },
            {
                src: "/app-fut-register.png",
                alt: "Tela de cadastro do App Fut",
                label: "Cadastro",
            },
            {
                src: "/app-fut-criar-partida.png",
                alt: "Tela de criação de partida do App Fut",
                label: "Criar partida",
            },
            {
                src: "/app-fut-ranking.png",
                alt: "Tela de ranking do App Fut",
                label: "Ranking",
            },
        ],
    },
];

export default function Projects() {
    return (
        <section id="projetos" className="w-full px-5 py-20 md:px-8 scroll-mt-24">
            <div className="mx-auto flex max-w-7xl flex-col gap-10">
                <Reveal className="max-w-3xl">
                    <span className="section-kicker">Projetos</span>
                    <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                        Dois produtos em construção, com espaço para mostrar o processo.
                    </h2>
                    <p className="mt-5 text-base leading-8 text-[var(--secondary-text)]">
                        Clique em um projeto para abrir a galeria, navegar pelas telas e acessar a versão publicada.
                    </p>
                </Reveal>

                <ProjectGallery projects={PROJECTS} />
            </div>
        </section>
    );
}
