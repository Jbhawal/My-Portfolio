import React from 'react';
import { motion } from 'motion/react';
import { Github, Linkedin, Mail, Download, ArrowDown } from 'lucide-react';
import { resumeData } from '../data';

export default function Hero() {
  const { name, title, summary, email, links } = resumeData.basics;

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-20 pb-10 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl w-full text-center sm:text-left flex flex-col sm:flex-row items-center sm:items-start gap-8 z-10">
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-32 h-32 md:w-48 md:h-48 rounded-full border border-neutral-800 bg-neutral-900/50 backdrop-blur-md flex items-center justify-center overflow-hidden shrink-0 shadow-[0_0_40px_rgba(100,150,255,0.1)] relative"
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-transparent" />
          <span className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-white to-neutral-500">
            {name.split(' ').map(n => n[0]).join('')}
          </span>
        </motion.div>

        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white mb-2">
              {name}
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-blue-400/90 tracking-wide">
              {title}
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-neutral-400 text-sm md:text-base leading-relaxed max-w-2xl"
          >
            {summary}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-wrap items-center justify-center sm:justify-start gap-4"
          >
            <a 
              href="#experience"
              className="px-6 py-3 rounded-full bg-white text-black font-semibold text-sm transition-transform hover:scale-105 hover:bg-neutral-200"
            >
              View Experience
            </a>
            <a 
              href="#"
              onClick={(e) => { e.preventDefault(); alert("Resume PDF generation would be triggered here.") }}
              className="px-6 py-3 rounded-full border border-neutral-700 bg-neutral-900/50 text-white font-medium text-sm transition-all hover:bg-neutral-800 flex items-center gap-2"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="flex items-center justify-center sm:justify-start gap-5 pt-4"
          >
            <a href={links.GitHub} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href={links.LinkedIn} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href={`mailto:${email}`} className="text-neutral-500 hover:text-white transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </motion.div>

        </div>
      </div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 animate-bounce"
      >
        <ArrowDown className="w-6 h-6 text-neutral-500" />
      </motion.div>
    </section>
  );
}
