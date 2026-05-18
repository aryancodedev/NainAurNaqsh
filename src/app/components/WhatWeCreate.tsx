import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import React, { useRef, useState } from 'react';

export default function WhatWeCreate() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const capabilities = [
    { title: "Brand Presence", description: "Crafting strategic identity systems that resonate and endure" },
    { title: "Campaign Direction", description: "Orchestrating narratives that move culture and markets" },
    { title: "Visual Storytelling", description: "Creating cinematic visual languages for modern brands" },
    { title: "Creative Communication", description: "Building dialogue between brands and their communities" },
    { title: "Social Media Systems", description: "Architecting digital ecosystems with purpose and clarity" },
    { title: "PR & Creator-Led Visibility", description: "Amplifying reach through authentic influence networks" },
    { title: "Culture-Led Campaigns", description: "Aligning brands with movements that matter" }
  ];


  return (
    <section ref={ref} className="min-h-screen py-32 px-6 bg-[var(--midnight-navy)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight mb-6"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            What We<br />Create
          </h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Our capabilities span the full spectrum of modern brand communication.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {capabilities.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.1 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group"
            >
              <div className="relative p-8 h-full border border-[var(--warm-ivory)] border-opacity-10 hover:border-opacity-20 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-700 backdrop-blur-sm">
                {/* Hover glow effect */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 0.1 : 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 bg-gradient-to-br from-[var(--soft-gold)] to-transparent pointer-events-none"
                />

                <div className="relative z-10">
                  <h3 className="text-xl mb-4 tracking-tight"
                      style={{ fontWeight: 400 }}>
                    {item.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {/* Corner accent */}
                <motion.div
                  initial={{ width: 0, height: 0 }}
                  animate={{
                    width: hoveredIndex === index ? 20 : 0,
                    height: hoveredIndex === index ? 20 : 0
                  }}
                  transition={{ duration: 0.4 }}
                  className="absolute top-0 right-0 border-t border-r border-[var(--soft-gold)] opacity-50"
                />
              </div>
            </motion.div>
          ))}
        </div>

        
      </div>
    </section>
  );
}

