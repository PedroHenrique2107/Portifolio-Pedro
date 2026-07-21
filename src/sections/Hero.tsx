import { motion } from 'framer-motion';
import { ChevronDown, Download, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { Button } from '@/components/ui/button';
import { CoreSphere } from '@/components/3d/CoreSphere';
import { ErrorBoundary } from '@/components/ErrorBoundary';
import { profile } from '@/data/portfolio';

const heroCtaClass =
  'h-14 w-full sm:w-56 px-6 text-base font-semibold rounded-md';

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

      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-6 sm:px-8 lg:px-16 py-20">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center sm:min-h-[80vh]">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 font-mono text-sm">
                <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                SOFTWARE ENGINEER - BACKEND - CLEAN CODE
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight"
            >
              Alta performance{' '}
              <span className="text-gradient-cyan">começa na estrutura de dados</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              className="text-lg sm:text-xl text-gray-400 max-w-xl"
            >
              Olá, meu nome é Pedro Henrique, Engenheiro de Software focado em backend e arquitetura de sistemas escaláveis.
              É um prazer ter você aqui. Este portfólio reúne projetos, experiências e soluções que refletem minha visão de tecnologia:
              eficiência, inovação e impacto positivo. Explore e vamos construir o futuro juntos
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              className="flex flex-wrap gap-4"
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
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4"
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
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="relative h-[400px] lg:h-[560px] hidden lg:block"
          >
            <div className="absolute inset-0 overflow-hidden">
              <ErrorBoundary
                fallback={
                  <div className="w-full h-full flex items-center justify-center">
                    <div className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border border-cyan-500/30" />
                  </div>
                }
              >
                <CoreSphere />
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

