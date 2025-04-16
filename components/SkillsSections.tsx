'use client';

import { motion } from 'framer-motion';
import { Card } from './ui/card';
import { AnimatedTooltip } from './ui/animated-tooltip';
import { Code, Palette, Server, Database } from "lucide-react";
import React from 'react';

export const SkillsSection = () => {
    return (
        <section className="py-24 px-4 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="text-4xl font-bold text-center mb-16 text-slate-200"
                >
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Technical Mastery
                    </span>
                </motion.h2>

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

// Updated Data
const SKILLS = [
    {
        title: 'Frontend Engineering',
        icon: <Code />,
        tooltip: 'React Ecosystem Expert | Next.js Certified',
        description: 'Building performant and accessible user interfaces',
        tech: ['NextJS', 'TypeScript', 'React', 'JavaScript']
    },
    {
        title: 'UI/UX Design',
        icon: <Palette />,
        tooltip: 'Design System Architect | Framer Motion Specialist',
        description: 'Creating intuitive and visually stunning experiences',
        tech: ['Figma', 'Aceternity', 'Framer Motion', 'Tailwind CSS'],
    },
    {
        title: 'Backend Development',
        icon: <Server />,
        tooltip: 'Cloud-Native Solutions | REST/GraphQL APIs',
        description: 'Scalable backend services and API development',
        tech: ['Node.js', 'GraphQL', 'PostgreSQL', 'Redis'],
    },
    {
        title: 'DevOps & Cloud',
        icon: <Database />,
        tooltip: 'AWS Certified | Kubernetes Specialist',
        description: 'CI/CD pipelines and cloud infrastructure management',
        tech: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    },
]
