'use client';

import Link from 'next/link';
import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const footerLinks = {
  company: [
    { name: 'About', href: '#' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
  ],
  support: [
    { name: 'Contact', href: '#contact' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'FAQ', href: '#' },
  ],
  legal: [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
  ],
};

const socialLinks = [
  { name: 'Twitter', href: '#', icon: Twitter },
  { name: 'Instagram', href: '#', icon: Instagram },
  { name: 'LinkedIn', href: '#', icon: Linkedin },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Section with CTA */}
        <div className="text-center pb-16 border-b border-slate-800">
          <div className="inline-flex items-center gap-2 bg-rose-500/10 rounded-full px-4 py-2 mb-6">
            <Heart className="w-4 h-4 text-rose-500" />
            <span className="text-rose-500 text-sm font-medium">Start Your Journey</span>
          </div>
          <h3 className="text-3xl md:text-4xl font-bold tracking-tight leading-[1.1] text-white mb-4">
            Ready to Find Your Perfect Match?
          </h3>
          <p className="text-slate-500 text-lg max-w-xl mx-auto mb-8">
            Let our AI analyze your preferences and connect you with compatible matches.
          </p>
          <a
            href="#contact"
            className="inline-flex bg-rose-500 hover:bg-rose-600 text-white font-semibold rounded-xl px-8 py-4 transition-all duration-300 shadow-sm hover:shadow-md"
          >
            Get Started Free
          </a>
        </div>

        {/* Main Footer Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-16">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="text-2xl font-bold text-white tracking-tight">
              AI Matchmaker Simulator
            </Link>
            <p className="text-slate-500 mt-4 leading-relaxed">
              Where AI meets romance. Discover meaningful connections powered by intelligent matching.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 rounded-xl bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-rose-500 hover:text-white transition-all duration-300"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Company Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Company</h4>
            {footerLinks.company.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Support Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Support</h4>
            {footerLinks.support.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Legal Links */}
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-semibold tracking-tight">Legal</h4>
            {footerLinks.legal.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-slate-500 hover:text-rose-500 transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-sm">
            &copy; {new Date().getFullYear()} AI Matchmaker Simulator. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-slate-500 text-sm">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-rose-500 fill-rose-500" />
            <span>for finding love</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
