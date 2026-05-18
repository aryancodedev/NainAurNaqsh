import { useEffect } from 'react';
import { motion } from 'motion/react';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import BrandPhilosophy from './components/BrandPhilosophy';
import WhatWeCreate from './components/WhatWeCreate';
import HowWeWork from './components/HowWeWork';
import CreatorNetwork from './components/CreatorNetwork';
import Portfolio from './components/Portfolio';
import Founder from './components/Founder';
import FAQs from './components/FAQs';
import Contact from './components/Contact';

export default function App() {
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  return (
    <div className="min-h-screen bg-[var(--midnight-navy)] text-[var(--warm-ivory)] overflow-x-hidden">
      <Hero />
      <WhoWeAre />
      <BrandPhilosophy />
      <WhatWeCreate />
      <HowWeWork />
      <CreatorNetwork />
      <Portfolio />
      <Founder />
      <FAQs />
      <Contact />
    </div>
  );
}
