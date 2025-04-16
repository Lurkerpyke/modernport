'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Code, Mail, User } from 'lucide-react';
import { Button } from './ui/button';

export const Navbar = () => {
    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <Link href="/" className="flex items-center gap-2">
                        <Code className="h-6 w-6 text-purple-400" />
                        <span className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
                            DevPortfolio
                        </span>
                    </Link>

                    <div className="hidden md:flex items-center gap-6">
                        <Button variant="ghost" asChild>
                            <Link href="/about" className="text-slate-300 hover:text-purple-400 flex items-center gap-2">
                                <User className="h-4 w-4" />
                                About
                            </Link>
                        </Button>
                        <Button variant="ghost" asChild>
                            <Link href="/contact" className="text-slate-300 hover:text-pink-400 flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Contact
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </motion.nav>
    );
};

