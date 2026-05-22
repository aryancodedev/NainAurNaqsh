  import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';

const videoModules = (import.meta as any).glob('/src/assets/videos/*.{mp4,webm,ogg}', { eager: true, as: 'url' }) as Record<string, string>;
const thumbnailModules = (import.meta as any).glob('/src/assets/thumbnail/*.{png,jpg,jpeg,webp,svg}', { eager: true, as: 'url' }) as Record<string, string>;

const fallbackPoster = `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 900">
    <defs>
      <linearGradient id="bg" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#0a0e27" />
        <stop offset="1" stop-color="#1b1c22" />
      </linearGradient>
    </defs>
    <rect width="1200" height="900" rx="48" fill="url(#bg)" />
    <rect x="160" y="150" width="880" height="600" rx="36" fill="rgba(255,255,255,0.03)" stroke="rgba(245,231,176,0.16)" />
    <text x="220" y="330" fill="#f7f2e8" font-family="Arial, Helvetica, sans-serif" font-size="74" letter-spacing="4">VIDEO 5</text>
    <text x="220" y="420" fill="#d4af37" font-family="Arial, Helvetica, sans-serif" font-size="34" letter-spacing="2">No thumbnail available</text>
  </svg>
`)}`;

const getAssetUrl = (modules: Record<string, string>, fileName: string) => {
  const match = Object.entries(modules).find(([path]) => path.endsWith(`/${fileName}`));
  return match?.[1];
};

export default function Portfolio() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const workItems = [
    { title: "Yaduraj Realty", category: "Real Estate Brand Film", year: "2026", videoFile: "video1.mp4", thumbnailFile: "VIDEO 1.png", galleryIndex: 0 },
    { title: "Instant Energy Drinks", category: "Beverage Campaign", year: "2026", videoFile: "video2.mp4", thumbnailFile: "VIDEO 2.png", galleryIndex: 1 },
    { title: "Twinkle Dental Care", category: "Healthcare Brand Story", year: "2025", videoFile: "video4.mp4", thumbnailFile: "VIDEO 4.png", galleryIndex: 2 },
    { title: "Sundarone Hostels", category: "Hospitality Presence", year: "2025", videoFile: "video6.mp4", thumbnailFile: "VIDEO 6.png", galleryIndex: 3 }
  ];

  const galleryVideoOrder = ['video1.mp4', 'video2.mp4', 'video4.mp4', 'video6.mp4', 'video3.mp4', 'video5.mp4'];
  const galleryMeta: Record<string, { title: string; category: string; thumbnailFile: string }> = {
    'video1.mp4': { title: 'Yaduraj Realty', category: 'Real Estate Brand Film', thumbnailFile: 'VIDEO 1.png' },
    'video2.mp4': { title: 'Instant Energy Drinks', category: 'Beverage Campaign', thumbnailFile: 'VIDEO 2.png' },
    'video3.mp4': { title: 'Twinkle Dental Care', category: 'Healthcare Brand Story', thumbnailFile: 'VIDEO 4.png' },
    'video4.mp4': { title: 'Twinkle Dental Care', category: 'Healthcare Brand Story', thumbnailFile: 'VIDEO 4.png' },
    'video5.mp4': { title: 'Yaduraj Realty', category: 'Real Estate Brand Film', thumbnailFile: 'VIDEO 1.png' },
    'video6.mp4': { title: 'Sundarone Hostels', category: 'Hospitality Presence', thumbnailFile: 'VIDEO 6.png' },
  };

  const galleryItems = galleryVideoOrder.map((videoFile) => {
    const meta = galleryMeta[videoFile];
    const posterFile = meta?.thumbnailFile ?? 'VIDEO 1.png';

    return {
      src: getAssetUrl(videoModules, videoFile),
      title: meta?.title ?? 'Work',
      category: meta?.category ?? 'Selected Reel',
      poster: getAssetUrl(thumbnailModules, posterFile) ?? getAssetUrl(thumbnailModules, 'VIDEO 1.png') ?? fallbackPoster,
    };
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [modalIndex, setModalIndex] = useState(0);
  const [galleryMode, setGalleryMode] = useState(false);

  function openProject(i: number) {
    setModalIndex(workItems[i].galleryIndex);
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
          {workItems.map((project, index) => (
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
              <div className="relative overflow-hidden aspect-video bg-gradient-to-br from-[var(--deep-graphite)] to-[var(--charcoal-black)] border border-[var(--warm-ivory)] border-opacity-10 rounded-xl">
                {getAssetUrl(videoModules, project.videoFile) ? (
                  <video
                    src={getAssetUrl(videoModules, project.videoFile)}
                    controls
                    poster={getAssetUrl(thumbnailModules, project.thumbnailFile) ?? fallbackPoster}
                    preload="metadata"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
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
          <div className="fixed inset-0 z-50 overflow-y-auto py-8 sm:py-12">
            <div className="absolute inset-0 bg-black/70" onClick={() => setModalOpen(false)} />

            <div className="relative z-10 max-w-7xl w-full mx-auto px-4 sm:px-6 flex items-start justify-center min-h-full">
              <div className="relative bg-[var(--midnight-navy)] rounded p-6 sm:p-8 w-full max-h-[90vh] overflow-y-auto">
                <button
                  type="button"
                  className="sticky top-0 ml-auto mb-4 block text-white opacity-80 hover:opacity-100 transition-opacity bg-[var(--midnight-navy)]/95 backdrop-blur-sm px-3 py-2 rounded"
                  onClick={() => setModalOpen(false)}
                >
                  Close
                </button>

                {/* Large player */}
                <div className="mb-6">
                  <div className="mb-4">
                    <h3 className="text-2xl tracking-tight" style={{ fontWeight: 400 }}>
                      {galleryItems[modalIndex]?.title}
                    </h3>
                    <p className="text-sm opacity-60">{galleryItems[modalIndex]?.category}</p>
                  </div>
                  {galleryItems.length > 0 ? (
                    <video
                      key={modalIndex}
                      src={galleryItems[modalIndex]?.src || galleryItems[0].src}
                      controls
                      autoPlay
                      playsInline
                      poster={galleryItems[modalIndex]?.poster || galleryItems[0].poster}
                      preload="metadata"
                      className="w-full max-h-[70vh] object-contain rounded"
                    />
                  ) : (
                    <div className="p-12 text-center text-sm opacity-60">No videos available</div>
                  )}
                </div>

                {/* Gallery thumbnails when in gallery mode */}
                {galleryMode && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {galleryItems.map((item, i) => (
                      <button key={i} onClick={() => setModalIndex(i)} className="relative w-full">
                        <video
                          src={item.src}
                          poster={item.poster}
                          preload="metadata"
                          className={`w-full aspect-video object-cover rounded-xl border ${i===modalIndex? 'ring-2 ring-[var(--soft-gold)]':''}`}
                        />
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
