import { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Github, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { CoreSphere } from '@/components/3d/CoreSphere';
import { BackgroundParticles } from '@/components/particles/BackgroundParticles';

export function Hero() {
  const [progress, setProgress] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercent = (scrollTop / docHeight) * 100;
      setProgress(Math.min(scrollPercent, 100));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      {/* Background particles */}
      <BackgroundParticles />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none z-[1]" />

      {/* Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20"
      >
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center min-h-[80vh]">
          {/* Left column - Text content */}
          <div className="space-y-8">
            {/* Label */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SOFTWARE ENGINEER • BACKEND • CLEAN CODE
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Alta performance {' '}
              <span className="text-gradient-cyan">começa na estrutura de dados.</span>
            </motion.h1>

            {/* Subheadline */}
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl"
            >
            Olá meu nome é Pedro Henrique, Engenheiro de Software focado em backend e arquitetura de sistemas escaláveis.
            É um prazer ter você aqui. Este portfólio reúne projetos, experiências e soluções que refletem minha visão de tecnologia: eficiência, inovação e impacto positivo. Explore, inspire-se e vamos construir o futuro juntos. 
            </motion.p>

            {/* CTAs */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                onClick={() => scrollToSection('projects')}
                className="bg-cyan-500 hover:bg-cyan-400 text-dark font-semibold px-8 py-6 text-base transition-all duration-300 hover:shadow-glow"
              >
                Ver Projetos
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className="border-white/20 text-white hover:bg-white/10 px-8 py-6 text-base"
              >
                Falar Comigo
              </Button>
            </motion.div>

            {/* Social links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex items-center gap-4 pt-4"
            >
              <a
                href="https://github.com/PedroHenrique2107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Github className="w-5 h-5" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              <span className="text-gray-600">|</span>
              <a
                href="mailto:pedrohmsousa2023@gmail.com"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">Email</span>
              </a>
            </motion.div>
          </div>

          {/* Right column - 3D visualization */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
            className="relative h-[400px] lg:h-[500px] hidden lg:block"
          >
            <CoreSphere />
          </motion.div>
        </div>
      </motion.div>

      {/* Progress bar */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-white/5 z-20">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-500 via-emerald-500 to-purple-500"
          style={{ width: `${progress}%` }}
          transition={{ duration: 0.1 }}
        />
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="font-mono text-xs">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </motion.div>
    </section>
  );
}
