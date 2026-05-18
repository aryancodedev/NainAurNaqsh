import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function BrandPhilosophy() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const philosophies = [
    "Marketing is not just about reach.",
    "A lot of brands are visible. Very few are understood.",
    "Real strategy is crafted, not copied.",
    "Presence is built through clarity and relevance."
  ];

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 px-6 bg-gradient-to-b from-[var(--charcoal-black)] to-[var(--midnight-navy)]">
      <div className="max-w-6xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2rem,5vw,3.5rem)] tracking-tight opacity-40 mb-4"
              style={{ fontWeight: 300, letterSpacing: '0.05em' }}>
            PHILOSOPHY
          </h2>
        </motion.div>

        <div className="space-y-16">
          {philosophies.map((text, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2 + (index * 0.15),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="relative"
            >
              <div className="flex items-start gap-8">
                <span className="text-[var(--soft-gold)] opacity-50 text-sm mt-3"
                      style={{ fontWeight: 300 }}>
                  0{index + 1}
                </span>
                <p className="text-[clamp(1.5rem,3.5vw,3rem)] leading-[1.3] tracking-tight"
                   style={{ fontWeight: 300, letterSpacing: '-0.01em' }}>
                  {text}
                </p>
              </div>

              {index < philosophies.length - 1 && (
                <motion.div
                  initial={{ scaleX: 0 }}
                  animate={isInView ? { scaleX: 1 } : {}}
                  transition={{ duration: 1, delay: 0.5 + (index * 0.15) }}
                  className="h-[1px] bg-gradient-to-r from-transparent via-[var(--warm-ivory)] to-transparent opacity-10 mt-12 origin-left"
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
