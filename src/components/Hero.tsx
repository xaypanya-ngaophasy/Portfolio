import React, { useEffect, useState } from 'react';
import { Github, Linkedin, Mail, ChevronDown } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  
  // Transform scroll position to animation values
  const y = useTransform(scrollY, [0, 500], [0, 150]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);
  const scale = useTransform(scrollY, [0, 300], [1, 0.8]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen" style={{ backgroundColor: '#0a0a0a', color: 'white' }}>
      <motion.div 
        className="container mx-auto px-6 py-20"
        style={{ y, opacity, scale }}
      >
        <div className="max-w-4xl mx-auto text-left">
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 leading-tight"
            style={{ color: 'white' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            I'm Xaypanya Ngaophasy
          </motion.h1>

          <motion.h2 
            className="text-5xl md:text-7xl font-bold mb-8"
            style={{ color: 'white' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            Data Analyst & Data Scientist
          </motion.h2>

          <motion.p 
            className="text-lg md:text-xl mb-12 max-w-3xl leading-relaxed"
            style={{ color: '#d1d5db' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            Solving real world problem that is impactful solutions to the society. Passionating about converting ideas into real products that make a difference. Explore my work and discover how I can help bring ideas to life.
          </motion.p>



          <motion.div 
            className="mt-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-sm mb-4" style={{ color: '#9ca3af' }}>Featured work</p>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="transition-colors flex items-center gap-2"
              style={{ color: 'white', background: 'transparent', border: 'none', cursor: 'pointer', fontSize: '16px' }}
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              whileHover={{ scale: 1.1 }}
            >
              <span>Scroll</span>
              <ChevronDown size={24} />
            </motion.button>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}