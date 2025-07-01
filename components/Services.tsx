'use client';

import { useRef, useEffect } from 'react';
import { Card } from './ui/card';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Code, Palette, Server, Database, Smartphone, Cloud, GitBranch, BarChart } from "lucide-react";
import React from 'react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);
}

export const ServicesSection = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const cards = cardRefs.current.filter(Boolean) as HTMLDivElement[];

        cards.forEach((card, i) => {
            gsap.fromTo(card,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    scrollTrigger: {
                        trigger: card,
                        start: 'top bottom-=100',
                        toggleActions: 'play none none none',
                    }
                }
            );
        });

        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);

    return (
        <section ref={sectionRef} className="py-24 px-4 bg-slate-950/50">
            <div className="max-w-7xl mx-auto">
                <h2 className="text-4xl font-bold text-center mb-16 text-slate-200">
                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Nossos Serviços
                    </span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {SERVICES.map((service, index) => (
                        <div
                            key={service.title}
                            ref={(el) => {
                                cardRefs.current[index] = el;
                            }}                              
                        >
                            <Card className="h-full p-6 pb-10 bg-slate-800 border-slate-700 hover:border-purple-400 transition-colors group relative overflow-hidden">
                                <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-purple-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="flex items-start gap-4 relative z-10">
                                    <div className="p-3 rounded-lg bg-purple-500/10">
                                        <div className="h-12 w-12 rounded-full bg-purple-500/10 flex items-center justify-center border border-purple-400/30">
                                            {React.cloneElement(service.icon, {
                                                className: "h-6 w-6 text-purple-400 group-hover:scale-110 transition-transform"
                                            })}
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-lg font-semibold text-slate-200 group-hover:text-purple-300 transition-colors">
                                            {service.title}
                                        </h3>
                                        <p className="text-slate-400 mt-2">{service.description}</p>
                                        <div className="mt-4 flex flex-wrap gap-2">
                                            {service.features.map((feature) => (
                                                <span
                                                    key={feature}
                                                    className="px-3 py-1 text-xs rounded-full bg-purple-900/30 text-purple-300 group-hover:bg-purple-900/50 transition-colors"
                                                >
                                                    {feature}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

const SERVICES = [
    {
        title: 'Desenvolvimento Web',
        icon: <Code />,
        description: 'Aplicações modernas com foco em performance e UX',
        features: ['NextJS', 'React', 'TypeScript', 'Tailwind']
    },
    {
        title: 'UI/UX Design',
        icon: <Palette />,
        description: 'Interfaces intuitivas e visualmente impressionantes',
        features: ['Figma', 'Prototipagem', 'Design Systems', 'Acessibilidade']
    },
    {
        title: 'Aplicativos Móveis',
        icon: <Smartphone />,
        description: 'Apps nativos e cross-platform com React Native',
        features: ['iOS', 'Android', 'React Native', 'Expo']
    },
    {
        title: 'APIs & Backend',
        icon: <Server />,
        description: 'Sistemas robustos e APIs escaláveis',
        features: ['Node.js', 'GraphQL', 'REST APIs', 'Microserviços']
    },
    {
        title: 'Cloud & DevOps',
        icon: <Cloud />,
        description: 'Infraestrutura em nuvem e automação',
        features: ['AWS', 'Docker', 'CI/CD', 'Serverless']
    },
    {
        title: 'E-commerce',
        icon: <GitBranch />,
        description: 'Lojas online de alta conversão',
        features: ['Shopify', 'Headless Commerce', 'Pagamentos', 'SEO']
    },
    {
        title: 'Otimização',
        icon: <BarChart />,
        description: 'Melhoria de performance e SEO',
        features: ['Core Web Vitals', 'SEO Técnico', 'PWA', 'Lighthouse']
    },
    {
        title: 'Manutenção',
        icon: <Database />,
        description: 'Suporte contínuo e atualizações',
        features: ['Atualizações', 'Correções', 'Monitoramento', 'Backups']
    }
];