// components/animated-tooltip.tsx
"use client";
import { motion, useTransform, AnimatePresence, useMotionValue, useSpring } from "framer-motion";
import React, { useState } from "react";

interface TooltipItem {
    id: number;
    name: string;
    designation: string;
    image?: string;
    icon?: React.ReactNode;
}

export const AnimatedTooltip = ({
    item,
    children,
}: {
    item: TooltipItem;
    children: React.ReactNode;
}) => {
    const [isHovered, setIsHovered] = useState(false);
    const springConfig = { stiffness: 300, damping: 15 };
    const x = useMotionValue(0);
    const rotate = useSpring(useTransform(x, [-150, 150], [-25, 25]), springConfig);
    const translateX = useSpring(useTransform(x, [-150, 150], [-75, 75]), springConfig);
    const scale = useSpring(isHovered ? 1.1 : 1, springConfig);

    const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
        const rect = event.currentTarget.getBoundingClientRect();
        x.set(event.clientX - rect.left - rect.width / 2);
    };

    return (
        <div
            className="relative group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onMouseMove={handleMouseMove}
        >
            <AnimatePresence mode="wait">
                {isHovered && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.8 }}
                        animate={{
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            transition: { type: "spring", stiffness: 300, damping: 15 }
                        }}
                        exit={{ opacity: 0, y: 20, scale: 0.8 }}
                        style={{ translateX, rotate }}
                        className="absolute -top-20 left-1/2 z-[999] flex -translate-x-1/2 flex-col items-center justify-center"
                    >
                        <div className="rounded-lg bg-gradient-to-br from-slate-800 to-slate-900 p-4 shadow-2xl border border-slate-700/50 backdrop-blur-xl transform-gpu">
                            <div className="relative space-y-2">
                                <div className="absolute -inset-2 rounded-lg bg-gradient-to-r from-purple-500/30 to-pink-500/30 opacity-50 blur-xl" />
                                <h3 className="relative z-10 text-sm font-semibold text-slate-100">
                                    {item.name}
                                </h3>
                                {item.designation && (
                                    <p className="relative z-10 text-xs text-slate-400 font-medium">
                                        {item.designation}
                                    </p>
                                )}
                            </div>
                            <div className="absolute inset-0 opacity-10 mix-blend-soft-light" />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            <motion.div
                style={{ scale }}
                className="cursor-pointer transform-gpu transition-all duration-300"
            >
                {children}
            </motion.div>
        </div>
    );
};