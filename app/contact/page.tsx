'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { useState } from 'react';
import Image from 'next/image';


export default function ContactPage() {
    // Constantes para receber, carregamento e Status
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    // Função para Enviar o Formulário
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        if (!name || !email || !message) {
            alert('Preencha todos os campos!');
            setLoading(false);
            return;
        }


        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (res.ok) {
                setSuccess(true);
                setName('');
                setEmail('');
                setMessage('');
            } else {
                console.error('Erro ao enviar a mensagem');
            }
        } catch {
            console.error('Erro na requisição');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-slate-900 pt-10">
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Formulário */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="w-full space-y-8"
                        >
                            <Card className="p-6 sm:p-8 bg-slate-800 border border-slate-700 shadow-lg">
                                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                                    Me Envie Uma Mensagem
                                </h2>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-slate-300 mb-2">Seu Nome</label>
                                        <input
                                            type="text"
                                            value={name}
                                            onChange={(e) => setName(e.target.value)}
                                            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                                            placeholder="Nome Completo"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-2">Seu Email</label>
                                        <input
                                            type="email"
                                            value={email}
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                                            placeholder="seuemail@exemplo.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-2">Mensagem</label>
                                        <textarea
                                            rows={5}
                                            value={message}
                                            onChange={(e) => setMessage(e.target.value)}
                                            className="w-full p-3 bg-slate-700/50 border border-slate-600 rounded-lg text-white"
                                            placeholder="Escreva sua mensagem aqui..."
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        type="submit"
                                        disabled={loading}
                                        className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600"
                                    >
                                        <Rocket className="mr-2 h-5 w-5" />
                                        {loading ? 'Enviando...' : 'Enviar Mensagem'}
                                    </Button>

                                    {success && (
                                        <p className="text-green-400 text-sm mt-4">Mensagem Enviada Com Sucesso! 🚀</p>

                                    )}
                                </form>
                            </Card>
                        </motion.div>

                        {/* Contatos */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full space-y-8"
                        >
                            <div className="space-y-6 flex flex-col p-0">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-6">
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Interação direta
                                    </span>
                                </h3>

                                <div className="grid gap-6 w-full max-w-full">
                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors min-w-0">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <Mail className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div className="min-w-0">
                                                <h4 className="text-base font-semibold text-slate-200">Email</h4>
                                                <a
                                                    href="mailto:leandro.soares.eneterio@gmail.com"
                                                    className="text-sm text-slate-400 break-words block overflow-hidden text-ellipsis"
                                                >
                                                    leandro.soares.eneterio@gmail.com
                                                </a>
                                            </div>
                                        </div>
                                    </Card>


                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <Phone className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-semibold text-slate-200">Telefone</h4>
                                                <a className="text-sm text-slate-400" href="tel:+5581997147184">+55 (81) 997147184</a>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <MessageCircle className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base font-semibold text-slate-200">Redes Sociais</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {[
                                                        {
                                                            name: 'LinkedIn',
                                                            url: 'https://www.linkedin.com/in/leandro-soares-eneterio-35985b306/',
                                                            aria: 'Visitar perfil no LinkedIn'
                                                        },
                                                        {
                                                            name: 'GitHub',
                                                            url: 'https://github.com/Lurkerpyke',
                                                            aria: 'Visitar perfil no GitHub'
                                                        },
                                                        {
                                                            name: 'Instagram',
                                                            url: 'https://www.instagram.com/leandrosoares321/',
                                                            aria: 'Visitar perfil no Twitter'
                                                        }
                                                    ].map((social) => (
                                                        <a
                                                            key={social.name}
                                                            href={social.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            aria-label={social.aria}
                                                            className="px-3 py-1 text-sm rounded-full bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 transition-colors cursor-pointer inline-flex items-center gap-1.5"
                                                        >
                                                            {social.name}
                                                            <svg
                                                                xmlns="http://www.w3.org/2000/svg"
                                                                viewBox="0 0 20 20"
                                                                fill="currentColor"
                                                                className="w-3.5 h-3.5 opacity-70"
                                                            >
                                                                <path
                                                                    fillRule="evenodd"
                                                                    d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                                                                    clipRule="evenodd"
                                                                />
                                                            </svg>
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>

                            {/* Ilustração */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="hidden md:block"
                            >
                                <Image
                                    src="/undraw/undraw_contact-us_kcoa.svg"
                                    alt="Ilustração de contato"
                                    width={400}
                                    height={300}
                                    priority
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
};
