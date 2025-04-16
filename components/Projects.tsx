import React from 'react'
import { StickyScroll } from './ui/sticky-scroll-reveal'

export function Projects() {
    return (
        <section className="relative" id='projects'>
            <div className='flex flex-col items-center justify-center h-screen'>
              <h2 className='text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10'>Projects</h2>
              <StickyScroll content={PROJECTS_CONTENT} />
            </div>
        </section>
    )
}

const PROJECTS_CONTENT = [
    {
        title: "Sistema de Gerenciamento para Academias",
        description: "Plataforma completa para academias, com autenticação segura, cadastro de membros, agendamento de aulas, controle de presença e painel administrativo moderno. Desenvolvido com Next.js, Tailwind e Supabase, o sistema é ideal para academias que desejam profissionalizar sua gestão e oferecer uma experiência digital integrada para alunos e profissionais.",
        tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Prisma'],
        content: (
            <div className="h-full w-full relative">
                <img
                    src="/gym.png"
                    alt="Sistema de gerenciamento de academia"
                    className="h-full w-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Sistema para Academias</h3>
                    <p className="text-slate-300 mt-2">Gestão eficiente com foco em agendamento e controle de alunos</p>
                </div>
            </div>
        ),
    },
    {
        title: "Portfólio Pessoal com Next.js e UI Moderna",
        description: "Portfólio profissional desenvolvido com Next.js, TypeScript, Tailwind e componentes do Aceternity UI. Com design responsivo, efeitos animados e foco em performance, o site apresenta meus projetos, stack de tecnologias e formas de contato de maneira elegante e objetiva. Ideal para destacar habilidades técnicas e criar uma presença online moderna.",
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Aceternity UI'],
        content: (
            <div className="h-full w-full relative ">
                <img
                    src="/portfolio.png"
                    alt="Portfólio pessoal"
                    className="h-full w-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Portfólio Dev Responsivo</h3>
                    <p className="text-slate-300 mt-2">Design moderno com foco em performance e experiência do usuário</p>
                </div>
            </div>
        ),
    },
    // Add more projects...
]
