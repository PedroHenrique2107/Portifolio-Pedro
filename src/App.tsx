import { lazy, Suspense, useEffect, useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/sections/Hero';
import { About } from '@/sections/About';
import { Projects } from '@/sections/Projects';
import { Timeline } from '@/sections/Timeline';
import { Contact } from '@/sections/Contact';
import { Footer } from '@/sections/Footer';
import { ScrollProgress } from '@/components/ScrollProgress';
import './App.css';

const BackgroundParticles = lazy(() =>
  import('@/components/particles/BackgroundParticles').then((module) => ({
    default: module.BackgroundParticles
  }))
);

function shouldEnableBackgroundParticles() {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const compactViewport = window.matchMedia('(max-width: 767px)').matches;

  return !reducedMotion && !compactViewport;
}

function DeferredBackgroundParticles() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    if (!shouldEnableBackgroundParticles()) return;

    const enable = () => setEnabled(true);
    const timeoutId = window.setTimeout(enable, 7000);

    window.addEventListener('pointermove', enable, { once: true, passive: true });
    window.addEventListener('scroll', enable, { once: true, passive: true });
    window.addEventListener('focus', enable, { once: true });

    return () => {
      window.clearTimeout(timeoutId);
      window.removeEventListener('pointermove', enable);
      window.removeEventListener('scroll', enable);
      window.removeEventListener('focus', enable);
    };
  }, []);

  if (!enabled) return null;

  return (
    <div className="fixed inset-0 z-[1]">
      <Suspense fallback={null}>
        <BackgroundParticles />
      </Suspense>
    </div>
  );
}

function App() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = window.location.hash.replace('#', '');
      if (!id) return;

      window.requestAnimationFrame(() => {
        document.getElementById(id)?.scrollIntoView({ block: 'start' });
      });
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);

    return () => {
      window.removeEventListener('hashchange', scrollToHash);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-dark text-white overflow-x-hidden">
      <ScrollProgress />
      <DeferredBackgroundParticles />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Timeline />
        <Contact />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}

export default App;
