'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { Heart, Sparkles, Users, TrendingUp } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative bg-slate-950 pt-32 pb-24 md:pb-32 overflow-hidden min-h-screen flex items-center">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-950/50 to-slate-950" />
      </div>
      
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 bg-rose-500/10 border border-rose-500/20 rounded-full px-4 py-2 mb-8">
              <Sparkles className="w-4 h-4 text-rose-500" />
              <span className="text-rose-400 text-sm font-medium">AI-Powered Dating Intelligence</span>
            </div>
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.1] text-white mb-6">
              Find Your Perfect
              <span className="text-rose-500"> Match</span> with AI
            </h1>
            <p className="text-xl text-slate-400 mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Our intelligent algorithm analyzes compatibility, predicts chemistry, and connects you with people who truly get you. Love, optimized.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a href="#contact" className="bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md inline-flex items-center justify-center gap-2">
                <Heart className="w-5 h-5" />
                Start Matching Free
              </a>
              <a href="#services" className="border-2 border-slate-700 text-white hover:bg-slate-800 font-semibold rounded-xl px-8 py-4 transition-all duration-300 inline-flex items-center justify-center">
                See How It Works
              </a>
            </div>
            
            {/* Stats */}
            <div className="flex gap-8 mt-12 justify-center lg:justify-start">
              <div>
                <p className="text-3xl font-bold text-white">2.4M+</p>
                <p className="text-slate-500 text-sm">Active Users</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">89%</p>
                <p className="text-slate-500 text-sm">Match Success</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-white">150K</p>
                <p className="text-slate-500 text-sm">Couples Formed</p>
              </div>
            </div>
          </motion.div>
          
          {/* Dashboard Preview */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative">
              {/* Main Dashboard Card */}
              <div className="bg-slate-900/80 backdrop-blur-sm rounded-2xl border border-slate-800 p-6 shadow-2xl">
                {/* Dashboard Header */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-rose-500 rounded-full flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-semibold">Your Matches</p>
                      <p className="text-slate-500 text-sm">12 new today</p>
                    </div>
                  </div>
                  <span className="bg-cyan-400/20 text-cyan-400 text-xs font-medium px-3 py-1 rounded-full">Live</span>
                </div>
                
                {/* Match Cards */}
                <div className="space-y-4">
                  {[
                    { name: 'Sarah M.', match: 94, interests: 'Photography, Travel', image: 'https://i.pravatar.cc/80?img=1' },
                    { name: 'Emma K.', match: 91, interests: 'Music, Cooking', image: 'https://i.pravatar.cc/80?img=5' },
                    { name: 'Jessica R.', match: 88, interests: 'Hiking, Art', image: 'https://i.pravatar.cc/80?img=9' },
                  ].map((person, index) => (
                    <motion.div
                      key={person.name}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                      className="bg-slate-800/50 rounded-xl p-4 flex items-center gap-4 hover:bg-slate-800 transition-colors duration-300"
                    >
                      <Image
                        src={person.image}
                        alt={person.name}
                        width={48}
                        height={48}
                        className="rounded-full object-cover"
                      />
                      <div className="flex-1">
                        <p className="text-white font-medium">{person.name}</p>
                        <p className="text-slate-500 text-sm">{person.interests}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-rose-500 font-bold">{person.match}%</p>
                        <p className="text-slate-500 text-xs">match</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
                
                {/* Compatibility Chart */}
                <div className="mt-6 pt-6 border-t border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-white font-medium">Compatibility Factors</p>
                    <TrendingUp className="w-4 h-4 text-cyan-400" />
                  </div>
                  <div className="space-y-3">
                    {[
                      { label: 'Values', value: 92 },
                      { label: 'Lifestyle', value: 87 },
                      { label: 'Interests', value: 78 },
                    ].map((factor) => (
                      <div key={factor.label}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-slate-400">{factor.label}</span>
                          <span className="text-white">{factor.value}%</span>
                        </div>
                        <div className="h-2 bg-slate-800 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${factor.value}%` }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="h-full bg-rose-500 rounded-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-4 -right-4 bg-cyan-400 rounded-xl p-4 shadow-lg"
              >
                <Users className="w-6 h-6 text-slate-900" />
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute -bottom-4 -left-4 bg-white rounded-xl p-4 shadow-lg"
              >
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-rose-500" />
                  <span className="text-slate-900 font-semibold text-sm">AI Active</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  </div></div></div>);
}