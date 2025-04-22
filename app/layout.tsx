import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";

// Carregando fontes com suporte para CSS custom property
const geistSans = Geist({
  subsets: ["latin"],
  variable: "--font-geist-sans",
  display: "swap", // melhora o carregamento perceptível
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
  display: "swap",
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
    siteName: "Leandro Dev",
    locale: "pt_BR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className="scroll-smooth">
      <head />
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
        <Navbar />
        <main className="min-h-screen">{children}</main>
      </body>
    </html>
  );
}
