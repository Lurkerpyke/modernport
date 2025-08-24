// app/locations/[city]/page.tsx
import React from "react";
import { Metadata } from "next";

type CityKey = "camocim-de-sao-felix" | "caruaru";

const CITY_DATA: Record<
    CityKey,
    {
        titleCity: string;
        descriptionCity: string;
        coords: { lat: number; lng: number };
        population?: string;
        headline: string;
        canonicalPath: string;
        phone?: string;
        postalCode?: string;
    }
> = {
    "camocim-de-sao-felix": {
        titleCity: "Camocim de São Félix, PE",
        descriptionCity:
            "Desenvolvedor web em Camocim de São Félix — criação de sites, lojas online e SEO local. Atendimento personalizado para negócios locais.",
        coords: { lat: -8.35932, lng: -35.7639 },
        population: "≈ 17.419 (Censo 2022, IBGE)",
        headline: "Desenvolvedor Web em Camocim de São Félix — Criação de Sites Locais",
        canonicalPath: "/locations/camocim-de-sao-felix",
    },
    caruaru: {
        titleCity: "Caruaru, PE",
        descriptionCity:
            "Desenvolvedor web em Caruaru — criação de sites, lojas virtuais e otimização local (SEO). Atendo Caruaru e região do Agreste.",
        coords: { lat: -8.283, lng: -35.9758 },
        population: "Cidade regional com grande polo cultural e comercial",
        headline: "Desenvolvedor Web em Caruaru — Sites, Lojas e SEO Local",
        canonicalPath: "/locations/caruaru",
    },
};

// Ajuste aqui: seus contatos e URL do site
const BUSINESS = {
    name: "Leandro Dev – Criação de Sites Profissionais",
    url: "https://leandrodevportfolio.vercel.app",
    telephone: "+55 81 99717184", // opcional: atualize com seu número real
    logo: "https://leandrodevportfolio.vercel.app/favicon.ico", // atualize se tiver
    email: "leandro.soares.eneterio@gmail.com",
};

export async function generateMetadata({
    params,
}: {
    params: { city: string };
}): Promise<Metadata> {
    const key = params.city as CityKey;
    const data = CITY_DATA[key];

    if (!data) {
        return {
            title: "Leandro Dev — Desenvolvimento Web",
        };
    }

    const title = `${data.headline} | ${BUSINESS.name}`;
    const description = data.descriptionCity;
    const canonical = `${BUSINESS.url}${data.canonicalPath}`;

    return {
        title,
        description,
        alternates: {
            canonical,
        },
        openGraph: {
            title,
            description,
            url: canonical,
            siteName: BUSINESS.name,
            images: [
                {
                    url: `${BUSINESS.url}/og-${params.city}.webp`,
                    width: 1200,
                    height: 630,
                },
            ],
            type: "website",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
            images: [`${BUSINESS.url}/og-${params.city}.jpg`],
        },
    };
}

