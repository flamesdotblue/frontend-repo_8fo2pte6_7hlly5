import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const navItems = [
  { label: 'About', target: 'about' },
  { label: 'Projects', target: 'projects' },
  { label: 'Contact', target: 'contact' },
];

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[90vh] w-full overflow-hidden bg-white">
      {/* Spline scene as interactive background object */}
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/VJLoxp84lCdVfdZu/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Soft gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/80 via-white/60 to-white/90" />

      {/* Top navigation */}
      <div className="relative z-10">
        <header className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-blue-500 to-violet-500 shadow-sm" />
            <span className="font-semibold tracking-tight text-slate-800">Krishna Rv</span>
          </div>
          <nav className="hidden gap-2 sm:flex">
            {navItems.map((item) => (
              <button
                key={item.target}
                onClick={() => scrollToId(item.target)}
                className="rounded-full px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-100"
              >
                {item.label}
              </button>
            ))}
          </nav>
        </header>
      </div>

      {/* Hero content */}
      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-6 py-8 md:grid-cols-2 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="order-2 md:order-1"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200">
            Chennai • Full Stack Developer • UI/UX Designer
          </div>
          <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 md:text-5xl">
            Hi, I’m Krishna Rv
          </h1>
          <p className="mt-3 text-lg font-medium text-slate-600">Bridging Design and Development.</p>
          <p className="mt-4 max-w-xl text-slate-600">
            I craft interactive digital experiences and user‑friendly web apps that balance
            aesthetics with performance.
          </p>
          <div className="mt-6 flex flex-wrap items-center gap-3">
            <button
              onClick={() => scrollToId('projects')}
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 text-white shadow-lg shadow-blue-600/20 transition hover:shadow-violet-600/30"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </button>
            <button
              onClick={() => scrollToId('contact')}
              className="rounded-full bg-white/80 px-5 py-2.5 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-50"
            >
              Get in touch
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
          className="order-1 flex justify-center md:order-2"
        >
          <div className="relative">
            <img
              src="https://ui-avatars.com/api/?name=Krishna+Rv&background=0D8ABC&color=fff&size=256&rounded=true"
              alt="Krishna Rv portrait"
              className="h-40 w-40 rounded-2xl border border-white/60 shadow-xl md:h-48 md:w-48"
            />
            <div className="absolute -right-3 -top-3 h-16 w-16 rounded-2xl bg-gradient-to-br from-blue-500 to-violet-500 opacity-20 blur-2xl" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
