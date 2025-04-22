'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Mail, FileText, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);
    const closeMenu = () => setIsOpen(false);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-purple-400" />
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            Leandro.S Dev
                        </span>
                    </Link>

                    {/* Menu Desktop */}
                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="ghost" asChild>
                            <Link
                                href="/contact"
                                className="text-slate-300 hover:text-pink-400 flex items-center gap-2"
                            >
                                <Mail className="h-4 w-4" />
                                Contatos
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link
                                href="/Curriculo_2025.pdf"
                                download
                                className="text-slate-300 hover:text-pink-400 flex items-center gap-2"
                            >
                                <FileText className="h-4 w-4" />
                                Baixe Currículo
                            </Link>
                        </Button>
                    </div>

                    {/* Menu Mobile - Toggle */}
                    <div className="md:hidden">
                        <Button
                            name='menu-toggle'
                            aria-label="Toggle menu"
                            variant="ghost"
                            className="text-slate-300"
                            onClick={toggleMenu}
                        >
                            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                        </Button>
                    </div>
                </div>

                {/* Menu Mobile - Items */}
                {isOpen && (
                    <div className="md:hidden mt-2 flex flex-col gap-2 pb-4">
                        <Link
                            href="/contact"
                            onClick={closeMenu}
                            className="text-slate-300 hover:text-pink-400 flex items-center gap-2"
                        >
                            <Mail className="h-4 w-4" />
                            Contatos
                        </Link>
                        <Button variant="ghost" asChild>
                            <Link
                                href="/Curriculo_2025.pdf"
                                download
                                onClick={closeMenu}
                                className="text-slate-300 hover:text-pink-400 flex items-center gap-2"
                            >
                                <FileText className="h-4 w-4" />
                                Baixe Currículo
                            </Link>
                        </Button>
                    </div>
                )}
            </div>
        </motion.nav>
    );
};
