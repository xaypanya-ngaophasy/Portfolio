import React, { useState } from 'react';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Education } from './components/Education';
import { Gallery } from './components/Gallery';
import { Contact } from './components/Contact';
import { Navigation } from './components/Navigation';
import { motion } from 'framer-motion';

export default function App() {
  const [activeSection, setActiveSection] = useState('home');

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ backgroundColor: '#0a0a0a', color: 'white' }}>
      <Navigation activeSection={activeSection} setActiveSection={setActiveSection} />
      
      <main>
        <motion.section 
          id="home" 
          className="min-h-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Hero />
        </motion.section>
        
        <section id="about" className="min-h-screen">
          <About />
        </section>
        
        <section id="skills" className="min-h-screen">
          <Skills />
        </section>
        
        <section id="projects" className="min-h-screen">
          <Projects />
        </section>
        
        <section id="education" className="min-h-screen">
          <Education />
        </section>
        
        <section id="gallery" className="min-h-screen">
          <Gallery />
        </section>
        
        <section id="contact" className="min-h-screen">
          <Contact />
        </section>
      </main>
      
      <motion.footer 
        className="bg-slate-950/50 py-8 border-t border-slate-700"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: false }}
      >
        <div className="container mx-auto px-6 text-center text-slate-400">
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            &copy; 2026. All rights reserved.
          </motion.p>
        </div>
      </motion.footer>
    </div>
  );
}