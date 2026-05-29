import React from 'react';
import { motion } from 'motion/react';
import { resumeData } from '../data';
import { FolderGit2, ExternalLink } from 'lucide-react';

export default function Projects() {
  const projects = resumeData.projects;

  return (
    <section id="projects" className="py-24 px-6 sm:px-12 md:px-24 bg-neutral-950/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex items-center gap-4 mb-12"
        >
          <div className="p-3 bg-purple-500/10 rounded-xl border border-purple-500/20">
            <FolderGit2 className="w-6 h-6 text-purple-400" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white">Projects</h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group flex flex-col justify-between p-8 rounded-3xl border border-neutral-800 bg-neutral-900/40 backdrop-blur-sm hover:border-neutral-600 transition-all hover:-translate-y-1 h-full"
            >
              <div>
                <div className="flex justify-between items-start mb-6">
                  <div className="w-12 h-12 rounded-full bg-neutral-800 flex items-center justify-center">
                    <FolderGit2 className="w-5 h-5 text-neutral-400 group-hover:text-purple-400 transition-colors" />
                  </div>
                  {project.links?.[0] && (
                    <a href={project.links[0]} target="_blank" rel="noreferrer" className="text-neutral-500 hover:text-white p-2">
                      <ExternalLink className="w-5 h-5" />
                    </a>
                  )}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-300 transition-colors">{project.title}</h3>
                <div className="mb-6">
                  <ul className="space-y-2 text-sm text-neutral-400">
                    {project.bullets.map((bullet, i) => (
                      <li key={i} className="line-clamp-3 relative pl-4 before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:bg-neutral-600 before:rounded-full">{bullet}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="mt-auto pt-6 border-t border-neutral-800/50">
                <div className="flex flex-wrap gap-2">
                  {project.stack.split(',').map((tech, i) => (
                    <span key={i} className="text-xs font-medium px-2.5 py-1 rounded-md bg-neutral-800 text-neutral-300">
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
