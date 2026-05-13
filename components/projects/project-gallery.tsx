"use client";

import Image from "next/image";
import { memo, useCallback, useEffect, useState } from "react";
import { FiArrowUpRight, FiChevronLeft, FiChevronRight, FiExternalLink, FiX } from "react-icons/fi";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import Reveal from "../ui/reveal/reveal";

type ProjectImage = {
    src: string;
    alt: string;
    label: string;
};

export type Project = {
    title: string;
    status: string;
    description: string;
    link: string;
    accent: string;
    stack: string[];
    images: ProjectImage[];
};

type ProjectGalleryProps = {
    projects: Project[];
};

type ProjectCardProps = {
    project: Project;
    index: number;
    onOpen: (projectIndex: number) => void;
};

const ProjectCard = memo(function ProjectCard({ project, index, onOpen }: ProjectCardProps) {
    const handleOpen = useCallback(() => {
        onOpen(index);
    }, [index, onOpen]);

    return (
        <Reveal delay={0.08 * index}>
            <button
                type="button"
                onClick={handleOpen}
                className="group relative grid w-full overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.045] text-left transition duration-300 hover:-translate-y-1 hover:border-white/25 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)] md:grid-cols-[0.95fr_1.05fr]"
            >
                <span
                    className="absolute inset-x-0 top-0 h-1"
                    style={{ background: project.accent }}
                />

                <span className="relative block min-h-[260px] overflow-hidden md:min-h-full">
                    <Image
                        src={project.images[0].src}
                        alt={project.images[0].alt}
                        fill
                        sizes="(min-width: 1024px) 34vw, 92vw"
                        className="object-cover transition duration-500 group-hover:scale-105"
                        loading="lazy"
                    />
                    <span className="absolute inset-0 bg-gradient-to-t from-[#071313] via-transparent to-transparent" />
                </span>

                <span className="flex min-h-[280px] flex-col justify-between gap-8 p-6 md:p-8">
                    <span>
                        <span className="font-mono text-xs font-bold uppercase" style={{ color: project.accent }}>
                            {project.status}
                        </span>
                        <span className="mt-3 block text-3xl font-black text-white">{project.title}</span>
                        <span className="mt-4 block text-sm leading-7 text-[var(--secondary-text)]">
                            {project.description}
                        </span>
                    </span>

                    <span className="flex flex-col gap-5">
                        <span className="flex flex-wrap gap-2">
                            {project.stack.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-white/[0.05] px-3 py-1.5 text-xs font-semibold text-[var(--secondary-text)]"
                                >
                                    {item}
                                </span>
                            ))}
                        </span>
                        <span className="inline-flex items-center gap-2 text-sm font-bold text-white">
                            Ver imagens
                            <FiArrowUpRight className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </span>
                    </span>
                </span>
            </button>
        </Reveal>
    );
});

