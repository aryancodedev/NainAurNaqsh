import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import founderPhoto from '@/assets/images/FOUNDER.jpeg';

export default function Founder() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 px-6 bg-[var(--midnight-navy)] relative overflow-hidden">
      {/* Background accent */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[var(--soft-gold)] rounded-full blur-[180px] opacity-10" />

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Portrait placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="aspect-[3/4] bg-gradient-to-br from-[var(--deep-graphite)] to-[var(--charcoal-black)] border border-[var(--warm-ivory)] border-opacity-10 relative overflow-hidden shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
            <img
              src={founderPhoto}
              alt="Kartikey Yadav, Founder of Nain Aur Naqsh"
              className="absolute inset-0 h-full w-full object-cover object-top"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[var(--charcoal-black)] via-transparent to-transparent opacity-75" />
            <div className="absolute inset-0 bg-gradient-to-br from-[var(--muted-gold)] via-transparent to-transparent opacity-20" />

            {/* Frame accent */}
            <div className="absolute top-0 left-0 w-20 h-20 border-t-2 border-l-2 border-[var(--soft-gold)] opacity-30" />
            <div className="absolute bottom-0 right-0 w-20 h-20 border-b-2 border-r-2 border-[var(--soft-gold)] opacity-30" />
          </div>

          {/* Decorative line */}
          <motion.div
            initial={{ scaleX: 0 }}
            animate={isInView ? { scaleX: 1 } : {}}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-[1px] bg-gradient-to-r from-[var(--soft-gold)] to-transparent mt-8 origin-left"
          />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={isInView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
          className="space-y-8"
        >
          <div>
            <span className="text-sm tracking-widest opacity-40 mb-4 block">FOUNDER</span>
            <h2 className="text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-tight mb-6"
                style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
              Vision &<br />Philosophy
            </h2>
          </div>

          <div className="space-y-6 text-base leading-relaxed opacity-80">
            <p>
              Built from a foundation in storytelling, design, and strategic communication, Nain Aur Naqsh represents a unified vision for modern brand presence.
            </p>
            <p>
              The journey spans disciplines — from visual arts to digital strategy, from editorial thinking to cultural awareness — converging into a practice that values clarity, relevance, and thoughtful execution.
            </p>
            <p>
              Every brand has a story worth telling. The craft lies in finding the right language, the right medium, and the right moment to make it resonate.
            </p>
          </div>

          {/* Signature line */}
          <motion.div
            initial={{ width: 0 }}
            animate={isInView ? { width: '60%' } : {}}
            transition={{ duration: 1.5, delay: 0.8 }}
            className="h-[1px] bg-gradient-to-r from-[var(--soft-gold)] to-transparent opacity-50 mt-12"
          />
        </motion.div>
      </div>
    </section>
  );
}
