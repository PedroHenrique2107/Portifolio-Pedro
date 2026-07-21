import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { ProjectEmptyState } from '@/components/projects/ProjectEmptyState';
import { ProjectFilters } from '@/components/projects/ProjectFilters';
import { ProjectGrid } from '@/components/projects/ProjectGrid';
import { ProjectModal } from '@/components/projects/ProjectModal';
import { filterCategories, projects } from '@/data/portfolio';
import { revealVariants, sectionHeaderVariants } from '@/lib/motion';
import type { FilterCategory, Project } from '@/types';

const projectImageModules = import.meta.glob('../image/*.{png,jpg,jpeg,webp,avif}', {
  eager: true,
  import: 'default'
}) as Record<string, string>;

const projectImages = Object.fromEntries(
  Object.entries(projectImageModules).map(([path, url]) => [path.split('/').pop() ?? '', url])
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
  const activeFilterLabel = filterCategories.find((cat) => cat.value === activeFilter)?.label ?? 'esta categoria';

  return (
    <section id="projects" className="relative py-16 sm:py-24 lg:py-32 bg-dark-100">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          ref={containerRef}
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
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

        <motion.div
          variants={revealVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12"
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

        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </div>
    </section>
  );
}