export default function ProjectGallery({ projects }: ProjectGalleryProps) {
    const [selectedProjectIndex, setSelectedProjectIndex] = useState<number | null>(null);
    const [selectedImageIndex, setSelectedImageIndex] = useState(0);
    const [thumbnailProjectIndex, setThumbnailProjectIndex] = useState<number | null>(null);
    const shouldReduceMotion = useReducedMotion();
    const selectedProject = selectedProjectIndex === null ? null : projects[selectedProjectIndex];
    const selectedImage = selectedProject?.images[selectedImageIndex];
    const selectedImageCount = selectedProject?.images.length ?? 0;
    const areThumbnailsReady = thumbnailProjectIndex === selectedProjectIndex;

    const closeGallery = useCallback(() => {
        setSelectedProjectIndex(null);
        setThumbnailProjectIndex(null);
    }, []);

    useEffect(() => {
        if (!selectedProject) {
            return;
        }

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                closeGallery();
            }
        };

        const originalOverflow = document.body.style.overflow;
        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = originalOverflow;
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [closeGallery, selectedProject]);

    useEffect(() => {
        if (selectedProjectIndex === null) {
            return;
        }

        let secondFrame = 0;
        const firstFrame = window.requestAnimationFrame(() => {
            secondFrame = window.requestAnimationFrame(() => {
                setThumbnailProjectIndex(selectedProjectIndex);
            });
        });

        return () => {
            window.cancelAnimationFrame(firstFrame);
            if (secondFrame) {
                window.cancelAnimationFrame(secondFrame);
            }
        };
    }, [selectedProjectIndex]);

    const openProject = useCallback((projectIndex: number) => {
        setSelectedImageIndex(0);
        setThumbnailProjectIndex(null);
        setSelectedProjectIndex(projectIndex);
    }, []);

    const showPreviousImage = useCallback(() => {
        if (selectedImageCount < 2) {
            return;
        }

        setSelectedImageIndex((current) => (
            current === 0 ? selectedImageCount - 1 : current - 1
        ));
    }, [selectedImageCount]);

    const showNextImage = useCallback(() => {
        if (selectedImageCount < 2) {
            return;
        }

        setSelectedImageIndex((current) => (
            current === selectedImageCount - 1 ? 0 : current + 1
        ));
    }, [selectedImageCount]);

    return (
        <>
            <div className="grid gap-5 lg:grid-cols-2">
                {projects.map((project, index) => (
                    <ProjectCard
                        key={project.title}
                        project={project}
                        index={index}
                        onOpen={openProject}
                    />
                ))}
            </div>

            <AnimatePresence>
                {selectedProject && selectedImage && (
                    <motion.div
                        className="fixed inset-0 z-[200] flex items-center justify-center bg-[rgba(2,7,7,0.92)] p-4 will-change-opacity"
                        initial={shouldReduceMotion ? false : { opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.16 }}
                        role="dialog"
                        aria-modal="true"
                        aria-label={`Galeria do projeto ${selectedProject.title}`}
                    >
                        <motion.div
                            className="grid max-h-[92dvh] w-full max-w-6xl overflow-hidden rounded-[2rem] border border-[var(--line-color)] bg-[linear-gradient(145deg,rgba(14,34,34,0.96),rgba(13,24,31,0.92))] shadow-[0_24px_80px_rgba(0,0,0,0.34)] will-change-transform lg:grid-cols-[1.25fr_0.75fr]"
                            initial={shouldReduceMotion ? false : { opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: 12 }}
                            transition={{ duration: 0.18, ease: "easeOut" }}
                        >
                            <div className="relative min-h-[320px] bg-black/30 md:min-h-[560px]">
                                <Image
                                    src={selectedImage.src}
                                    alt={selectedImage.alt}
                                    fill
                                    sizes="(min-width: 1024px) 62vw, 92vw"
                                    className="object-contain"
                                    loading="eager"
                                />

                                {selectedProject.images.length > 1 && (
                                    <>
                                        <button
                                            type="button"
                                            onClick={showPreviousImage}
                                            className="absolute left-4 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071313]/80 text-white transition hover:border-[var(--mint)] hover:text-[var(--mint)]"
                                            aria-label="Imagem anterior"
                                        >
                                            <FiChevronLeft size={22} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={showNextImage}
                                            className="absolute right-4 top-1/2 flex min-h-11 min-w-11 -translate-y-1/2 items-center justify-center rounded-full border border-white/10 bg-[#071313]/80 text-white transition hover:border-[var(--mint)] hover:text-[var(--mint)]"
                                            aria-label="Próxima imagem"
                                        >
                                            <FiChevronRight size={22} />
                                        </button>
                                    </>
                                )}
                            </div>

                            <div className="flex min-h-0 flex-col gap-6 overflow-y-auto p-6 md:p-8">
                                <div className="flex items-start justify-between gap-4">
                                    <div>
                                        <span className="font-mono text-xs font-bold uppercase" style={{ color: selectedProject.accent }}>
                                            {selectedProject.status}
                                        </span>
                                        <h3 className="mt-3 text-3xl font-black text-white">{selectedProject.title}</h3>
                                    </div>
                                    <button
                                        type="button"
                                        onClick={closeGallery}
                                        className="flex min-h-11 min-w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white transition hover:border-[var(--coral)] hover:text-[var(--coral)]"
                                        aria-label="Fechar galeria"
                                    >
                                        <FiX size={22} />
                                    </button>
                                </div>

                                <p className="text-sm leading-7 text-[var(--secondary-text)]">{selectedProject.description}</p>

                                {areThumbnailsReady ? (
                                    <div className="grid grid-cols-2 gap-3">
                                        {selectedProject.images.map((image, index) => (
                                            <button
                                                key={image.src}
                                                type="button"
                                                onClick={() => setSelectedImageIndex(index)}
                                                className={`relative aspect-video overflow-hidden rounded-2xl border transition ${index === selectedImageIndex
                                                    ? "border-[var(--mint)]"
                                                    : "border-white/10 hover:border-white/25"
                                                    }`}
                                            >
                                                <Image
                                                    src={image.src}
                                                    alt={image.alt}
                                                    fill
                                                    sizes="180px"
                                                    className="object-cover"
                                                    loading="lazy"
                                                />
                                                <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#071313] to-transparent p-3 text-left text-xs font-bold text-white">
                                                    {image.label}
                                                </span>
                                            </button>
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid grid-cols-2 gap-3" aria-hidden="true">
                                        {selectedProject.images.map((image) => (
                                            <span
                                                key={image.src}
                                                className="aspect-video rounded-2xl border border-white/10 bg-white/[0.04]"
                                            />
                                        ))}
                                    </div>
                                )}

                                <a
                                    href={selectedProject.link}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="mt-auto inline-flex min-h-11 items-center justify-center gap-2 rounded-full bg-[var(--mint)] px-5 py-3 text-sm font-black text-[#071313] transition hover:bg-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--mint)]"
                                >
                                    Abrir projeto
                                    <FiExternalLink size={18} />
                                </a>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
