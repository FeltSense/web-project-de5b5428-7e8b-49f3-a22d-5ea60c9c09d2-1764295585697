'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Sparkles } from 'lucide-react';

const features = [
  'AI-powered compatibility analysis',
  'Unlimited match simulations',
  'Personality deep-dive reports',
  'Real-time chemistry scoring',
  'Priority algorithm updates',
  'Early access to new features',
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  const monthlyPrice = 29;
  const yearlyPrice = 19;
  const yearlySavings = (monthlyPrice - yearlyPrice) * 12;

  return (
    <section id="pricing" className="py-24 md:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Unlock the future of dating with AI-powered insights. One plan, endless possibilities.
          </p>
        </motion.div>

        {/* Toggle Switch */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="flex items-center justify-center gap-4 mb-12"
        >
          <span className={`text-lg font-medium transition-colors duration-300 ${!isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Monthly
          </span>
          <button
            onClick={() => setIsYearly(!isYearly)}
            className={`relative w-16 h-8 rounded-full transition-colors duration-300 ${isYearly ? 'bg-rose-500' : 'bg-slate-300'}`}
            aria-label="Toggle billing period"
          >
            <span
              className={`absolute top-1 w-6 h-6 bg-white rounded-full shadow-md transition-transform duration-300 ${isYearly ? 'translate-x-9' : 'translate-x-1'}`}
            />
          </button>
          <span className={`text-lg font-medium transition-colors duration-300 ${isYearly ? 'text-slate-900' : 'text-slate-400'}`}>
            Yearly
          </span>
          {isYearly && (
            <motion.span
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-cyan-400 text-slate-900 text-sm font-semibold px-3 py-1 rounded-full"
            >
              Save ${yearlySavings}/yr
            </motion.span>
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-lg mx-auto bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md transition-all duration-300 relative overflow-hidden"
        >
          {/* Popular Badge */}
          <div className="absolute top-0 right-0">
            <div className="bg-rose-500 text-white text-sm font-semibold px-4 py-1 rounded-bl-xl flex items-center gap-1">
              <Sparkles className="w-4 h-4" />
              Most Popular
            </div>
          </div>

          <div className="text-center mb-8 pt-4">
            <h3 className="text-xl md:text-2xl font-semibold tracking-tight leading-[1.3] text-slate-900 mb-2">
              Pro Matchmaker
            </h3>
            <p className="text-slate-500 mb-6">
              Everything you need to find your perfect match
            </p>
            <div className="flex items-baseline justify-center gap-2">
              <motion.span
                key={isYearly ? 'yearly' : 'monthly'}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-5xl md:text-6xl font-bold text-slate-900"
              >
                ${isYearly ? yearlyPrice : monthlyPrice}
              </motion.span>
              <span className="text-slate-500 text-lg">/month</span>
            </div>
            {isYearly && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-sm text-slate-500 mt-2"
              >
                Billed annually (${yearlyPrice * 12}/year)
              </motion.p>
            )}
          </div>
          
          <ul className="space-y-4 mb-8">
            {features.map((feature, index) => (
              <li key={index} className="flex items-center gap-3">
                <div className="flex-shrink-0 w-5 h-5 bg-rose-50 rounded-full flex items-center justify-center">
                  <Check className="w-3 h-3 text-rose-500" />
                </div>
                <span className="text-slate-600">{feature}</span>
              </li>
            ))}
          </ul>

          <button
            onClick={() => window.location.href = 'https://buy.stripe.com/test_cNicN778gcvQ2NZ3gV6Ri00'}
            className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Pre-Order Now - $29
          </button>
          
          <p className="text-center text-sm text-slate-400 mt-4">
            30-day money-back guarantee • Cancel anytime
          </p>
        </motion.div>
      </div>
    </section>
  </span>);
}