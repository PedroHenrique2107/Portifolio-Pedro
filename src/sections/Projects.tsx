import { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { projects, filterCategories } from '@/data/projects';
import type { FilterCategory, Project } from '@/types';

const categoryColors: Record<Project['category'], { bg: string; text: string; border: string }> = {
  apis: { bg: 'bg-cyan-500/10', text: 'text-cyan-400', border: 'border-cyan-500/20' },
  aiot: { bg: 'bg-emerald-500/10', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  fullstack: { bg: 'bg-purple-500/10', text: 'text-purple-400', border: 'border-purple-500/20' },
  systems: { bg: 'bg-gray-500/10', text: 'text-gray-400', border: 'border-gray-500/20' },
  frontend: { bg: 'bg-blue-500/10', text: 'text-blue-400', border: 'border-blue-500/20' },
  backend: { bg: 'bg-orange-500/10', text: 'text-orange-400', border: 'border-orange-500/20' }
};

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="relative py-24 lg:py-32 bg-dark-100">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-12"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-purple-500/50 to-transparent" />
            <span className="font-mono text-purple-400 text-sm">02</span>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Prova <span className="text-gradient-purple">Técnica</span>
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Projetos que demonstram engenharia real, arquitetura limpa e decisões técnicas fundamentadas.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {filterCategories.map((cat) => (
            <button
              key={cat.value}
              onClick={() => setActiveFilter(cat.value as FilterCategory)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeFilter === cat.value
                  ? 'bg-purple-500 text-white'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </motion.div>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => {
              const colors = categoryColors[project.category];

              return (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setSelectedProject(project)}
                  className={`group relative p-6 rounded-xl bg-dark border border-white/5 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-white/10 hover:shadow-[0_0_30px_rgba(168,85,247,0.15)]`}
                >
                  {/* Category badge */}
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border mb-4`}>
                    <span className={`w-2 h-2 rounded-full ${colors.text.replace('text', 'bg')}`} />
                    <span className={`font-mono text-xs ${colors.text}`}>
                      {project.categoryLabel}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.stack.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 rounded bg-white/5 text-gray-500 font-mono text-xs"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.stack.length > 4 && (
                      <span className="px-2 py-1 rounded bg-white/5 text-gray-500 font-mono text-xs">
                        +{project.stack.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Highlights preview */}
                  <ul className="space-y-1 mb-6">
                    {project.highlights.slice(0, 2).map((highlight, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-500 text-xs">
                        <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-purple-400" />
                        {highlight}
                      </li>
                    ))}
                  </ul>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-4 border-t border-white/5">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <Github className="w-4 h-4" />
                        <span className="font-mono">Código</span>
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span className="font-mono">Demo</span>
                      </a>
                    )}
                  </div>

                  {/* Hover indicator */}
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
                      <ExternalLink className="w-4 h-4 text-purple-400" />
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Project Detail Modal */}
        <Dialog open={!!selectedProject} onOpenChange={() => setSelectedProject(null)}>
          <DialogContent className="max-w-2xl bg-dark-100 border-white/10 text-white max-h-[90vh] overflow-y-auto">
            {selectedProject && (
              <>
                <DialogHeader>
                  <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${categoryColors[selectedProject.category].bg} ${categoryColors[selectedProject.category].border} border mb-4 w-fit`}>
                    <span className={`font-mono text-xs ${categoryColors[selectedProject.category].text}`}>
                      {selectedProject.categoryLabel}
                    </span>
                  </div>
                  <DialogTitle className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </DialogTitle>
                </DialogHeader>

                <div className="space-y-6 mt-4">
                  {/* Description */}
                  <p className="text-gray-300">
                    {selectedProject.description}
                  </p>

                  {/* Problem */}
                  {selectedProject.problem && (
                    <div>
                      <h4 className="text-sm font-mono text-purple-400 mb-2">PROBLEMA</h4>
                      <p className="text-gray-400 text-sm">{selectedProject.problem}</p>
                    </div>
                  )}

                  {/* Architecture */}
                  {selectedProject.architecture && (
                    <div>
                      <h4 className="text-sm font-mono text-cyan-400 mb-2">ARQUITETURA</h4>
                      <p className="text-gray-400 text-sm">{selectedProject.architecture}</p>
                    </div>
                  )}

                  {/* Decisions */}
                  {selectedProject.decisions && (
                    <div>
                      <h4 className="text-sm font-mono text-emerald-400 mb-2">DECISÕES TÉCNICAS</h4>
                      <ul className="space-y-1">
                        {selectedProject.decisions.map((decision, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                            {decision}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Results */}
                  {selectedProject.results && (
                    <div>
                      <h4 className="text-sm font-mono text-purple-400 mb-2">RESULTADOS</h4>
                      <p className="text-gray-400 text-sm">{selectedProject.results}</p>
                    </div>
                  )}

                  {/* Stack */}
                  <div>
                    <h4 className="text-sm font-mono text-gray-400 mb-2">STACK</h4>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.stack.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 rounded-lg bg-white/5 text-gray-300 font-mono text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex gap-4 pt-4">
                    {selectedProject.githubUrl && (
                      <Button
                        variant="outline"
                        className="flex-1 border-white/20 text-white hover:bg-white/10"
                        onClick={() => window.open(selectedProject.githubUrl, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Ver Código
                      </Button>
                    )}
                    {selectedProject.liveUrl && (
                      <Button
                        className="flex-1 bg-purple-500 hover:bg-purple-400 text-white"
                        onClick={() => window.open(selectedProject.liveUrl, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Ver Demo
                      </Button>
                    )}
                  </div>
                </div>
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}
