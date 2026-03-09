import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";
import Link from "next/link";

interface CardProps {
    imagem: string;
    titulo: string;
    subtitulo?: string;
    descricao?: string;
    link: string;
}

export default function Card({ imagem, titulo, subtitulo, descricao, link }: CardProps) {
    return (
        <div className="group relative flex flex-col bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-purple-500/50 transition-all duration-300 cursor-pointer w-[20vw]">
            <Link href={link} target="_blank">
                <div className="relative w-full h-56 lg:h-64 overflow-hidden">
                    <Image
                        src={imagem}
                        alt={titulo}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"

                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-80" />
                </div>
            </Link>

            <div className="flex flex-col items-center text-center flex-1 p-6 relative z-10 -mt-6">
                <div className="absolute right-6 top-4 p-2 bg-zinc-800/50 rounded-full group-hover:bg-purple-500 group-hover:text-white text-zinc-400 transition-colors duration-300">
                    <FiArrowUpRight size={20} />
                </div>

                {subtitulo && (
                    <span className="text-xs font-bold tracking-widest text-zinc-400 uppercase mb-1 mt-2">
                        {subtitulo}
                    </span>
                )}
                <h3 className="text-2xl font-bold text-white mb-2">{titulo}</h3>

                {descricao && (
                    <p className="text-sm text-zinc-400 mt-2">
                        {descricao}
                    </p>
                )}
            </div>
        </div>
    );
}