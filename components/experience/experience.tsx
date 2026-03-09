export default function Experience() {
    return (
        <section className="w-full flex justify-center py-12 px-6" id="sobre">
            <div className="max-w-4xl w-full flex flex-col items-center">
                <h2 className="text-3xl font-bold text-[#5BADFF] mb-16 tracking-widest uppercase">
                    EXPERIÊNCIA PROFISSIONAL
                </h2>

                <div className="flex flex-col w-full gap-12">
                    <div className="flex flex-col w-full">
                        <div className="flex flex-col md:flex-row md:items-center justify-between mb-4 gap-2">
                            <div className="flex items-center gap-4">
                                <div className="w-8 h-8 rounded-full bg-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                                    CS
                                </div>
                                <h3 className="text-xl font-bold text-white">
                                    Estagiário - Chaves Solutions
                                </h3>
                            </div>
                            <span className="text-sm md:text-base text-gray-400 font-medium md:text-right">
                                03/2025 – 02/2026
                            </span>
                        </div>

                        <div className="text-gray-400 text-sm md:text-base leading-relaxed space-y-4 md:pl-12">
                            <p>
                                <span className="text-gray-200 font-bold">Migração de Monolito Backend:</span> Conduziu a transição de um serviço originalmente em Nest.js para Java com Spring Boot, focando na padronização e robustez dos novos módulos.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Arquitetura de Componentes Globais:</span> Projetou e implementou do zero uma solução de tabelas genéricas para toda a aplicação, eliminando redundância em telas de alta densidade de dados.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Engine de Formulários Dinâmicos:</span> Desenvolveu um motor baseado em Reactive Forms que automatiza a criação de interfaces complexas a partir de metadados.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Desenvolvimento Full Stack (Sistema de Ponto):</span> Responsável pela construção ponta a ponta de módulos para gestão de jornada de trabalho, incluindo modelagem em PostgreSQL/MongoDB e front-end em Angular 17+.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Integração e Fluxo Assíncrono:</span> Implementou o consumo de APIs REST/HTTP utilizando RxJS para gerenciamento reativo de fluxos.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Contêineres:</span> Utilizou Docker para padronizar o ambiente de desenvolvimento e execução de testes.
                            </p>
                            <p>
                                <span className="text-gray-200 font-bold">Stack Principal:</span> Java (Spring Boot), Angular 17+, Nest.js, TypeScript, Docker, PostgreSQL e MongoDB.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
