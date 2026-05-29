import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Cpu, GraduationCap } from 'lucide-react';

export default function SkillsAndEducation() {
  const { skills, education } = resumeData;

  return (
    <section id="skills" className="py-24 px-6 sm:px-12 md:px-24 bg-neutral-950/30">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        
        {/* Skills */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-emerald-500/10 rounded-xl border border-emerald-500/20">
              <Cpu className="w-6 h-6 text-emerald-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Skills</h2>
          </motion.div>

          <div className="space-y-8">
            {Object.entries(skills).map(([category, items], index) => (
              <motion.div 
                key={category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <h3 className="text-sm uppercase tracking-wider text-neutral-500 font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill, i) => (
                    <span 
                      key={i} 
                      className="px-4 py-2 rounded-full border border-neutral-800 bg-neutral-900/50 text-neutral-300 text-sm hover:border-neutral-600 hover:text-white transition-colors cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Education */}
        <div>
           <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-10"
          >
            <div className="p-3 bg-indigo-500/10 rounded-xl border border-indigo-500/20">
              <GraduationCap className="w-6 h-6 text-indigo-400" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Education</h2>
          </motion.div>

          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="p-6 rounded-2xl border border-neutral-800 bg-neutral-900/30"
              >
                <div className="flex justify-between items-start gap-4 mb-2">
                  <h3 className="text-lg font-semibold text-white">{edu.institution}</h3>
                  <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-neutral-800 text-neutral-300 shrink-0">{edu.dates}</span>
                </div>
                <p className="text-blue-400 font-medium text-sm mb-2">{edu.degree}</p>
                <p className="text-neutral-400 text-sm">{edu.score}</p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
