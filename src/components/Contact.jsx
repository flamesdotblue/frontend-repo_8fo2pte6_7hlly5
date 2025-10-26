import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Github, Behance, Mail } from 'lucide-react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent('Portfolio Contact');
    const body = encodeURIComponent(`Hi Krishna,\n\n${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:krishna.rv@example.com?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="bg-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6 }}
          className="text-2xl font-bold tracking-tight text-slate-900 md:text-3xl"
        >
          Contact
        </motion.h2>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Name</label>
                <input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-0 transition focus:border-blue-400"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-0 transition focus:border-blue-400"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1 block text-sm font-medium text-slate-700">Message</label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  required
                  rows={5}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-2 outline-none ring-0 transition focus:border-blue-400"
                  placeholder="Tell me about your project..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="mt-4 inline-flex items-center justify-center rounded-full bg-gradient-to-r from-blue-600 to-violet-600 px-5 py-2.5 font-medium text-white shadow-lg shadow-blue-600/20 transition hover:shadow-violet-600/30"
            >
              <Mail className="mr-2 h-4 w-4" /> Send Message
            </button>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="flex flex-col justify-between rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200"
          >
            <div>
              <h3 className="text-lg font-semibold text-slate-900">Let’s connect</h3>
              <p className="mt-2 text-slate-600">
                I’m available for internships, freelance projects, and collaborations. Reach out and
                let’s build something great.
              </p>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
              <a
                href="https://github.com/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
              <a
                href="https://www.behance.net/"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-slate-50 px-4 py-2 text-slate-700 ring-1 ring-slate-200 transition hover:bg-slate-100"
              >
                <Behance className="h-4 w-4" /> Behance
              </a>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 border-t border-slate-200 pt-6 text-center text-sm text-slate-500">
          © {new Date().getFullYear()} Krishna Rv. All rights reserved.
        </div>
      </div>
    </section>
  );
}
