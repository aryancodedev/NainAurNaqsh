import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const projects = [
    { title: "Brand Campaign", category: "Visual Direction", year: "2026" },
    { title: "Creator Network", category: "Social Strategy", year: "2026" },
    { title: "Cultural Movement", category: "Campaign Direction", year: "2025" },
    { title: "Digital Presence", category: "Communication System", year: "2025" }
  ];

  // Load videos from src/assets/videos as URLs so <video> can play them
  let videoUrls: string[] = [];
  try {
    const videoModules = (import.meta as any).glob('/src/assets/videos/*.{mp4,webm,ogg}', { eager: true, as: 'url' }) as Record<string, string> | undefined;
    if (videoModules && typeof videoModules === 'object') {
      videoUrls = Object.values(videoModules);
    }
  } catch (err) {
    console.warn('Could not load videos via import.meta.glob', err);
    videoUrls = [];
  }

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [galleryMode, setGalleryMode] = useState(false);

  function openProject(i: number) {
    setModalIndex(i);
    setGalleryMode(false);
    setModalOpen(true);
  }

  function openGallery() {
    setGalleryMode(true);
    setModalIndex(0);
    setModalOpen(true);
  }


  return (
    <section id="portfolio" ref={ref} className="min-h-screen py-32 px-6 bg-gradient-to-b from-[var(--charcoal-black)] to-[var(--midnight-navy)]">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight mb-6"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            Selected<br />Work
          </h2>
          <p className="text-lg opacity-60 max-w-2xl">
            Curated projects that showcase our approach to strategic brand presence.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 1,
                delay: 0.2 * index,
                ease: [0.22, 1, 0.36, 1]
              }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="group cursor-pointer"
            >
              <div className="relative overflow-hidden aspect-[4/3] bg-gradient-to-br from-[var(--deep-graphite)] to-[var(--charcoal-black)] border border-[var(--warm-ivory)] border-opacity-10">
                {videoUrls[index] ? (
                  <video src={videoUrls[index]} controls className="absolute inset-0 w-full h-full object-cover" />
                ) : null}

                <motion.div
                  animate={{
                    scale: hoveredIndex === index ? 1.1 : 1,
                    opacity: hoveredIndex === index ? 0.3 : 0.15
                  }}
                  transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 bg-gradient-to-br from-[var(--soft-gold)] via-transparent to-transparent"
                />

                {/* Overlay on hover */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.4 }}
                  className="absolute inset-0 bg-[var(--midnight-navy)]/80 backdrop-blur-sm flex items-center justify-center cursor-pointer"
                  onClick={() => openProject(index)}
                >
                  <span className="text-sm border border-[var(--soft-gold)] px-6 py-3">
                    View Project
                  </span>
                </motion.div>
              </div>

              <div className="mt-6">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-xl tracking-tight"
                      style={{ fontWeight: 400 }}>
                    {project.title}
                  </h3>
                  <span className="text-xs opacity-40">{project.year}</span>
                </div>
                <p className="text-sm opacity-60">{project.category}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-16 text-center"
        >
          <button onClick={openGallery} className="px-8 py-4 border border-[var(--warm-ivory)] border-opacity-20 hover:border-opacity-40 hover:bg-white/5 transition-all duration-500">
            View All Work
          </button>
        </motion.div>

        {modalOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center">
            <div className="absolute inset-0 bg-black/70" onClick={() => setModalOpen(false)} />

            <div className="relative z-10 max-w-6xl w-full mx-6">
              <div className="bg-[var(--midnight-navy)] rounded p-6">
                <button className="absolute top-4 right-6 text-white opacity-80" onClick={() => setModalOpen(false)}>Close</button>

                {/* Large player */}
                <div className="mb-6">
                  {videoUrls.length > 0 ? (
                    <video key={modalIndex} src={videoUrls[modalIndex] || videoUrls[0]} controls autoPlay playsInline className="w-full max-h-[70vh] object-contain rounded" />
                  ) : (
                    <div className="p-12 text-center text-sm opacity-60">No videos available</div>
                  )}
                </div>

                {/* Gallery thumbnails when in gallery mode */}
                {galleryMode && (
                  <div className="grid grid-cols-3 gap-4">
                    {videoUrls.map((url, i) => (
                      <button key={i} onClick={() => setModalIndex(i)} className="relative">
                        <video src={url} className={`w-full h-28 object-cover rounded border ${i===modalIndex? 'ring-2 ring-[var(--soft-gold)]':''}`} />
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