export default function CitySEOPage({
    params,
}: {
    params: { city: string };
}) {
    const cityKey = params.city as CityKey;
    const city = CITY_DATA[cityKey];

    if (!city) {
        return (
            <main className="max-w-screen-md mx-auto p-6">
                <h1 className="text-2xl font-bold">Página não encontrada</h1>
                <p>Local não configurado para SEO local.</p>
            </main>
        );
    }

    // JSON-LD: LocalBusiness + FAQ
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "ProfessionalService",
        "name": BUSINESS.name,
        "url": BUSINESS.url,
        "logo": BUSINESS.logo,
        "telephone": BUSINESS.telephone,
        "email": BUSINESS.email,
        "address": {
            "@type": "PostalAddress",
            "addressLocality": city.titleCity,
            "addressRegion": "PE",
            "addressCountry": "BR"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": city.coords.lat,
            "longitude": city.coords.lng
        },
        "areaServed": [
            {
                "@type": "Place",
                "name": city.titleCity
            },
            {
                "@type": "Place",
                "name": "Caruaru, PE"
            }
        ],
        "sameAs": [
            'https://www.instagram.com/leandrosoares321/',
            `${BUSINESS.url}`,
            'https://www.linkedin.com/in/leandro-soares-eneterio-35985b306/'
        ],
        "serviceType": ["Desenvolvimento web", "Criação de sites", "Lojas online", "SEO local"]
    };

    const faqJsonLd = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
            {
                "@type": "Question",
                "name": `Quanto custa um site simples em ${city.titleCity}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "O preço varia conforme escopo. Projetos simples a partir de valores acessíveis; solicite orçamento com requisitos (páginas, e-commerce, integrações)."
                }
            },
            {
                "@type": "Question",
                "name": `Você atende presencialmente em ${city.titleCity}?`,
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Atendo presencialmente quando necessário na região; o atendimento padrão é remoto com suporte local quando solicitado."
                }
            },
            {
                "@type": "Question",
                "name": "Você configura Google Meu Negócio e SEO local?",
                "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Sim — crio e otimizo a ficha do Google Meu Negócio, incluindo posts, imagens otimizadas e monitoramento de reviews."
                }
            }
        ]
    };

    return (
        <main className="max-w-3xl mx-auto p-6 prose">
            <script
                // JSON-LD precisa ser stringificado
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
                type="application/ld+json"
                key="ld-json"
            />
            <script
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
                type="application/ld+json"
                key="faq-json"
            />

            <h1 className="text-3xl font-bold">{city.headline}</h1>

            <p className="lead">
                {BUSINESS.name} — Atendendo <strong>{city.titleCity}</strong> e
                região. Ofereço criação de sites, lojas virtuais, landing pages e SEO
                local para negócios que querem vender mais online.
            </p>

            <section>
                <h2>Serviços oferecidos em {city.titleCity}</h2>
                <ul>
                    <li>Criação de sites institucionais (WordPress, Next.js)</li>
                    <li>Lojas virtuais (integração com meios de pagamento)</li>
                    <li>Otimização para buscas locais (Google Meu Negócio, SEO on-page)</li>
                    <li>Manutenção, performance e segurança</li>
                </ul>
            </section>

            <section>
                <h2>Por que contratar um desenvolvedor local?</h2>
                <p>
                    Um profissional que conhece a realidade local pode orientar sobre
                    integrações com pagamentos regionais, estrutura de conteúdo que
                    converta no seu público e, quando necessário, visitas presenciais.
                </p>
            </section>

            <section>
                <h2>Portfólio e resultados</h2>
                <p>
                    Aqui você pode apresentar projetos locais (nome do cliente, breve
                    descrição e link). Mesmo um projeto teste com resultados é um forte
                    sinal local.
                </p>
            </section>

            <section>
                <h2>Perguntas frequentes</h2>
                <details>
                    <summary>Quanto tempo demora para ficar pronto?</summary>
                    <p>Propostas simples: 1–3 semanas. Projetos maiores seguem cronograma combinado.</p>
                </details>
                <details>
                    <summary>Como solicitar orçamento?</summary>
                    <p>Use o formulário (link abaixo) ou envie um e-mail para {BUSINESS.email}.</p>
                </details>
            </section>

            <section>
                <h2>Contrate / Solicite orçamento</h2>
                <p>
                    Clique no botão abaixo para abrir o formulário de orçamento com
                    referência ao local — adicione utm_source=google_my_business para medir tráfego.
                </p>
                <p>
                    <a
                        href={`${BUSINESS.url}/contato?utm_source=google_my_business&utm_campaign=seo_${params.city}`}
                        className="inline-block px-4 py-2 rounded-md border"
                    >
                        Solicitar orçamento
                    </a>
                </p>
            </section>

            <footer>
                <p>
                    <strong>{BUSINESS.name}</strong> • Atendimento em {city.titleCity} —
                    PE • <a href={BUSINESS.url}>{BUSINESS.url}</a>
                </p>
            </footer>
        </main>
    );
}
