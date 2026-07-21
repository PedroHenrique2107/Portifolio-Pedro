import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, Milestone } from 'lucide-react';
import { timeline } from '@/data/portfolio';
import {
  panelRevealVariants,
  revealVariants,
  sectionHeaderVariants,
  staggerContainerVariants
} from '@/lib/motion';

const timelineColors = [
  { text: 'text-emerald-300', border: 'border-emerald-400/25', dot: 'bg-emerald-400', line: 'from-emerald-400/60' },
  { text: 'text-cyan-300', border: 'border-cyan-400/25', dot: 'bg-cyan-400', line: 'from-cyan-400/60' },
  { text: 'text-purple-300', border: 'border-purple-400/25', dot: 'bg-purple-400', line: 'from-purple-400/60' }
] as const;

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="relative overflow-hidden bg-dark py-16 sm:py-24 lg:py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark pointer-events-none" />

      <div className="relative mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          ref={containerRef}
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="system-divider-infra" />
            <span className="font-mono text-sm text-emerald-400">03</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-400/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Engenharia em <span className="text-gradient-green">Escala</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-gray-400">
            A trajetória de evolução técnica e as próximas fronteiras.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="relative"
        >
          <div className="absolute bottom-0 left-4 top-0 w-px bg-white/10 lg:left-1/2">
            <motion.div
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-emerald-400 via-cyan-400 to-purple-400"
            />
          </div>

          <div className="space-y-6 lg:space-y-8">
            {timeline.map((item, index) => {
              const color = timelineColors[index % timelineColors.length];
              const alignRight = index % 2 === 1;

              return (
                <motion.article
                  key={`${item.year}-${item.title}`}
                  variants={panelRevealVariants}
                  className={`relative grid gap-4 pl-10 lg:grid-cols-2 lg:pl-0 ${
                    alignRight ? 'lg:[&>*:first-child]:col-start-2' : ''
                  }`}
                >
                  <div className="absolute left-4 top-6 z-10 -translate-x-1/2 lg:hidden">
                    <div className={`flex h-9 w-9 items-center justify-center border bg-dark ${color.border}`}>
                      <span className={`h-2.5 w-2.5 rounded-full ${color.dot}`} />
                    </div>
                  </div>

                  <div className={`system-panel p-4 sm:p-6 ${alignRight ? 'lg:ml-14' : 'lg:mr-14'}`}>
                    <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                      <div>
                        <span className={`font-mono text-2xl font-bold ${color.text}`}>{item.year}</span>
                        <h3 className="mt-2 text-xl font-semibold leading-tight text-white">
                          {item.title}
                        </h3>
                      </div>
                      <Milestone className={`h-5 w-5 ${color.text}`} />
                    </div>

                    <p className="mb-5 text-sm leading-relaxed text-gray-400 sm:text-base">
                      {item.description}
                    </p>

                    <div className="flex flex-wrap gap-2">
                      {item.technologies.map((tech) => (
                        <span key={tech} className="system-chip text-gray-300">
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className={`mt-5 h-px bg-gradient-to-r ${color.line} to-transparent`} />
                  </div>
                </motion.article>
              );
            })}
          </div>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mt-16"
        >
          <div className="system-panel mx-auto max-w-3xl p-5 text-center sm:p-8">
            <span className="system-label text-cyan-300">North star</span>
            <p className="mt-3 text-lg font-semibold leading-relaxed text-white sm:text-2xl">
              "Quero construir sistemas que continuem funcionando quando o{' '}
              <span className="text-gradient-cyan">ambiente falhar</span>."
            </p>
            <div className="mt-5 flex items-center justify-center gap-3 text-gray-500">
              <span className="h-px w-10 bg-cyan-400/30" />
              <ArrowRight className="h-4 w-4 text-cyan-300" />
              <span className="h-px w-10 bg-cyan-400/30" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
