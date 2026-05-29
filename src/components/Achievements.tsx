import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { Trophy, Award } from 'lucide-react';

export default function Achievements() {
  const achievements = resumeData.achievements;
  const certifications = resumeData.certifications;

  return (
    <section id="achievements" className="py-24 px-6 sm:px-12 md:px-24">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-amber-500/10 rounded-xl border border-amber-500/20">
            <Trophy className="w-6 h-6 text-amber-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Achievements & Certifications</h2>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          
          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-neutral-200 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-400" /> Honors & Awards
            </h3>
            <div className="space-y-4">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 hover:bg-neutral-800/40 transition-colors"
                >
                  <h4 className="font-medium text-white mb-1 text-lg">{item.title}</h4>
                  <p className="text-sm text-neutral-400">{item.context}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
             <h3 className="text-2xl font-semibold text-neutral-200 mb-6 flex items-center gap-2">
              <Award className="w-5 h-5 text-neutral-400" /> Certifications
            </h3>
            <div className="grid gap-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="p-5 rounded-2xl border border-neutral-800 bg-neutral-900/30 flex flex-col sm:flex-row gap-4 justify-between sm:items-center hover:bg-neutral-800/40 transition-colors"
                >
                  <div>
                    <h4 className="font-medium text-white text-base">{cert.title}</h4>
                    {cert.context && cert.context !== "LinkedIn PDF" && (
                      <p className="text-sm text-neutral-400 mt-2 line-clamp-2">{cert.context}</p>
                    )}
                  </div>
                  {cert.date && (
                    <span className="text-xs font-medium px-3 py-1 rounded-full bg-neutral-800 text-neutral-300 whitespace-nowrap shrink-0">{cert.date}</span>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
