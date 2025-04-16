'use client'

import { Button } from '@/components/ui/button';
import { Rocket } from 'lucide-react';

export function ContactForm() {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log("Form submitted!");
    };

    return (
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
    );
}
