'use client'

import React, { useRef, useEffect, useState } from 'react';
import { AuroraBackgroundDemo } from '@/components/Hero';
import { SkillsSection } from '@/components/SkillsSections';
import { Projects } from '@/components/Projects';
import { TimelineDemo } from '@/components/TimelineDemo';
import { ServicesSection } from '@/components/Services';

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const container = useRef<HTMLDivElement>(null);
  const carRef = useRef<HTMLImageElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    // Atualiza o estado com base na largura da janela
    const checkScreenSize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };

    checkScreenSize(); // Executa na montagem
    window.addEventListener('resize', checkScreenSize);
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  useGSAP(() => {
    if (!isDesktop || !carRef.current || !heroRef.current) return;

    gsap.fromTo(
      carRef.current,
      { opacity: 0 },
      {
        opacity: 1,
        backgroundColor: "black",
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "+=200%",
          scrub: 2,
          pin: true,
          pinSpacing: true,
        },
      }
    );
  }, { scope: container, dependencies: [isDesktop] });

  return (
    <div ref={container} className="min-h-screen bg-slate-900">
      <div ref={heroRef} className="min-h-screen overflow-hidden">
        <AuroraBackgroundDemo />
        {isDesktop && (
          <img
            loading='lazy'
            ref={carRef}
            src="/rosebg.svg"
            alt="Carrinho GSAP"
            className="fixed top-0 w-full h-auto z-50 pointer-events-none opacity-0"
          />
        )}
      </div>

      <SkillsSection />
      <Projects />
      <TimelineDemo />
      <ServicesSection />
    </div>
  )
}
