//app/

import React from "react";
import { Timeline } from "./ui/timeline";
import { AnimatedTooltip } from "./ui/animated-tooltip";


export function TimelineDemo() {
    const data = [
        {
            title: "Final de 2021",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Estava na faculdade de Ciências econômicas e começei a me interessar por análise de dados. Logo após realizei cursos de linguagem de programação python, sklearn, numpy, matplotlib. Realizei diversos projetos para adquirir conhecimento e prática.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src='/placeholder.svg'
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="startup template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2022",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Devido à extração de dados começei a ter muito contato com a parte frontal dos websites: tags, elementos, estilos etc. Entendi que seria importante aprender frontend, acabei cursando <span className="italic">HTML5</span>, <span className="italic">CSS3</span> e <span className="italic">JavaScript</span>. O que me ajudou muito a entender os arquivos json que eu usaria nas análises de dados e também na filtragem com as classes e as tags.
                    </p>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        A partir desse conhecimento e com a preocupação de me destacar no mercado decidi arriscar um portólio. Um portifólio simples mas que seria muito importante para meu desenvolvimento profissional. Algo como um pontapé inicial.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src='/placeholder.svg'
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="bento template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "início de 2023",
            content: (
                <div>
                    <div className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Em 2023 me senti preparado para começar a trabalhar com tecnologia. Realizei alguns projetos freelancer na plataforma{" "}
                        <div>
                            <AnimatedTooltip
                                item={{
                                    id: 999,
                                    name: "Fiverr",
                                    designation: "Plataforma global de freelancers onde ofereço serviços de dados e SEO desde 2023.",
                                }}
                            >
                                    <a
                                        href="https://fiverr.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="font-bold bg-clip-text text-transparent bg-gradient-to-br from-green-300 to-green-500 text-xl md:text-2xl max-w-full"
                                    >
                                        Fiverr
                                    </a>
                            </AnimatedTooltip>{" "}
                        </div>
                        mas, infelizmente, nenhum na área que eu desejava. A grande maioria sendo trabalhos de escrita de artigos e aperfeiçoamento do SEO.
                    </div>


                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Apliquei para diversas vagas de analista de dados no linkedin, enquanto isso estava trabalhando na secretaria da minha antiga escola.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src='/placeholder.svg'
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "início de 2023",
            content: (
                <div >
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Aprendi novas ferramentas de desenvolvimento como <span className="italic">NextJS</span>, <span className="italic">React</span> e <span className="italic">Tailwind CSS</span>. Também busquei conhecimento sobre SEO para melhor ranking do site.
                    </p>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Realizei projetos de analise de dados e de desenvolvimento de web Aplications. Você pode dar uma olhada na barra superior à página na opção &quot;Projetos&quot;. Começei a usar UI das plataformar aceternety e shadcn.
                    </p>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src='/placeholder.svg'
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
        {
            title: "2024",
            content: (
                <div>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Aprendi novas ferramentas de desenvolvimento como <span className="italic">NextJS</span>, <span className="italic">React</span> e <span className="italic">Tailwind CSS</span>. Também busquei conhecimento sobre SEO para melhor ranking do site.
                    </p>
                    <p className="mb-8 text-xs font-normal md:text-sm bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                        Realizei projetos de analise de dados e de desenvolvimento de web Aplications. Você pode dar uma olhada na barra superior à página na opção &quot;Projetos&quot;. Começei a usar UI das plataformar aceternety e shadcn.
                    </p>
                    <div className="mb-8">
                        <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Promptopia
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Aprendizado de máquina
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Websites focados em SEO
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Aceternity & Shadcn UI
                        </div>
                        <div className="flex gap-2 items-center text-neutral-300 dark:text-neutral-300 text-xs md:text-sm">
                            ✅ Design e Boa escrita
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <img
                            src='/placeholder.svg'
                            alt="hero template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="feature template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                        <img
                            src='/placeholder.svg'
                            alt="cards template"
                            width={500}
                            height={500}
                            className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
                        />
                    </div>
                </div>
            ),
        },
    ];
    return (
        <section className="relative w-full overflow-clip" id="about">
            <Timeline data={data} />
        </section>
    );
}
