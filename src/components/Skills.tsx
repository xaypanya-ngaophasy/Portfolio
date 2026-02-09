import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

export function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const skillCategories = [
    {
      title: 'AI & Machine Learning',
      skills: [
        { name: 'Python'},
        { name: 'TensorFlow'},
        { name: 'PyTorch'},
        { name: 'Scikit-learn'},
        { name: 'Keras'},
        { name: 'Natural Language Processing'},
        { name: 'Deep Learning'},
        { name: 'Data Analysis & Visualization'},
        { name: 'Data Mining'}
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python'},
        { name: 'JavaScript/TypeScript'},
        { name: 'Java'},
        { name: 'C'},
        { name: 'SQL'},
        { name: 'R'},
        { name: 'C++'}

      ],
    },
    {
      title: 'Web Development',
      skills: [
        { name: 'React'},
        { name: 'Node.js'},
        { name: 'HTML/CSS'},
        { name: 'Firebase'},
        { name: 'PHP'},
        { name: 'MySQL'}
      ],
    },
    {
      title: 'Tools & Technologies',
      skills: [
        { name: 'Git & GitHub'},
        { name: 'Jupyter Notebooks'},
        { name: 'MongoDB'},
        { name: 'GCP'},
        { name: 'Wokwi'},
        { name: 'Power BI'},
        { name: 'Visual Studio Code'},
        { name: 'Blynk'},
        { name: 'Google Colab'},
        { name: 'Firebase'},
        { name: 'MQTTX'},
        { name: 'Streamlit'},
        { name: 'IoT Development'}
      ],
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const categoryVariant = {
    hidden: { opacity: 0, scale: 0.8, rotateX: -30 },
    show: { 
      opacity: 1, 
      scale: 1, 
      rotateX: 0,
      transition: { duration: 0.6 }
    }
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
          Technical <span className="text-cyan-400">Skills</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />

        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          variants={container}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
        >
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={categoryIndex}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-xl border border-slate-700"
              variants={categoryVariant}
              whileHover={{ 
                scale: 1.02, 
                borderColor: "rgba(6, 182, 212, 0.5)",
                boxShadow: "0 10px 30px rgba(6, 182, 212, 0.2)"
              }}
            >
              <motion.h3 
                className="text-2xl mb-6 text-cyan-400"
                initial={{ x: -20, opacity: 0 }}
                animate={isInView ? { x: 0, opacity: 1 } : { x: -20, opacity: 0 }}
                transition={{ delay: categoryIndex * 0.1 + 0.3 }}
              >
                {category.title}
              </motion.h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div 
                    key={skillIndex}
                    initial={{ opacity: 0, x: -30 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 + 0.5 }}
                  >
                    <motion.span 
                      className="text-slate-300 block mb-3"
                      whileHover={{ x: 5, color: "#22d3ee" }}
                    >
                      {skill.name}
                    </motion.span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8 }}
        >
          <p className="text-slate-400 text-lg">
            Continuously learning and expanding my skill set to stay at the forefront of AI technology
          </p>
        </motion.div>
      </div>
    </div>
  );
}