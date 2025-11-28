'use client';

import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, Heart, Sparkles } from 'lucide-react';

export default function ContactForm() {
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('loading');
    
    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      phone: formData.get('phone'),
    };

    try {
      const response = await fetch('https://deep-api-server-2moiw.kinsta.app/api/form_submissions', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          form_id: 'contact_form',
          form_data: data,
          project_id: 'de5b5428-7e8b-49f3-a22d-5ea60c9c09d2',
          founder_id: '50b19c62-f89d-4065-9cbe-55ab8d1958cc',
        }),
      });

      if (response.ok) {
        setStatus('success');
        e.currentTarget.reset();
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-slate-900 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 opacity-10">
        <Heart className="w-24 h-24 text-rose-500" />
      </div>
      <div className="absolute bottom-20 right-10 opacity-10">
        <Sparkles className="w-20 h-20 text-cyan-400" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="inline-flex items-center gap-2 text-rose-500 font-semibold text-sm uppercase tracking-wider mb-4">
            <Heart className="w-4 h-4" />
            Start Your Journey
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-white mb-6">
            Ready to Find Your Perfect Match?
          </h2>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto">
            Join thousands discovering meaningful connections through AI-powered matching. Sign up for early access today.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-xl mx-auto"
        >
          {status === 'success' ? (
            <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-12 text-center">
              <div className="w-16 h-16 bg-rose-50 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle className="w-8 h-8 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-3">You're on the List!</h3>
              <p className="text-slate-500">Get ready to experience AI-powered matchmaking. We'll reach out with exclusive early access soon.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 md:p-10 space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="block text-sm font-semibold text-slate-900">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="Your name" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="email" className="block text-sm font-semibold text-slate-900">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="you@example.com" 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="phone" className="block text-sm font-semibold text-slate-900">Phone <span className="text-slate-400 font-normal">(optional)</span></label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  className="w-full rounded-xl border border-slate-200 focus:ring-2 py-4 px-5 focus:border-rose-500 focus:ring-rose-500 focus:outline-none transition-all duration-300 text-slate-900 placeholder:text-slate-400" 
                  placeholder="+1 (555) 000-0000" 
                />
              </div>
              <button 
                type="submit" 
                disabled={status === 'loading'} 
                className="w-full bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {status === 'loading' ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    Get Early Access
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>
              {status === 'error' && (
                <p className="text-red-500 text-sm text-center">Something went wrong. Please try again.</p>
              )}
              <p className="text-xs text-slate-400 text-center">
                By signing up, you agree to receive updates about AI Matchmaker Simulator. No spam, ever.
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  </div>);
}