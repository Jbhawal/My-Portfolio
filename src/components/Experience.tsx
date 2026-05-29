import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Briefcase } from 'lucide-react';

export default function Experience() {
  const experiences = resumeData.experience;

  return (
    <section id="experience" className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20">
            <Briefcase className="w-6 h-6 text-blue-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Experience</h2>
        </motion.div>

        <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-neutral-800 before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1 }}
              className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-[0_0_0_4px_#050505] z-10">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>

              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm hover:bg-neutral-800/50 transition-colors shadow-lg">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                  <h3 className="font-semibold text-lg text-white">{exp.role}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 w-fit">{exp.dates}</span>
                </div>
                <div className="text-blue-400 text-sm font-medium mb-4">{exp.company} {exp.location && `• ${exp.location}`}</div>
                
                {exp.bullets.length > 0 && (
                  <ul className="space-y-2 text-sm text-neutral-400 list-disc list-outside ml-4">
                    {exp.bullets.map((bullet, i) => (
                      <li key={i}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
