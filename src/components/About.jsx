import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="relative bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          About
        </motion.h2>

        <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <p className="text-slate-700">
              I’m a 4th‑year B.Tech IT student at SRM University, Chennai, skilled in Full Stack Development,
              UI/UX Design, and Cloud Computing. I’m passionate about crafting interactive digital experiences
              and building user‑friendly web applications that bring ideas to life.
            </p>
            <p className="mt-4 text-slate-700">
              I love working across the stack — from pixel‑perfect interfaces to scalable backend services —
              bridging design and development to ship polished, performant products.
            </p>
          </motion.div>

          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.15 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">Experience</h3>
              <ul className="mt-3 space-y-2 text-slate-700">
                <li>• EduFin — UI/UX and Frontend Intern</li>
                <li>• Retech — Full Stack Intern</li>
                <li>• TVS Electronics — Cloud & Platform Intern</li>
                <li>• Internforte — UI/UX and Product Intern</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
            >
              <h3 className="text-lg font-semibold text-slate-900">Certificates</h3>
              <ul className="mt-3 grid grid-cols-1 gap-2 text-slate-700 md:grid-cols-2">
                <li>• Coursera</li>
                <li>• Great Learning</li>
                <li>• MindLuster</li>
                <li>• Bloomberg</li>
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
