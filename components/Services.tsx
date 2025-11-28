'use client';

import { motion } from 'framer-motion';
import { Brain, Heart, Sparkles, Shield } from 'lucide-react';

const services = [
  {
    icon: Brain,
    title: 'AI Compatibility',
    description: 'Advanced algorithms analyze personality traits for perfect matches',
  },
  {
    icon: Heart,
    title: 'Smart Matching',
    description: 'Find connections based on values, interests, and chemistry',
  },
  {
    icon: Sparkles,
    title: 'Conversation Starters',
    description: 'AI-powered icebreakers that spark meaningful conversations',
  },
  {
    icon: Shield,
    title: 'Safe & Verified',
    description: 'Every profile verified with advanced security protocols',
  },
];

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Powered by Next-Gen AI
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Our intelligent matchmaking technology learns what you truly want in a partner
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex flex-col items-center text-center group"
            >
              <div className="w-20 h-20 rounded-full bg-rose-50 flex items-center justify-center mb-4 group-hover:bg-rose-100 transition-all duration-300 group-hover:scale-110">
                <service.icon className="w-10 h-10 text-rose-500" />
              </div>
              <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">{service.title}</h3>
              <p className="text-sm text-slate-500">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
