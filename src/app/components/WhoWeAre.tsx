import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 px-6 bg-[var(--charcoal-black)] relative">
      {/* Subtle background accent */}
      <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-[var(--muted-gold)] rounded-full blur-[150px] opacity-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Large typography */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            Who<br />We Are
          </h2>
        </motion.div>

        {/* Right: Thoughtful paragraph */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-6"
        >
          <p className="text-lg leading-relaxed opacity-80">
            Nain Aur Naqsh started from a respect for storytelling, art, and expression before commercial intention.
          </p>
          <p className="text-lg leading-relaxed opacity-80">
            The founder's background spans graphic design, editing, cinematography, social media, strategy, and marketing.
          </p>
          <p className="text-lg leading-relaxed opacity-80">
            The agency exists to bring all these disciplines together into one thoughtful communication system.
          </p>

          {/* Decorative line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '100%' } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-[var(--soft-gold)] to-transparent opacity-30 mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
