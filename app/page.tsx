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

    const el = carRef.current;
    const blackBg = document.getElementById('black-bg');

    // Configura estado inicial da máscara
    gsap.set(el, {
      opacity: 1,
      WebkitMaskImage: 'radial-gradient(circle, black 0%, transparent 70%)',
      maskImage: 'radial-gradient(circle, transparent 0%, black 70%)',
      WebkitMaskSize: '0% 0%',
      maskSize: '0% 0%',
      WebkitMaskRepeat: 'no-repeat',
      maskRepeat: 'no-repeat',
      WebkitMaskPosition: 'center',
      maskPosition: 'center',
    });

    // Cria timeline sincronizada com scroll
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: heroRef.current,
        start: 'top top',
        end: '+=150%',
        scrub: 4,
        pin: true,
        pinSpacing: true,
      }
    });

    // Anima máscara da imagem e opacidade do fundo preto juntos
    tl.to(el, {
      WebkitMaskSize: '300% 300%',
      maskSize: '300% 300%',
      ease: 'power2.out',
    }, 0) // ← começa no tempo 0 da timeline

      .to(blackBg, {
        opacity: 1,
        ease: 'power2.out',
      }, 0); // ← também no tempo 0, simultâneo
  }, { scope: container, dependencies: [isDesktop] });  

  return (
    <div ref={container} className="min-h-screen bg-slate-900">
      <div ref={heroRef} className="min-h-screen overflow-hidden">
        <AuroraBackgroundDemo />
        {isDesktop && (
          <>
            {/* Camada preta que começa invisível */}
            <div
              id="black-bg"
              className="fixed inset-0 z-40 bg-black pointer-events-none"
              style={{ opacity: 0 }}
            />

            {/* Imagem com máscara radial por cima */}
            <img
              loading="lazy"
              ref={carRef}
              src="/rosebg.svg"
              alt="Carrinho GSAP"
              className="fixed top-0 w-full h-auto z-50 pointer-events-none opacity-0"
            />
          </>
        )}
      </div>

      <SkillsSection />
      <Projects />
      <TimelineDemo />
      <ServicesSection />
    </div>
  )
}
