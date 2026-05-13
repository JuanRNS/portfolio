import Reveal from "../ui/reveal/reveal";

const HIGHLIGHTS = [
    {
        title: "Migração de monolito backend",
        text: "Atuação na transição de um serviço em Nest.js para Java com Spring Boot, com foco em padronização e robustez dos novos módulos.",
    },
    {
        title: "Componentes globais",
        text: "Criação de uma solução de tabelas genéricas para reduzir repetição e melhorar telas com alta densidade de dados.",
    },
    {
        title: "Formulários dinâmicos",
        text: "Desenvolvimento de uma engine baseada em Reactive Forms para gerar interfaces complexas a partir de metadados.",
    },
    {
        title: "Sistema de ponto full stack",
        text: "Construção ponta a ponta de módulos para jornada de trabalho, com Angular 17+, Spring Boot, PostgreSQL e MongoDB.",
    },
];

export default function Experience() {
    return (
        <section className="w-full px-5 py-20 md:px-8 scroll-mt-24" id="sobre">
            <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.72fr_1.28fr]">
                <Reveal direction="left">
                    <span className="section-kicker">Experiência profissional</span>
                    <h2 className="mt-4 text-3xl font-black text-white md:text-5xl">
                        Onde técnica encontra produto.
                    </h2>
                    <p className="mt-5 max-w-xl text-base leading-8 text-[var(--secondary-text)]">
                        Minha experiência mais recente concentra backend, front-end, arquitetura de componentes
                        e automação de fluxos internos. Gosto de trabalhar perto do problema real e transformar
                        regras complexas em ferramentas simples de operar.
                    </p>
                </Reveal>

                <Reveal delay={0.1} direction="right" className="glass-panel rounded-[2rem] p-5 md:p-8">
                    <div className="flex flex-col gap-6 border-l border-[var(--line-color)] pl-5 md:pl-8">
                        <div className="relative">
                            <span className="absolute -left-[29px] top-2 h-4 w-4 rounded-full border-4 border-[#071313] bg-[var(--coral)] md:-left-[41px]" />
                            <div className="flex flex-col gap-3 md:flex-row md:items-start md:justify-between">
                                <div>
                                    <p className="font-mono text-xs font-bold uppercase text-[var(--mint)]">Chaves Solutions</p>
                                    <h3 className="mt-2 text-2xl font-black text-white">Estagiário Full Stack</h3>
                                </div>
                                <span className="rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 font-mono text-xs text-[var(--secondary-text)]">
                                    03/2025 - 02/2026
                                </span>
                            </div>
                        </div>

                        <div className="grid gap-4 md:grid-cols-2">
                            {HIGHLIGHTS.map((item, index) => (
                                <Reveal key={item.title} delay={0.08 * index} className="rounded-2xl border border-white/10 bg-white/[0.04] p-5">
                                    <h4 className="text-base font-bold text-white">{item.title}</h4>
                                    <p className="mt-3 text-sm leading-7 text-[var(--secondary-color)]">{item.text}</p>
                                </Reveal>
                            ))}
                        </div>

                        <div className="rounded-2xl border border-[var(--mint)]/25 bg-[rgba(99,246,197,0.08)] p-5">
                            <p className="font-mono text-xs font-bold uppercase text-[var(--mint)]">Stack principal</p>
                            <p className="mt-3 text-sm leading-7 text-[var(--secondary-text)]">
                                Java, Spring Boot, Angular 17+, Nest.js, TypeScript, Docker, PostgreSQL e MongoDB.
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
