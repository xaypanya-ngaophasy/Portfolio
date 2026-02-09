import React, { useRef } from 'react';
import { Brain, Code, Rocket, Award } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'framer-motion';

export function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.3 });

  const highlights = [
    {
      icon: Brain,
      title: 'AI Focused',
      description: 'Specializing in machine learning, deep learning, AI',
    },
    {
      icon: Code,
      title: 'Full Stack',
      description: 'Proficient in building complete AI-powered applications',
    },
    {
      icon: Rocket,
      title: 'Fast Learner',
      description: 'Quick to adapt to new technologies and frameworks',
    },
    {
      icon: Award,
      title: 'Problem Solver',
      description: 'Passionate about tackling complex computational challenges',
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, y: 40 },
    show: { opacity: 1, y: 0 }
  };

  return (
    <div className="container mx-auto px-6 py-20" ref={ref}>
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -100, rotateY: -30 }}
            animate={isInView ? { opacity: 1, x: 0, rotateY: 0 } : { opacity: 0, x: -100, rotateY: -30 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            whileHover={{ scale: 1.05, rotateY: 5 }}
          >
            <ImageWithFallback
              src="/profile1.jpg"
              alt="Profile Photo"
              className="rounded-2xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>

          <motion.div 
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {[
              "A final-year Computer Science undergraduate with a strong passion for Artificial Intelligence and Machine Learning. Currently pursuing my degree with a focus on the AI track, constantly exploring new ways to leverage technology to solve real-world problems.",
              "My journey in computer science has been driven by curiosity and a desire to understand how intelligent systems work. From developing neural networks to creating innovative ML models, committed to pushing the boundaries of what's possible with AI.",
              "Contributing to open-source AI projects. Believing in continuous learning and staying updated with the latest advancements in the field."
            ].map((text, index) => (
              <motion.p 
                key={index}
                className="text-lg text-slate-300"
                variants={item}
              >
                {text}
              </motion.p>
            ))}
          </motion.div>
        </div>

        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700 hover:border-cyan-500/50 transition-all"
                variants={item}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <motion.div 
                  className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <Icon className="text-cyan-400" size={24} />
                </motion.div>
                <h3 className="text-xl mb-2">{highlight.title}</h3>
                <p className="text-slate-400">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
}