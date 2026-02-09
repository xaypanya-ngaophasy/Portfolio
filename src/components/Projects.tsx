import React, { useRef } from 'react';
import { Github, ExternalLink, Brain, Image, MessageSquare, LineChart } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion, useInView } from 'framer-motion';

export function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const projects = [
    {
      title: 'Stock Price Prediction App',
      description: 'Created a machine learning model using LSTM networks to predict stock prices. Features include technical indicator analysis with interactive inputs for Previous Close Price, 5-Day Moving Average, 10-Day Moving Average, and Volume.',
      image: '/stock-prediction-app.png',
      icon: LineChart,
      tags: ['LSTM', 'TensorFlow', 'Time Series', 'Streamlit'],
      github: 'https://github.com/xaypanya-ngaophasy/stock-price-ML',
      demo: 'https://stock-price-ml-wojzkhpu7dknnvnejv7t9w.streamlit.app/',
    },
    {
      title: 'Shopee Review Sentiment Predictor',
      description: 'Developed an NLP-powered sentiment analysis tool that predicts positive or negative sentiment from Shopee product reviews. Features include review text input, thumbs up count, and multi-language support for accurate sentiment classification.',
      image: '/shopee-sentiment-app.png',
      icon: MessageSquare,
      tags: ['NLP', 'Sentiment Analysis', 'Streamlit', 'Machine Learning'],
      github: 'https://github.com/xaypanya-ngaophasy/Shopee_Sentiment_Analysis_NLP',
      demo: 'https://shopeesentimentanalysisnlp-msxcggeso5k69xpiolhwdk.streamlit.app/',
    },
    {
      title: 'Handwriting Writer Recognition',
      description: 'AI-powered application that analyzes handwriting samples and predicts the writer. Upload a handwriting image and the model uses deep learning to identify unique writing patterns and characteristics.',
      image: '/handwriting-recognition-app.png',
      icon: Brain,
      tags: ['Deep Learning', 'CNN', 'Image Recognition', 'Streamlit'],
      github: 'https://github.com/xaypanya-ngaophasy/Handwritten_Recognition',
      demo: 'https://handwrittenrecognition-f84tzvjhhkc9p3w3n7gbui.streamlit.app/',
    },
    {
      title: 'IoT Home Alarm System',
      description: 'ESP32-based smart home security system with real-time environmental monitoring. Features DHT22 temperature/humidity sensor, motion detection, LCD display, servo-controlled door lock, and Blynk IoT cloud integration for remote monitoring.',
      image: '/iot-alarm-system.png',
      icon: Brain,
      tags: ['ESP32', 'IoT', 'Blynk', 'Arduino', 'Sensors'],
      demo: 'https://wokwi.com/projects/455469621269853185',
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

  const projectVariant = {
    hidden: { opacity: 0, y: 60, rotateX: -20 },
    show: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      transition: { duration: 0.6, type: "spring" }
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
          Featured <span className="text-cyan-400">Projects</span>
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
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-xl border border-slate-700 overflow-hidden group cursor-pointer"
                variants={projectVariant}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  borderColor: "rgba(6, 182, 212, 0.5)",
                  boxShadow: "0 25px 50px rgba(6, 182, 212, 0.3)"
                }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative h-48 overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent"></div>
                  <motion.div 
                    className="absolute bottom-4 left-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-cyan-500/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-cyan-500/30"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <Icon className="text-cyan-400" size={24} />
                    </motion.div>
                  </motion.div>
                </div>

                <div className="p-6">
                  <motion.h3 
                    className="text-2xl mb-3"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {project.title}
                  </motion.h3>
                  <motion.p 
                    className="text-slate-400 mb-4"
                    initial={{ x: -20, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {project.description}
                  </motion.p>

                  <motion.div 
                    className="flex flex-wrap gap-2 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {project.tags.map((tag, tagIndex) => (
                      <motion.span
                        key={tagIndex}
                        className="px-3 py-1 bg-cyan-500/20 text-cyan-400 rounded-full text-sm border border-cyan-500/30"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.4 + tagIndex * 0.05, type: "spring" }}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(6, 182, 212, 0.3)" }}
                      >
                        {tag}
                      </motion.span>
                    ))}
                  </motion.div>

                  <motion.div 
                    className="flex space-x-4"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ delay: 0.4 }}
                  >
                    {project.github && (
                      <motion.a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                        whileHover={{ scale: 1.1, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <Github size={20} />
                        <span>Code</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-slate-300 hover:text-cyan-400 transition-colors"
                      whileHover={{ scale: 1.1, x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <ExternalLink size={20} />
                      <span>Demo</span>
                    </motion.a>
                  </motion.div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div 
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.6 }}
        >
          <motion.a
            href="https://github.com/xaypanya-ngaophasy"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 rounded-lg transition-all"
            whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(6, 182, 212, 0.4)" }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={20} />
            <span>View All Projects on GitHub</span>
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}