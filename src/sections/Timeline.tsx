import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { timeline } from '@/data/projects';

export function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  return (
    <section id="vision" className="relative py-24 lg:py-32 bg-dark overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-dark via-dark-100 to-dark pointer-events-none" />

      <div className="relative max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-emerald-500/50 to-transparent" />
            <span className="font-mono text-emerald-400 text-sm">03</span>
            <div className="h-px flex-1 bg-gradient-to-l from-emerald-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Engenharia em <span className="text-gradient-green">Escala</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            A trajetória de evolução técnica e as próximas fronteiras.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Central line - desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-white/10 -translate-x-1/2">
            <motion.div
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500"
            />
          </div>

          {/* Mobile line */}
          <div className="lg:hidden absolute left-4 top-0 bottom-0 w-px bg-white/10">
            <motion.div
              initial={{ height: '0%' }}
              animate={isInView ? { height: '100%' } : { height: '0%' }}
              transition={{ duration: 1, ease: 'easeOut' }}
              className="w-full bg-gradient-to-b from-emerald-500 via-cyan-500 to-purple-500"
            />
          </div>

          {/* Timeline items */}
          <div className="space-y-12 lg:space-y-0">
            {timeline.map((item, index) => {
              const isLeft = index % 2 === 0;
              const colors = [
                { bg: 'bg-emerald-500', glow: 'shadow-emerald-500/50' },
                { bg: 'bg-cyan-500', glow: 'shadow-cyan-500/50' },
                { bg: 'bg-purple-500', glow: 'shadow-purple-500/50' },
                { bg: 'bg-pink-500', glow: 'shadow-pink-500/50' }
              ][index % 4];

              return (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2, ease: 'easeOut' }}
                  className={`relative lg:grid lg:grid-cols-2 lg:gap-8 ${
                    index > 0 ? 'lg:mt-12' : ''
                  }`}
                >
                  {/* Content */}
                  <div
                    className={`pl-12 lg:pl-0 ${
                      isLeft ? 'lg:pr-16 lg:text-right' : 'lg:col-start-2 lg:pl-16'
                    }`}
                  >
                    {/* Year badge */}
                    <div className={`inline-flex items-center mb-4 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                      <span className="font-mono text-2xl font-bold text-white">{item.year}</span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-semibold text-white mb-3">
                      {item.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 mb-4">
                      {item.description}
                    </p>

                    {/* Technologies */}
                    <div className={`flex flex-wrap gap-2 ${isLeft ? 'lg:justify-end' : ''}`}>
                      {item.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-full bg-white/5 text-gray-400 font-mono text-xs border border-white/10"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Mobile dot */}
                  <div className={`lg:hidden absolute left-4 top-2 -translate-x-1/2`}>
                    <div className={`w-4 h-4 rounded-full ${colors.bg} shadow-lg ${colors.glow}`} />
                  </div>

                  {/* Desktop dot */}
                  <div
                    className={`hidden lg:block absolute left-1/2 top-2 -translate-x-1/2 z-10`}
                  >
                    <div className={`w-4 h-4 rounded-full ${colors.bg} shadow-lg ${colors.glow}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Closing message */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-20 text-center"
        >
          <div className="inline-block p-8 rounded-2xl bg-gradient-to-br from-emerald-500/10 via-cyan-500/10 to-purple-500/10 border border-white/10">
            <p className="text-xl lg:text-2xl font-semibold text-white max-w-2xl">
              "Quero construir sistemas que continuem funcionando quando o{' '}
              <span className="text-gradient-cyan">ambiente falhar</span>."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
