import { lazy, Suspense, useMemo, useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectEmptyState } from '@/components/projects/ProjectEmptyState';
import { ProjectFilters } from '@/components/projects/ProjectFilters';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { filterCategories, projects } from '@/data/portfolio';
import { revealVariants, sectionHeaderVariants } from '@/lib/motion';
import type { FilterCategory, Project } from '@/types';

const ProjectModal = lazy(() =>
  import('@/components/projects/ProjectModal').then((module) => ({ default: module.ProjectModal }))
);

const projectImageModules = import.meta.glob('../image/optimized/*.webp', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const projectImages = Object.fromEntries(
  Object.entries(projectImageModules).map(([path, url]) => [path.replace('../image/', ''), url])
) as Record<string, string>;

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('all');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const portfolioProjects: readonly Project[] = projects;

  const filteredProjects = activeFilter === 'all'
    ? portfolioProjects
    : portfolioProjects.filter((project) => project.category === activeFilter);
  const activeFilterLabel = filterCategories.find((category) => category.value === activeFilter)?.label ?? 'esta categoria';
  const stackSignals = useMemo(
    () => Array.from(new Set(filteredProjects.flatMap((project) => project.stack))).slice(0, 6),
    [filteredProjects]
  );

  return (
    <section id="projects" className="relative bg-dark-100 py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          ref={containerRef}
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-10 sm:mb-12"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="system-divider-rare" />
            <span className="font-mono text-sm text-purple-400">02</span>
            <div className="h-px flex-1 bg-gradient-to-l from-purple-400/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Prova <span className="text-gradient-purple">Técnica</span>
          </h2>
          <p className="mx-auto max-w-2xl text-center text-gray-400">
            Projetos que demonstram engenharia real, arquitetura limpa e decisões técnicas fundamentadas.
          </p>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-8 grid gap-4 lg:grid-cols-[0.7fr_1.3fr]"
        >
          <div className="system-panel-quiet p-4">
            <span className="system-label text-purple-300">Filtro ativo</span>
            <div className="mt-2 flex items-end justify-between gap-4">
              <strong className="text-2xl text-white">{filteredProjects.length}</strong>
              <span className="text-right font-mono text-xs text-gray-400">{activeFilterLabel}</span>
            </div>
          </div>

          <div className="system-panel-quiet p-4">
            <span className="system-label text-cyan-300">Stack em destaque</span>
            <div className="mt-3 flex flex-wrap gap-2">
              {stackSignals.map((stack) => (
                <span key={stack} className="system-chip text-gray-300">
                  {stack}
                </span>
              ))}
            </div>
          </div>
        </motion.div>

        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-10 sm:mb-12"
        >
          <ProjectFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
        </motion.div>

        {filteredProjects.length > 0 ? (
          <ProjectGrid
            projects={filteredProjects}
            projectImages={projectImages}
            onSelectProject={setSelectedProject}
          />
        ) : (
          <ProjectEmptyState activeFilterLabel={activeFilterLabel} />
        )}

        {selectedProject && (
          <Suspense fallback={null}>
            <ProjectModal
              project={selectedProject}
              onClose={() => setSelectedProject(null)}
            />
          </Suspense>
        )}
      </div>
    </section>
  );
}
