import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { Button } from '@/components/ui/button';
import { AdaptiveVisualCore } from '@/components/hero/AdaptiveVisualCore';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { profile } from '@/data/portfolio';
import { heroSequence } from '@/lib/motion';

const heroCtaClass =
  'h-12 sm:h-14 w-full sm:w-56 px-5 sm:px-6 text-sm sm:text-base font-semibold rounded-md';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-dark"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark/50 to-dark pointer-events-none z-[1]" />

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-5 sm:px-8 lg:px-16 py-20 sm:py-24">
        <div className="relative grid lg:grid-cols-2 gap-6 sm:gap-12 lg:gap-8 items-center sm:min-h-[80vh]">
          <div className="relative z-10 max-w-xs space-y-6 sm:max-w-none sm:space-y-8">
            <motion.div
              variants={heroSequence.badge}
              initial="hidden"
              animate="visible"
            >
              <span className="inline-flex w-full max-w-xs flex-wrap items-center gap-x-2 gap-y-1 rounded-md border border-cyan-500/20 bg-cyan-500/10 px-3 py-2 font-mono text-xs leading-relaxed text-cyan-400 sm:w-auto sm:max-w-none sm:flex-nowrap sm:rounded-full sm:px-4 sm:text-sm">
                <span className="h-2 w-2 shrink-0 rounded-full bg-cyan-400 animate-pulse" />
                <span>SOFTWARE ENGINEER</span>
                <span>-</span>
                <span>BACKEND</span>
                <span>-</span>
                <span>CLEAN CODE</span>
              </span>
            </motion.div>

            <motion.h1
              variants={heroSequence.title}
              initial="hidden"
              animate="visible"
              className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              <span className="block">Alta performance</span>
              <span className="block text-gradient-cyan">começa na estrutura</span>
              <span className="block text-gradient-cyan">de dados</span>
            </motion.h1>

            <motion.p
              variants={heroSequence.copy}
              initial="hidden"
              animate="visible"
              className="text-base sm:text-xl text-gray-300 max-w-xl leading-relaxed"
            >
              Olá, meu nome é Pedro Henrique, Engenheiro de Software focado em backend e arquitetura de sistemas escaláveis.
              É um prazer ter você aqui. Este portfólio reúne projetos, experiências e soluções que refletem minha visão de tecnologia:
              eficiência, inovação e impacto positivo. Explore e vamos construir o futuro juntos
            </motion.p>

            <motion.div
              variants={heroSequence.actions}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap gap-3 sm:gap-4"
            >
              <Button
                onClick={() => scrollToSection('projects')}
                className={`${heroCtaClass} system-button-primary`}
              >
                Ver Projetos
              </Button>
              <Button
                variant="outline"
                onClick={() => scrollToSection('contact')}
                className={`${heroCtaClass} system-button-outline`}
              >
                Falar Comigo
              </Button>
              <Button
                asChild
                variant="outline"
                className={`${heroCtaClass} border border-emerald-400/30 bg-emerald-400/5 text-emerald-300 hover:bg-emerald-400/10 hover:border-emerald-400/50 transition-all duration-300`}
              >
                <a
                  href={profile.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Download className="w-5 h-5" />
                  Baixar Currículo
                </a>
              </Button>
            </motion.div>

            <motion.div
              variants={heroSequence.actions}
              initial="hidden"
              animate="visible"
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-2 sm:pt-4"
            >
              <a
                href={profile.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <GitHubIcon className="w-5 h-5" />
                <span className="font-mono text-sm">GitHub</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href={profile.linkedInUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <LinkedInIcon className="w-5 h-5" />
                <span className="font-mono text-sm">LinkedIn</span>
              </a>
              <span className="hidden sm:inline text-gray-600">|</span>
              <a
                href={`mailto:${profile.email}`}
                className="flex items-center gap-2 text-gray-400 hover:text-cyan-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span className="font-mono text-sm">Email</span>
              </a>
            </motion.div>
          </div>

          <motion.div
            variants={heroSequence.visual}
            initial="hidden"
            animate="visible"
            className="pointer-events-none absolute inset-x-0 top-[25rem] z-0 h-[220px] opacity-10 sm:top-20 sm:h-[420px] sm:opacity-45 lg:pointer-events-auto lg:relative lg:inset-auto lg:z-auto lg:h-[560px] lg:opacity-100"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ErrorBoundary
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" />
                  </div>
                }
              >
                <AdaptiveVisualCore />
              </ErrorBoundary>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
          className="flex flex-col items-center gap-2 text-gray-500"
        >
          <span className="font-mono text-xs">SCROLL</span>
          <ChevronDown className="w-5 h-5" />
        </motion.div>
      </div>
    </section>
  );
}

