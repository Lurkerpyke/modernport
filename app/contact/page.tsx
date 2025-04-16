'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Phone, Rocket } from 'lucide-react';
import { Card } from '@/components/ui/card';

const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("Form submitted!");
  // lógica de envio aqui
};

export default function ContactPage() {
    return (
        <div className="min-h-screen bg-slate-900 pt-10">
            <section className="relative py-16 px-4 sm:px-6 lg:px-8 bg-slate-950/50">
                <div className="max-w-7xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
                        {/* Contact Form */}
                        <motion.div
                            initial={{ opacity: 0, x: -40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6, ease: 'easeOut' }}
                            viewport={{ once: true }}
                            className="w-full space-y-8"
                        >
                            <Card className="p-6 sm:p-8 bg-slate-800 border border-slate-700 shadow-lg">
                                <h2 className="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-6">
                                    Send a Message
                                </h2>

                                <form className="space-y-6" onSubmit={handleSubmit}>
                                    <div>
                                        <label className="block text-slate-300 mb-2 text-sm sm:text-base">Your Name</label>
                                        <input
                                            type="text"
                                            className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm sm:text-base"
                                            placeholder="John Doe"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-2 text-sm sm:text-base">Your Email</label>
                                        <input
                                            type="email"
                                            className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm sm:text-base"
                                            placeholder="you@email.com"
                                        />
                                    </div>

                                    <div>
                                        <label className="block text-slate-300 mb-2 text-sm sm:text-base">Message</label>
                                        <textarea
                                            rows={5}
                                            className="w-full p-3 sm:p-4 bg-slate-700/50 border border-slate-600 rounded-lg focus:ring-2 focus:ring-purple-400 focus:border-transparent text-sm sm:text-base"
                                            placeholder="Write your message here..."
                                        />
                                    </div>

                                    <Button
                                        size="lg"
                                        className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 transition-all"
                                        type="submit"
                                    >
                                        <Rocket className="mr-2 h-5 w-5" />
                                        Launch Message
                                    </Button>
                                </form>
                            </Card>
                        </motion.div>

                        {/* Contact Info */}
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.6 }}
                            viewport={{ once: true }}
                            className="w-full space-y-8"
                        >
                            <div className="space-y-6">
                                <h3 className="text-xl sm:text-2xl font-bold text-slate-200 mb-6">
                                    <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        Direct Channels
                                    </span>
                                </h3>

                                <div className="grid gap-6">
                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <Mail className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-semibold text-slate-200">Email</h4>
                                                <p className="text-sm text-slate-400 break-all">contact@devportfolio.com</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <Phone className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-semibold text-slate-200">Phone</h4>
                                                <p className="text-sm text-slate-400">+1 (555) 123-4567</p>
                                            </div>
                                        </div>
                                    </Card>

                                    <Card className="p-6 bg-slate-800 border border-slate-700 hover:border-purple-400 transition-colors">
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-purple-500/10 rounded-lg">
                                                <MessageCircle className="h-6 w-6 text-purple-400" />
                                            </div>
                                            <div>
                                                <h4 className="text-base font-semibold text-slate-200">Social</h4>
                                                <div className="flex flex-wrap gap-2 mt-2">
                                                    {['LinkedIn', 'GitHub', 'Twitter'].map((platform) => (
                                                        <span
                                                            key={platform}
                                                            className="px-3 py-1 text-sm rounded-full bg-purple-900/30 text-purple-300 hover:bg-purple-900/50 transition-colors"
                                                        >
                                                            {platform}
                                                        </span>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>
                                    </Card>
                                </div>
                            </div>

                            {/* Illustration */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                className="hidden md:block"
                            >
                                <img
                                    src="/undraw/undraw_contact-us_kcoa.svg"
                                    alt="Contact illustration"
                                    className="w-full max-w-md mx-auto"
                                />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </section>
        </div>
    );
}
