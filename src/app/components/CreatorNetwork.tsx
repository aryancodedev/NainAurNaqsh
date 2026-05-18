import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import brandLogo from '@/assets/icons/logo_TR.png';

export default function CreatorNetwork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen py-32 px-6 bg-[var(--charcoal-black)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/3 left-1/3 w-[600px] h-[600px] bg-[var(--muted-gold)] rounded-full blur-[180px] opacity-10" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* Left: Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="inline-flex items-center gap-3 rounded-full border border-[var(--warm-ivory)] border-opacity-10 bg-[var(--deep-graphite)]/40 px-4 py-2 mb-6">
              <img src={brandLogo} alt="Nain Aur Naqsh logo" className="h-10 w-10 object-contain" />
              <span className="text-[0.65rem] uppercase tracking-[0.3em] opacity-60">Nain Aur Naqsh</span>
            </div>

            <h2 className="text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.1] tracking-tight mb-8"
                style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
              PR & Creator<br />Network
            </h2>

            <p className="text-3xl mb-8 leading-tight tracking-tight"
               style={{ fontWeight: 300 }}>
              "We don't manage influencers.<br />We craft influence."
            </p>

            <div className="space-y-4 text-base opacity-70 leading-relaxed">
              <p>
                We help organize micro-creators and creators into a stronger collaboration ecosystem for brands.
              </p>
              <p>
                Our approach focuses on creator-led campaigns, campus visibility, audience relevance, and coordinated influence through strategic creator networks.
              </p>
            </div>

            <div className="mt-12 space-y-4">
              {[
                "Creator-Led Campaigns",
                "Campus Visibility",
                "Audience Relevance",
                "Coordinated Influence",
                "Creator Networks"
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + (0.1 * index),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="flex items-center gap-3"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-[var(--soft-gold)]" />
                  <span className="text-sm opacity-60">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: Network Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 1.2, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative h-[500px] flex items-center justify-center"
          >
            {/* Centered Logo */}
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
                opacity: [0.8, 1, 0.8]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
            >
              <img src={brandLogo} alt="Nain Aur Naqsh logo" className="h-100 w-100 object-contain"/>
            </motion.div>

            {/* Surrounding creator nodes */}
            {[...Array(8)].map((_, i) => {
              const angle = (i * 45) * (Math.PI / 180);
              const radius = 180;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.6 + (i * 0.1),
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  style={{
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                >
                  {/* Connection line */}
                  <svg
                    className="absolute"
                    style={{
                      left: '50%',
                      top: '50%',
                      width: Math.abs(x) + 'px',
                      height: Math.abs(y) + 'px',
                      transform: `translate(${x > 0 ? '-100%' : '0'}, ${y > 0 ? '-100%' : '0'})`
                    }}
                  >
                    <motion.line
                      x1={x > 0 ? '100%' : '0'}
                      y1={y > 0 ? '100%' : '0'}
                      x2={x > 0 ? '0' : '100%'}
                      y2={y > 0 ? '0' : '100%'}
                      stroke="rgba(212, 175, 55, 0.2)"
                      strokeWidth="1"
                      initial={{ pathLength: 0 }}
                      animate={isInView ? { pathLength: 1 } : {}}
                      transition={{ duration: 1, delay: 0.8 + (i * 0.1) }}
                    />
                  </svg>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
