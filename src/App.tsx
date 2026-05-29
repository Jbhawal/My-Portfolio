import React from 'react';
import AnimatedBackground from './components/AnimatedBackground';
import Hero from './components/Hero';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import SkillsAndEducation from './components/SkillsAndEducation';

export default function App() {
  return (
    <div className="min-h-screen bg-transparent text-neutral-200 font-sans selection:bg-blue-500/30 selection:text-white">
      <AnimatedBackground />
      
      {/* Navigation Spy / simple header can go here if needed */}
      <nav className="fixed top-0 left-0 right-0 p-6 flex justify-center z-50 pointer-events-none">
        <div className="bg-neutral-900/80 backdrop-blur-md border border-neutral-800 rounded-full px-6 py-3 flex gap-6 text-sm font-medium pointer-events-auto shadow-2xl">
          <a href="#" className="hover:text-white transition-colors">Home</a>
          <a href="#experience" className="hover:text-white transition-colors">Experience</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#achievements" className="hover:text-white transition-colors text-neutral-400">Awards</a>
        </div>
      </nav>

      <main className="relative z-10 w-full overflow-hidden pb-20">
        <Hero />
        <Experience />
        <Projects />
        <SkillsAndEducation />
        <Achievements />
      </main>
      
      <footer className="relative z-10 py-8 text-center text-sm text-neutral-500 border-t border-neutral-800/50">
        <p>© {new Date().getFullYear()} Joyita Bhawal. All rights reserved.</p>
      </footer>
    </div>
  );
}

