import { motion } from 'framer-motion';
import { ChevronRight, ExternalLink, Github } from 'lucide-react';
import { ProjectCategoryBadge } from '@/components/projects/ProjectCategoryBadge';
import { ProjectCaseDiagram } from '@/components/projects/ProjectCaseDiagram';
import { projectCardVariants } from '@/lib/motion';
import type { Project } from '@/types';

interface ProjectCardProps {
  project: Project;
  imageUrl?: string;
  onSelect: (project: Project) => void;
}

export function ProjectCard({ project, imageUrl, onSelect }: ProjectCardProps) {
  const openProject = () => onSelect(project);

  return (
    <motion.div
      layout
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      role="button"
      tabIndex={0}
      aria-label={`Abrir case do projeto ${project.title}`}
      onClick={openProject}
      onKeyDown={(event) => {
        if (event.key === 'Enter' || event.key === ' ') {
          event.preventDefault();
          openProject();
        }
      }}
      className="system-panel group flex min-h-full cursor-pointer flex-col p-4 transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/25 hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)] focus-visible:border-purple-400/40 sm:p-6"
    >
      {imageUrl && (
        <div className="mb-4 overflow-hidden border border-white/10 bg-white/5">
          <img
            src={imageUrl}
            alt={`Preview do projeto ${project.title}`}
            loading="lazy"
            className="h-36 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-40"
          />
        </div>
      )}

      <ProjectCategoryBadge project={project} className="mb-4 self-start" />

      <h3 className="mb-3 text-xl font-semibold text-white transition-colors group-hover:text-purple-400">
        {project.title}
      </h3>

      <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-gray-400">
        {project.description}
      </p>

      <div className="mb-4">
        <ProjectCaseDiagram project={project} />
      </div>

      <ul className="mb-6 space-y-1">
        {project.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-xs leading-relaxed text-gray-500">
            <ChevronRight className="mt-0.5 h-3 w-3 flex-shrink-0 text-purple-400" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="mt-auto flex flex-wrap items-center gap-3 border-t border-white/5 pt-4">
        {project.githubUrl && (
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="flex items-center gap-2 text-sm text-gray-400 transition-colors hover:text-white"
          >
            <Github className="h-4 w-4" />
            <span className="font-mono">Código</span>
          </a>
        )}
        {project.liveUrl && (
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(event) => event.stopPropagation()}
            className="ml-auto flex items-center gap-1.5 rounded-md border border-purple-500/30 bg-purple-500/15 px-3 py-1.5 font-mono text-xs text-purple-300 transition-all duration-200 hover:border-purple-500/60 hover:bg-purple-500/25"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            Versão Demo
          </a>
        )}
      </div>

      <div className="absolute right-4 top-4 opacity-0 transition-opacity group-hover:opacity-100">
        <div className="flex h-8 w-8 items-center justify-center rounded-md bg-purple-500/20">
          <ExternalLink className="h-4 w-4 text-purple-400" />
        </div>
      </div>
    </motion.div>
  );
}
