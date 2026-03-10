import { CiLinkedin } from "react-icons/ci";
import { FaGithub, FaXTwitter } from "react-icons/fa6";
import { IoLogoInstagram } from "react-icons/io";
import { MdOutlineEmail } from "react-icons/md";

export default function Contact() {
    return (
        <footer className="w-full flex justify-center py-16 px-6 border-t border-white/10 mt-12 bg-[#161513] scroll-mt-20" id="contato">
            <div className="max-w-4xl w-full flex flex-col items-start gap-6">
                <h2 className="text-2xl font-bold text-white">Contato</h2>

                <p className="text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                    Desenvolvedor Full Stack com foco em arquitetura de sistemas e entrega de soluções ponta a ponta, pautado pela excelência técnica através de Clean Code, SOLID e TDD.
                    Com sólida experiência em um ecossistema diversificado, domino tecnologias como Java (Spring Boot), Node.js (Nest.js), TypeScript, Angular 17+, React e Next.js.
                    Atualmente, venho aprimorando meu repertório com o uso de Inteligência Artificial e Agentes, integrando essas inovações ao desenvolvimento de interfaces de alta performance e fluxos de trabalho inteligentes.
                    Possuo vivência prática em bancos de dados PostgreSQL e MongoDB, além de padronização de ambientes com Docker.
                </p>

                <div className="flex items-center gap-3 text-gray-300 mt-2">
                    <MdOutlineEmail size={24} />
                    <span className="font-medium text-sm md:text-base">juanramalho90@gmail.com</span>
                </div>

                <div className="flex items-center gap-6 mt-4">
                    <a href="https://www.linkedin.com/in/juan-ramalho/" className="text-gray-400 hover:text-white transition-colors">
                        <CiLinkedin size={24} />
                    </a>
                    <a href="https://github.com/JuanRNS" className="text-gray-400 hover:text-white transition-colors">
                        <FaGithub size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <IoLogoInstagram size={24} />
                    </a>
                    <a href="#" className="text-gray-400 hover:text-white transition-colors">
                        <FaXTwitter size={24} />
                    </a>
                </div>
            </div>
        </footer>
    );
}
