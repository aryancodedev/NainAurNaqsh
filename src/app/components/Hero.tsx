import { motion } from 'motion/react';

export default function Hero() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background with subtle gradient and glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e27] via-[#0d0d0d] to-[#1a1a1a]">
        {/* Ambient glow effect */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[var(--muted-gold)] rounded-full blur-[120px] opacity-20" />
        <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[var(--soft-gold)] rounded-full blur-[100px] opacity-10" />

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.015] bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIj4KICA8ZmlsdGVyIGlkPSJub2lzZSI+CiAgICA8ZmVUdXJidWxlbmNlIHR5cGU9ImZyYWN0YWxOb2lzZSIgYmFzZUZyZXF1ZW5jeT0iMC42NSIgbnVtT2N0YXZlcz0iMyIgc3RpdGNoVGlsZXM9InN0aXRjaCIvPgogIDwvZmlsdGVyPgogIDxyZWN0IHdpZHRoPSIzMDAiIGhlaWdodD0iMzAwIiBmaWx0ZXI9InVybCgjbm9pc2UpIiBvcGFjaXR5PSIwLjA1Ii8+Cjwvc3ZnPg==')]" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 className="text-[clamp(3rem,8vw,7rem)] tracking-tight leading-[0.95] mb-8"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            NAIN AUR NAQSH
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-[clamp(1.1rem,2vw,1.5rem)] mb-6 text-[var(--warm-ivory)] opacity-90"
             style={{ fontWeight: 500, letterSpacing: '0.01em' }}>
            Media, Marketing, PR & Creator-Led Presence
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p className="text-lg mb-12 max-w-2xl mx-auto opacity-70 leading-relaxed">
            We shape brand presence through strategy, storytelling, campaigns, and culture-led communication.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex gap-6 justify-center"
        >
          <button className="px-8 py-4 bg-transparent border border-[var(--warm-ivory)] border-opacity-20 hover:border-opacity-40 hover:bg-white/5 transition-all duration-500 backdrop-blur-sm">
            View Work
          </button>
          <button className="px-8 py-4 bg-[var(--soft-gold)] text-[var(--charcoal-black)] hover:bg-opacity-90 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.3)] hover:shadow-[0_0_40px_rgba(212,175,55,0.5)]">
            Let's Talk
          </button>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border border-[var(--warm-ivory)] border-opacity-30 rounded-full flex items-start justify-center p-2"
        >
          <div className="w-1 h-2 bg-[var(--soft-gold)] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
