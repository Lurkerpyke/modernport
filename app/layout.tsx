import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Analytics } from "@vercel/analytics/next"
import SplashCursor from "@/components/Splash";

// Carregando fontes com suporte para CSS custom property
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap",
  preload: true,
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  title: "Leandro Dev",
  description: "A modern portfolio website for Leandro Dev",
  authors: [{ name: "Leandro Soares", url: "https://leandrodevportfolio.vercel.app/" }],
  metadataBase: new URL("https://leandrodevportfolio.vercel.app/"), // útil para SEO e Open Graph
  openGraph: {
    title: "Leandro Dev",
    description: "Explore projetos modernos e experiências de Leandro Soares",
    url: "https://leandrodevportfolio.vercel.app/",
    images: ['https://leandrodevportfolio.vercel.app/og.png'],
    siteName: "Leandro Dev",
    locale: "pt_BR",
    type: "website",
  },
  keywords: ["Developer", "Portfolio", "React", "Next.js"],
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta property="og:image" content="Link preview image URL"></meta>
      </head>
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          bg-white 
          text-neutral-900 
          dark:bg-black 
          dark:text-neutral-100
        `}
      >
        <SplashCursor />
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Analytics />
      </body>
    </html>
  );
};
