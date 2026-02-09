import React, { useRef } from 'react';
import { GraduationCap, Award, BookOpen, Trophy, MedalIcon } from 'lucide-react';
import { motion, useInView } from 'framer-motion';

export function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const education = [
    {
      degree: 'Bachelor of Computer Science (Data Science Specialist)',
      institution: 'Albukhary International University',
      location: 'Alor Setar, Kedah, Malaysia',
      period: '2023 - Present',
      gpa: '3.3/4.0',
      focus: 'Data Analytics, AI, Machine Learning, Deep Learning, Data Visualization',
      icon: GraduationCap,
      highlights: [
        'Dean\'s List for Academic Excellence',
        'Focus on Machine Learning and Deep Learning',
        'Advanced coursework in Neural Networks and NLP',
        'Active member of AI Research Club',
      ],
    },
  ];

  const courses = [
    'Machine Learning',
    'Deep Learning',
    'Reinforcement Learning',
    'Natural Language Processing',
    'Data Structures & Algorithms',
    'Cloud Computing',
    'Computer Vision',
    'Big Data Analytics',
    'Software Engineering',
    'Database Systems',
    'Operating Systems',
  ];

  const achievements = [
    {
      title: 'Award of International gifted enrichment research & innovation seminar (Tigers) 2024',
      description: 'International Youngest Innovation Competition',
      icon: MedalIcon,
    },
    {
      title: 'Deans\'s List Award',
      description: 'Academic Excellence for multiple semesters',
      icon: BookOpen,
    },
    {
      title: 'Certification',
      description: 'Google Cloud Computing Foundations',
      icon: Award,
    },
    {
      title: 'Award of Sustainability Project Competition 2023',
      description: 'One of the Top Project of the Competition',
      icon: GraduationCap,
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -30 },
    show: { opacity: 1, x: 0 }
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
          Education & <span className="text-cyan-400">Achievements</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        {/* Education */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {education.map((edu, index) => {
            const Icon = edu.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
                whileHover={{ 
                  scale: 1.02,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 20px 40px rgba(6, 182, 212, 0.2)"
                }}
              >
                <div className="flex items-start space-x-6">
                  <motion.div 
                    className="w-16 h-16 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Icon className="text-cyan-400" size={32} />
                  </motion.div>
                  <div className="flex-1">
                    <div className="flex flex-wrap justify-between items-start mb-2">
                      <motion.div
                        initial={{ x: -20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <h3 className="text-2xl mb-1">{edu.degree}</h3>
                        <p className="text-cyan-400 text-lg">{edu.institution}</p>
                      </motion.div>
                      <motion.div 
                        className="text-right"
                        initial={{ x: 20, opacity: 0 }}
                        animate={isInView ? { x: 0, opacity: 1 } : { x: 20, opacity: 0 }}
                        transition={{ delay: 0.3 }}
                      >
                        <p className="text-slate-300">{edu.period}</p>
                        <p className="text-slate-400">{edu.location}</p>
                      </motion.div>
                    </div>
                    <motion.div 
                      className="flex flex-wrap gap-4 mb-4"
                      initial={{ opacity: 0, y: 10 }}
                      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
                      transition={{ delay: 0.4 }}
                    >
                      <motion.span 
                        className="px-4 py-2 bg-cyan-500/20 text-cyan-400 rounded-lg border border-cyan-500/30"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      >
                        {edu.focus}
                      </motion.span>
                      <motion.span 
                        className="px-4 py-2 bg-blue-500/20 text-blue-400 rounded-lg border border-blue-500/30"
                        whileHover={{ scale: 1.05, backgroundColor: "rgba(59, 130, 246, 0.3)" }}
                      >
                        GPA: {edu.gpa}
                      </motion.span>
                    </motion.div>
                    <motion.ul 
                      className="space-y-2"
                      variants={container}
                      initial="hidden"
                      animate={isInView ? "show" : "hidden"}
                    >
                      {edu.highlights.map((highlight, hIndex) => (
                        <motion.li 
                          key={hIndex} 
                          className="flex items-start text-slate-300"
                          variants={item}
                          whileHover={{ x: 10, color: "#22d3ee" }}
                        >
                          <span className="text-cyan-400 mr-2">▹</span>
                          {highlight}
                        </motion.li>
                      ))}
                    </motion.ul>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Relevant Courses */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3 className="text-2xl mb-6 text-center">Relevant Coursework</h3>
          <div className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700">
            <motion.div 
              className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
              variants={container}
              initial="hidden"
              animate={isInView ? "show" : "hidden"}
            >
              {courses.map((course, index) => (
                <motion.div
                  key={index}
                  className="px-4 py-3 bg-slate-700/50 rounded-lg text-slate-300 text-center border border-slate-600"
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: "rgba(6, 182, 212, 0.2)",
                    color: "#22d3ee",
                    borderColor: "rgba(6, 182, 212, 0.5)",
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {course}
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>

        {/* Achievements */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <h3 className="text-2xl mb-6 text-center">Achievements & Certifications</h3>
          <motion.div 
            className="grid md:grid-cols-2 gap-6"
            variants={container}
            initial="hidden"
            animate={isInView ? "show" : "hidden"}
          >
            {achievements.map((achievement, index) => {
              const Icon = achievement.icon;
              return (
                <motion.div
                  key={index}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700"
                  variants={item}
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(6, 182, 212, 0.5)",
                    boxShadow: "0 15px 30px rgba(6, 182, 212, 0.3)",
                    y: -5
                  }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div 
                      className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-cyan-400" size={24} />
                    </motion.div>
                    <div>
                      <h4 className="text-xl mb-2">{achievement.title}</h4>
                      <p className="text-slate-400">{achievement.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}