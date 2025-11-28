'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

const testimonials = [
  {
    name: 'Jessica Chen',
    role: 'Product Manager',
    company: 'TechFlow',
    companyLogo: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=120&h=40&fit=crop&auto=format',
    quote: 'AI Matchmaker Simulator completely changed how I approach dating. The AI insights helped me understand my preferences better than years of swiping ever did.',
    avatar: 'https://i.pravatar.cc/150?img=5',
  },
  {
    name: 'Marcus Williams',
    role: 'Software Engineer',
    company: 'DataSync',
    companyLogo: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=120&h=40&fit=crop&auto=format',
    quote: 'Finally, a dating tool that uses AI intelligently. The match simulations were scarily accurate—I met my partner within 3 weeks of using the platform.',
    avatar: 'https://i.pravatar.cc/150?img=12',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'BrandLab',
    companyLogo: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=120&h=40&fit=crop&auto=format',
    quote: 'The simulator predicted our compatibility at 94%. Two years later, we\'re engaged. This isn\'t just an app—it\'s relationship technology that actually works.',
    avatar: 'https://i.pravatar.cc/150?img=9',
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 bg-rose-50 text-rose-500 font-semibold text-sm rounded-full mb-6">
            Success Stories
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-[1.2] text-slate-900 mb-6">
            Real Connections, Real Results
          </h2>
          <p className="text-lg text-slate-500 max-w-2xl mx-auto">
            Thousands have found meaningful relationships through our AI-powered matching. Here's what they have to say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-sm border border-slate-100 p-8 hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col"
            >
              {/* Company Logo */}
              <div className="h-8 mb-6 flex items-center">
                <span className="text-slate-400 font-semibold text-sm tracking-wider uppercase">
                  {testimonial.company}
                </span>
              </div>

              {/* Star Rating */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-rose-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Quote */}
              <blockquote className="text-slate-600 text-lg leading-relaxed flex-grow mb-8">
                "{testimonial.quote}"
              </blockquote>

              {/* Person Info */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <div className="relative w-12 h-12 rounded-full overflow-hidden ring-2 ring-rose-100">
                  <Image
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="font-semibold text-slate-900">{testimonial.name}</p>
                  <p className="text-sm text-slate-500">{testimonial.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <p className="text-slate-500 mb-4">Trusted by singles at leading companies</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            <span className="text-slate-400 font-semibold tracking-wider">GOOGLE</span>
            <span className="text-slate-400 font-semibold tracking-wider">META</span>
            <span className="text-slate-400 font-semibold tracking-wider">APPLE</span>
            <span className="text-slate-400 font-semibold tracking-wider">NETFLIX</span>
            <span className="text-slate-400 font-semibold tracking-wider">SPOTIFY</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}