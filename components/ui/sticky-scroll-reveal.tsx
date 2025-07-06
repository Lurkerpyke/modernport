"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import Image from "next/image";

const StickyScroll = ({
    content,
    contentClassName,
}: {
    content: {
        title: string;
        description: string;
        content?: React.ReactNode;
        liveUrl?: string;
        githubUrl?: string;
    }[];
    contentClassName?: string;
}) => {
    const [activeCard, setActiveCard] = React.useState(0);
    const ref = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
        container: ref,
        offset: ["start start", "end start"],
    });
    const cardLength = content.length;

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        const cardsBreakpoints = content.map((_, index) => index / cardLength);
        const closestBreakpointIndex = cardsBreakpoints.reduce(
            (acc, breakpoint, index) => {
                const distance = Math.abs(latest - breakpoint);
                if (distance < Math.abs(latest - cardsBreakpoints[acc])) {
                    return index;
                }
                return acc;
            },
            0,
        );
        setActiveCard(closestBreakpointIndex);
    });

    const backgroundColors = [
        "#0f172a",
        "#000000",
        "#171717",
    ];

    const linearGradients = useMemo(() => [
        "linear-gradient(to bottom right, #ffffff, #008a94)",
        "linear-gradient(to bottom right, #111330, #6366f1)",
        "linear-gradient(to bottom right, #f97316, #eab308)",
    ], []);

    const [backgroundGradient, setBackgroundGradient] = useState(
        linearGradients[0],
    );

    useEffect(() => {
        setBackgroundGradient(linearGradients[activeCard % linearGradients.length]);
    }, [activeCard, linearGradients]);

    return (
        <motion.div
            animate={{
                backgroundColor: backgroundColors[activeCard % backgroundColors.length],
            }}
            className="relative flex h-[30rem] justify-center space-x-10 overflow-y-auto rounded-md p-4 lg:p-10 w-full"
            ref={ref}
        >
            <div className="relative flex items-start px-4">
                <div className="max-w-full lg:max-w-2xl">
                    {content.map((item, index) => (
                        <div key={item.title + index} className="my-20 py-5">
                            <motion.h2
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-xl font-bold text-slate-100"
                            >
                                {item.title}
                            </motion.h2>
                            <motion.p
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeCard === index ? 1 : 0.3 }}
                                className="text-sm mt-10 max-w-sm text-slate-300"
                            >
                                {item.description}
                            </motion.p>

                            {/* Project buttons */}
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{
                                    opacity: activeCard === index ? 1 : 0.3,
                                    y: activeCard === index ? 0 : 10
                                }}
                                className="mt-6 flex flex-col md:flex-row gap-3"
                            >
                                {item.liveUrl && (
                                    <Button asChild variant="secondary" className="mr-2">
                                        <a
                                            href={item.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            Veja ao vivo <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                                {item.githubUrl && (
                                    <Button asChild variant="outline">
                                        <a
                                            href={item.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex items-center gap-1"
                                        >
                                            Código no GitHub <ExternalLink className="h-4 w-4" />
                                        </a>
                                    </Button>
                                )}
                            </motion.div>
                        </div>
                    ))}
                    <div className="h-40" />
                </div>
            </div>

            {/* Container for the floating card and SVG */}
            <div className="sticky top-0 hidden lg:block">
                {/* Girl positioned above the card */}
                <div className="relative z-20">
                    <Image
                        src="/undraw/undraw_professional-card_ldgq.svg"
                        alt="girl"
                        width={150}
                        height={150}
                        className="h-[150px] mx-auto"
                        style={{
                            transform: 'translateY(10%)',
                            maxWidth: '90%'
                        }}
                    />
                </div>

                {/* Card container */}
                <div
                    style={{ background: backgroundGradient }}
                    className={cn(
                        "h-60 w-80 overflow-hidden rounded-md",
                        contentClassName,
                    )}
                >
                    <div className="relative h-full w-full">
                        {content[activeCard].content ?? null}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default StickyScroll;