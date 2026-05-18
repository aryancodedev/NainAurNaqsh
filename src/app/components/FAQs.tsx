import { motion } from 'motion/react';
import { useInView } from 'motion/react';
import { useRef } from 'react';
import * as Accordion from '@radix-ui/react-accordion';
import { ChevronDown } from 'lucide-react';

export default function FAQs() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const faqs = [
    {
      question: "Do you only work with big brands?",
      answer: "We work with brands that value thoughtful communication, regardless of size. What matters is the commitment to building meaningful presence and strategic clarity."
    },
    {
      question: "Do you only handle social media?",
      answer: "Social media is one channel within a broader communication system. We approach brand presence holistically — from strategy and visual identity to campaigns, PR, and creator networks."
    },
    {
      question: "What if I don't know what's wrong?",
      answer: "That's exactly where we begin. Through discovery conversations, we help identify gaps, opportunities, and strategic direction. Understanding the problem is part of the process."
    },
    {
      question: "Do you offer fixed packages?",
      answer: "Every brand has unique needs. We craft custom approaches rather than templated packages, ensuring the solution fits your specific challenges and goals."
    },
    {
      question: "How do we get started?",
      answer: "Reach out through any of our contact channels. We'll schedule a discovery call to understand your brand, discuss possibilities, and outline a strategic path forward."
    }
  ];

  return (
    <section ref={ref} className="min-h-screen py-32 px-6 bg-gradient-to-b from-[var(--midnight-navy)] to-[var(--charcoal-black)]">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          className="mb-20 text-center"
        >
          <h2 className="text-[clamp(2.5rem,6vw,5rem)] leading-[1.1] tracking-tight"
              style={{ fontWeight: 300, letterSpacing: '-0.02em' }}>
            Questions
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 1, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        >
          <Accordion.Root type="single" collapsible className="space-y-6">
            {faqs.map((faq, index) => (
              <Accordion.Item
                key={index}
                value={`item-${index}`}
                className="border border-[var(--warm-ivory)] border-opacity-10 hover:border-opacity-20 transition-all duration-500 overflow-hidden"
              >
                <Accordion.Header>
                  <Accordion.Trigger className="w-full px-8 py-6 flex items-center justify-between text-left group hover:bg-white/[0.02] transition-all duration-300">
                    <span className="text-lg tracking-tight pr-8"
                          style={{ fontWeight: 400 }}>
                      {faq.question}
                    </span>
                    <ChevronDown
                      className="w-5 h-5 transition-transform duration-300 group-data-[state=open]:rotate-180 flex-shrink-0 opacity-60"
                    />
                  </Accordion.Trigger>
                </Accordion.Header>
                <Accordion.Content className="overflow-hidden data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up">
                  <div className="px-8 pb-6 text-base opacity-70 leading-relaxed">
                    {faq.answer}
                  </div>
                </Accordion.Content>
              </Accordion.Item>
            ))}
          </Accordion.Root>
        </motion.div>
      </div>
    </section>
  );
}
