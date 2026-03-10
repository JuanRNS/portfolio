import Card from "../ui/card/card";

export default function Projects() {
    return (
        <section id="projetos" className="flex flex-col items-center justify-center py-12 px-6 text-center w-full">
            <h1 className="text-3xl md:text-5xl font-bold text-gradient mb-4">Projetos</h1>
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 w-full max-w-7xl mx-auto">
                <Card
                    imagem="/event-manager.png"
                    titulo="Evento Fácil"
                    subtitulo="MVP em Produção"
                    descricao="Plataforma para automatizar o fluxo operacional de eventos e recepções, integrando controle de agenda e processos administrativos."
                    link="https://event-manager-alpha-lake.vercel.app/login"
                />
                <Card
                    imagem="/app-fut-login.png"
                    titulo="App Fut"
                    subtitulo="MVP em produção"
                    descricao="Solução para gerenciamento de partidas esportivas, automatizando controle de presença, sorteio equilibrado de equipes e estatísticas."
                    link="https://app-fut-pi.vercel.app/"
                />
            </div>
        </section>
    );
}