import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const steps = [
    { number: "01", title: "You Reach Out", description: "Initial contact and exploration of your brand's needs" },
    { number: "02", title: "We Understand the Problem", description: "Deep dive into challenges, goals, and current positioning" },
    { number: "03", title: "Discovery Call", description: "Strategic conversation to align vision and expectations" },
    { number: "04", title: "Strategic Direction", description: "Crafting a thoughtful approach tailored to your brand" },
    { number: "05", title: "Execution & Presence Building", description: "Implementing systems that create lasting impact" }
  ];

  return (
    <section ref={ref} className="min-h-screen py-32 px-6 bg-gradient-to-b from-[var(--midnight-navy)] to-[var(--charcoal-black)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-[var(--soft-gold)] rounded-full blur-[200px] opacity-5" />

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            How We Work
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line */}
          <motion.div
            initial={{ scaleY: 0 }}
            animate={isInView ? { scaleY: 1 } : {}}
            transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-[50%] top-0 bottom-0 w-[1px] bg-gradient-to-b from-[var(--soft-gold)] via-[var(--soft-gold)] to-transparent opacity-20 origin-top hidden md:block"
          />

          <div className="space-y-16">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 1,
                  delay: 0.2 * index,
                  ease: [0.22, 1, 0.36, 1]
                }}
                className={`flex items-center gap-8 ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <h3 className="text-2xl mb-2 tracking-tight"
                      style={{ fontWeight: 400 }}>
                    {step.title}
                  </h3>
                  <p className="text-sm opacity-60 leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 * index,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                  className="relative flex-shrink-0"
                >
                  <div className="w-16 h-16 rounded-full border-2 border-[var(--soft-gold)] bg-[var(--midnight-navy)] flex items-center justify-center relative z-10">
                    <span className="text-sm opacity-60" style={{ fontWeight: 300 }}>
                      {step.number}
                    </span>
                  </div>
                  {/* Glow */}
                  <div className="absolute inset-0 rounded-full bg-[var(--soft-gold)] blur-xl opacity-20" />
                </motion.div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
