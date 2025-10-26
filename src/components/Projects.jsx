import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Mysore Cultural Capital',
    image:
      'https://images.unsplash.com/photo-1604357209793-fca5dca89f10?q=80&w=1200&auto=format&fit=crop',
    desc:
      'An immersive web experience celebrating Mysore’s heritage, culture, and architecture with interactive storytelling.',
    stack: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: 'MEGAMING',
    image:
      'https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=1200&auto=format&fit=crop',
    desc:
      'A modern gaming portal with curated content, player profiles, and sleek UI for an engaging discovery experience.',
    stack: ['Next.js', 'TypeScript', 'Vercel'],
  },
  {
    title: 'Audio-Enhanced CNN Framework',
    image:
      'https://images.unsplash.com/photo-1547483238-2cbf1f5f7f79?q=80&w=1200&auto=format&fit=crop',
    desc:
      'A research‑driven framework that augments CNN models with audio features for improved classification accuracy.',
    stack: ['Python', 'TensorFlow', 'Librosa'],
  },
  {
    title: 'Text-to-Braille Device',
    image:
      'https://images.unsplash.com/photo-1581092921461-eab62e97a780?q=80&w=1200&auto=format&fit=crop',
    desc:
      'Assistive hardware prototype translating printed text into tactile Braille output for accessibility.',
    stack: ['Arduino', 'C++', '3D Printing'],
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          Projects
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((p, idx) => (
            <motion.article
              key={p.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.05 * idx }}
              className="group overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-slate-200"
            >
              <div className="relative aspect-[16/9] overflow-hidden">
                <img
                  src={p.image}
                  alt={`${p.title} preview`}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70 via-transparent" />
              </div>
              <div className="p-5">
                <h3 className="text-lg font-semibold text-slate-900">{p.title}</h3>
                <p className="mt-2 text-sm text-slate-600">{p.desc}</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {p.stack.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg-slate-50 px-3 py-1 text-xs font-medium text-slate-600 ring-1 ring-slate-200"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
