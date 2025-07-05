'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { Code, Palette, Server, Database } from "lucide-react";
import React from 'react';

export const SkillsSection = () => {
    return (
        <section className="py-24 px-4 bg-slate-950/50">
            <div className="max-w-7xl mx-auto relative">
                <div className='flex flex-col items-center gap-5'>
                    <div>
                        <img src="/undraw/undraw_nature_yf30.svg" alt="nature" className='w-8 md:w-15 h-auto' loading='lazy' />
                    </div>

                    <motion.h2
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        className="text-4xl font-bold text-center mb-16 text-slate-200"
                    >
                        <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                            Habilidades Técnicas
                        </span>
                    </motion.h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SKILLS.map((skill, index) => (
                        <motion.div
                            key={skill.title}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <Card className="h-full p-6 pb-10 bg-slate-800 border-slate-700 hover:border-purple-400 transition-colors group relative">
                                <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />
                                <div className="flex items-start gap-4">
                                    <div className="p-3 rounded-lg bg-purple-500/10 relative z-10 ">
                                        <AnimatedTooltip
                                            item={{
                                                id: index + 1,
                                                name: skill.tooltip,
                                                designation: skill.title,
                                                image: "",
                                            }}
                                        >
                                            <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-400/30">
                                                {React.cloneElement(skill.icon, {
                                                    className: "h-6 w-6 text-purple-400"
                                                })}
                                            </div>
                                        </AnimatedTooltip>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-200">
                                            {skill.title}
                                        </h3>
                                        <p className="text-slate-400 mt-2">{skill.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {skill.tech.map((tech) => (
                                                <span
                                                    key={tech}
                                                    className="px-3 py-1 text-sm rounded-full bg-purple-900/30 text-purple-300"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

// Dados Atualizados
const SKILLS = [
    {
        title: 'Engenharia Frontend',
        icon: <Code />,
        tooltip: 'Especialista no Ecossistema React | Certificado em Next.js',
        description: 'Desenvolvimento de interfaces de usuário performáticas e acessíveis',
        tech: ['NextJS', 'TypeScript', 'React', 'JavaScript']
    },
    {
        title: 'Design UI/UX',
        icon: <Palette />,
        tooltip: 'Arquiteto de Sistemas de Design | Especialista em Framer Motion',
        description: 'Criação de experiências intuitivas e visualmente impressionantes',
        tech: ['Figma', 'Aceternity', 'Framer Motion', 'Tailwind CSS'],
    },
    {
        title: 'Desenvolvimento Backend',
        icon: <Server />,
        tooltip: 'Soluções Nativas na Nuvem | APIs REST/GraphQL',
        description: 'Desenvolvimento de serviços escaláveis e APIs',
        tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    },
    {
        title: 'DevOps & Nuvem',
        icon: <Database />,
        tooltip: 'Certificado AWS | Especialista em Kubernetes',
        description: 'Gestão de pipelines CI/CD e infraestrutura em nuvem',
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
]
