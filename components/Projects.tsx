import React from 'react'
// import { StickyScroll } from './ui/sticky-scroll-reveal';
import dynamic from 'next/dynamic';

const StickyScroll = dynamic(
    () => import('./ui/sticky-scroll-reveal'),
    { ssr: false }
);


export function Projects() {
    return (
        <section className="relative" id='projects'>
            <div className='flex flex-col items-center justify-center h-screen'>
                <h2 className='text-4xl bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-10'>Projetos</h2>
                <StickyScroll content={PROJECTS_CONTENT} />
            </div>
        </section>
    )
}

const PROJECTS_CONTENT = [
    {
        title: "Biblioteca Virtual Escolar",
        description: "Biblioteca virtual completa voltada para ambientes escolares. Possui painel administrativo para controle de usuários, gerenciamento de livros e histórico de empréstimos. Com autenticação segura e um catálogo intuitivo, o sistema facilita o acesso a livros e o acompanhamento de registros de empréstimos. Ideal para instituições de ensino que desejam modernizar o processo de gestão bibliotecária.",
        liveUrl: "https://bibliotec-ten.vercel.app/",
        githubUrl: "https://github.com/Lurkerpyke/bibliotec",
        tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'TypeScript'],
        content: (
            <div className="h-full w-full relative">
                <img
                    src="/projetos/bibliotec.avif"
                    loading='lazy'
                    alt="Biblioteca virtual escolar"
                    className="h-full w-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Sistema de Biblioteca Escolar</h3>
                    <p className="text-slate-300 mt-2">Gerenciamento de livros, usuários e empréstimos com painel administrativo</p>
                </div>
            </div>
        ),
    },
    {
        title: "Sistema de Gerenciamento para Academias",
        description: "Plataforma completa para academias, com autenticação segura, cadastro de membros, agendamento de aulas, controle de presença e painel administrativo moderno. Desenvolvido com Next.js, Tailwind e Supabase, o sistema é ideal para academias que desejam profissionalizar sua gestão e oferecer uma experiência digital integrada para alunos e profissionais.",
        liveUrl: "https://gym-management-ebon.vercel.app/",
        githubUrl: "https://github.com/Lurkerpyke/gym-management",
        tech: ['Next.js', 'Supabase', 'Tailwind CSS', 'Prisma'],
        content: (
            <div className="h-full w-full relative">
                <img
                    src="/projetos/gym.avif"
                    loading='lazy'
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
        title: "Site Profissional para Designer de Sobrancelhas",
        description:
            "Website desenvolvido para uma especialista em design de sobrancelhas. Com foco em estética, responsividade e performance, o site apresenta os serviços oferecidos, galeria de imagens, informações de contato e um layout elegante. Criado com Next.js, Tailwind CSS e componentes personalizados para proporcionar uma presença online marcante e moderna.",
        liveUrl: "https://shbeauty.vercel.app/",
        githubUrl: "https://github.com/Lurkerpyke/shbeauty",
        tech: ["Next.js", "TypeScript", "Tailwind CSS"],
        content: (
            <div className="h-full w-full relative">
                <img
                    src="/projetos/shbeauty.avif"
                    loading="lazy"
                    alt="Site de designer de sobrancelhas"
                    className="h-full w-full object-cover mix-blend-overlay opacity-90"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-slate-900 to-transparent">
                    <h3 className="text-2xl font-bold text-white">Site Profissional SH Beauty</h3>
                    <p className="text-slate-300 mt-2">
                        Design elegante com foco em estética, identidade visual e usabilidade
                    </p>
                </div>
            </div>
        ),
    },
    {
        title: "Portfólio Pessoal com Next.js e UI Moderna",
        description: "Portfólio profissional desenvolvido com Next.js, TypeScript, Tailwind e componentes do Aceternity UI. Com design responsivo, efeitos animados e foco em performance, o site apresenta meus projetos, stack de tecnologias e formas de contato de maneira elegante e objetiva. Ideal para destacar habilidades técnicas e criar uma presença online moderna.",
        liveUrl: "https://leandroportfolio.vercel.app/",
        githubUrl: "https://github.com/Lurkerpyke/my-port",
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'Aceternity UI'],
        content: (
            <div className="h-full w-full relative ">
                <img
                    src="/projetos/Portfolio.avif"
                    loading='lazy'
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
