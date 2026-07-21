import { AnimatePresence, motion } from 'framer-motion';
import { ProjectCard } from '@/components/projects/ProjectCard';
import { staggerContainerVariants } from '@/lib/motion';
import type { Project } from '@/types';

interface ProjectGridProps {
  projects: readonly Project[];
  projectImages: Record<string, string>;
  onSelectProject: (project: Project) => void;
}

export function ProjectGrid({ projects, projectImages, onSelectProject }: ProjectGridProps) {
  return (
    <motion.div
      layout
      variants={staggerContainerVariants}
      initial="hidden"
      animate="visible"
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      <AnimatePresence mode="popLayout">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            imageUrl={project.image ? projectImages[project.image] : undefined}
            onSelect={onSelectProject}
          />
        ))}
      </AnimatePresence>
    </motion.div>
  );
}

