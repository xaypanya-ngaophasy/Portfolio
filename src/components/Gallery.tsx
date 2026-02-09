import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Gallery() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false, amount: 0.2 });

  const images = [
    {
      src: '/gallery-1.jpg',
      alt: 'Professional photo',
    },
    {
      src: '/gallery-2.jpg',
      alt: 'Tech event presentation',
    },
    {
      src: '/gallery-3.jpg',
      alt: 'Professional moment',
    },
    {
      src: '/gallery-5.jpg',
      alt: 'Behind the scenes',
    },
    {
      src: '/gallery-6.jpg',
      alt: 'Work environment',
    },
  ];

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...images, ...images];

  return (
    <div className="py-20 overflow-hidden" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.h2 
          className="text-4xl md:text-5xl mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: -30 }}
          transition={{ duration: 0.6 }}
        >
          Behind The <span className="text-cyan-400">Scenes</span>
        </motion.h2>
        <motion.div 
          className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto mb-12"
          initial={{ width: 0 }}
          animate={isInView ? { width: 80 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        />
      </div>

      {/* Infinite Scrolling Container */}
      <div className="relative w-full overflow-hidden">
        <motion.div 
          className="flex gap-8"
          animate={{
            x: [0, -100 * images.length],
          }}
          transition={{
            x: {
              repeat: Infinity,
              repeatType: "loop",
              duration: 25,
              ease: "linear",
            },
          }}
          style={{ width: 'fit-content' }}
        >
          {duplicatedImages.map((image, index) => (
            <motion.div
              key={index}
              className="relative group flex-shrink-0"
              style={{ width: '400px' }}
              whileHover={{ 
                scale: 1.05,
                zIndex: 10
              }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <motion.div
                className="relative h-80 overflow-hidden rounded-xl border border-slate-700"
                whileHover={{ borderColor: "rgba(6, 182, 212, 0.5)" }}
              >
                <motion.div
                  whileHover={{ scale: 1.2 }}
                  transition={{ duration: 0.4 }}
                >
                  <ImageWithFallback
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
                
                {/* Hover effect */}
                <motion.div 
                  className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/10 transition-all duration-300"
                  initial={{ opacity: 0 }}
                  whileHover={{ opacity: 1 }}
                />

                {/* Corner accent */}
                <motion.div 
                  className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                  initial={{ scale: 0, rotate: -45 }}
                  whileHover={{ scale: 1, rotate: 0 }}
                  transition={{ type: "spring", stiffness: 300 }}
                />
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
