import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef, useState } from 'react';
import { Instagram, Mail, MessageCircle } from 'lucide-react';

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const [submitted, setSubmitted] = useState(false);

  const handleContact = (href: string) => {
  window.open(href, '_blank');
};
const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formData = new FormData(e.currentTarget);

  const response = await fetch('https://formspree.io/f/xqenogry', {
    method: 'POST',
    body: formData,
    headers: {
      Accept: 'application/json',
    },
  });

  if (response.ok) {
    setSubmitted(true);
    e.currentTarget.reset();
  }
};

  return (
    <section ref={ref} className="min-h-screen flex items-center py-32 px-6 bg-[var(--charcoal-black)] relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[var(--soft-gold)] rounded-full blur-[200px] opacity-10" />

      <div className="max-w-5xl mx-auto w-full relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="text-center mb-16"
        >
          <h2 className="text-[clamp(2.5rem,7vw,6rem)] leading-[1.05] tracking-tight mb-6"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            LET'S BUILD<br />YOUR PRESENCE
          </h2>
          <p className="text-xl opacity-60"
             style={{ fontWeight: 300, letterSpacing: '0.01em' }}>
            Built with thought. Carried with clarity.
          </p>
        </motion.div>

        {/* Contact methods */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {[
            { icon: Instagram, label: "Instagram", href: "https://instagram.com/nainaurnaqsh", value: "@nainaurnaqsh" },
            { icon: Mail, label: "Email", href: "https://mail.google.com/mail/?view=cm&fs=1&to=nainaurnaqsh@gmail.com", value: "nainaurnaqsh@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", href: "https://wa.me/919528204860?text=Hello%20there", value: "Message on WhatsApp" }
          ].map((contact, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.8,
                delay: 0.4 + (0.1 * index),
                ease: [0.22, 1, 0.36, 1]
              }}
              className="group"
            >
              <div
                onClick={() => handleContact(contact.href)}
                className="block p-8 border border-[var(--warm-ivory)] border-opacity-10 hover:border-opacity-30 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-500 text-center cursor-pointer"
                aria-label={contact.label}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleContact(contact.href);
                  }
                }}
              >
                <contact.icon className="w-8 h-8 mx-auto mb-4 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="text-sm opacity-40 mb-2">{contact.label}</div>
                <div className="text-base">{contact.value}</div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Inquiry form */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-2xl mx-auto"
        >
          <form
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="rounded-[28px] px-6 py-4 bg-white/[0.03] border border-[var(--warm-ivory)] border-opacity-10 focus:border-opacity-30 outline-none transition-all duration-500 placeholder:opacity-40"
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="rounded-[28px] px-6 py-4 bg-white/[0.03] border border-[var(--warm-ivory)] border-opacity-10 focus:border-opacity-30 outline-none transition-all duration-500 placeholder:opacity-40"
              />
            </div>
            <textarea
              name="message"
              placeholder="Tell us about your brand and what you're looking to achieve..."
              rows={6}
              className="rounded-[28px] w-full px-6 py-4 bg-white/[0.03] border border-[var(--warm-ivory)] border-opacity-10 focus:border-opacity-30 outline-none transition-all duration-500 placeholder:opacity-40 resize-none"
            />
            <button type='submit'
             className="rounded-[28px] w-full py-4 bg-[var(--soft-gold)] text-[var(--charcoal-black)] hover:bg-opacity-90 transition-all duration-500 shadow-[0_0_30px_rgba(212,175,55,0.2)] hover:shadow-[0_0_50px_rgba(212,175,55,0.4)]">
              Send Inquiry
            </button>
            {submitted && (
              <p className="text-center text-sm text-[var(--soft-gold)] mt-4">
                Inquiry sent successfully.
              </p>
              )}
          </form>
        </motion.div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 1, delay: 0.8 }}
          className="mt-24 pt-12 border-t border-[var(--warm-ivory)] border-opacity-10 text-center"
        >
          <p className="text-sm opacity-40">
            © 2026 Nain Aur Naqsh. Crafted with intention.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
