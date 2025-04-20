"use client";

import { motion } from "motion/react";
import React from "react";
import { AuroraBackground } from "./ui/aurora-background";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { Button } from "./ui/button";
import { ChevronRight, Rocket } from "lucide-react";
import Link from "next/link";

export function AuroraBackgroundDemo() {
    return (
        <AuroraBackground className="h-screen max-w-[100vw]">
            <div className="relative z-0 flex flex-col items-center justify-center h-full text-center px-4">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2, duration: 0.8 }}
                    className="max-w-4xl mx-auto"
                >
                    <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                        <TextGenerateEffect words="Tecnologia Criativa & Resultados Memoráveis" className="text-purple-400" />
                    </h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.6 }}
                        className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                    >
                        Especialista em desenvolvimento web e análise de dados, criando soluções digitais completas — de sites e sistemas a insights estratégicos.
                    </motion.p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button
                            size="lg"
                            className="rounded-full group px-8 py-6 bg-purple-600 hover:bg-purple-700 transition-all"
                            asChild
                        >
                            <Link href="/#projects">
                                <span className="mr-2">Veja Projetos</span>
                                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                        <Button
                            variant="outline"
                            size="lg"
                            className="rounded-full group px-8 py-6 border-purple-400 text-purple-400 hover:bg-purple-400/10"
                            asChild
                        >
                            <Link href="/contact">
                                <span className="mr-2">Me Contrate</span>
                                <Rocket className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </Button>
                    </div>
                </motion.div>
            </div>
            {/* Animated SVGs */}
            <motion.img
                src="/undraw/undraw_a-day-at-the-park_9w8d.svg"
                alt="Day at the park"
                className="lg:w-64 md:w-46 h-auto absolute bottom-20 right-30 hidden md:block"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
            />
            <motion.img
                src="/undraw/undraw_waiting-for-you_xhp2.svg"
                alt="Waiting illustration"
                className="lg:w-64 md:w-46 h-auto absolute bottom-20 left-30 hidden md:block"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
            />
            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 1 }}
                className="absolute top-24 right-4 md:top-35 md:right-30 "
            >
                <motion.img
                    src="/undraw/undraw_aircraft_usu4.svg"
                    alt="Aircraft"
                    className="w-16 h-auto md:w-24 lg:w-32"
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 1 }}
                className="absolute top-20 left-4 md:top-35 md:left-30"
            >
                <motion.img
                    src="/undraw/undraw_floating_hvri.svg"
                    alt="Floating illustration"
                    className="w-16 h-auto md:w-24 lg:w-32"
                    animate={{ y: [0, 10, 0] }}
                    transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            </motion.div>
        </AuroraBackground>
    );
}
