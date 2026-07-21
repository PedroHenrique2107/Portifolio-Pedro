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
  return (
    <motion.div
      layout
      variants={projectCardVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      onClick={() => onSelect(project)}
      className="system-panel group flex flex-col p-4 sm:p-6 cursor-pointer transition-all duration-500 hover:-translate-y-2 hover:border-purple-400/25 hover:shadow-[0_18px_60px_rgba(0,0,0,0.28)]"
    >
      {imageUrl && (
        <div className="mb-4 overflow-hidden rounded-lg border border-white/10 bg-white/5">
          <img
            src={imageUrl}
            alt={`Preview do projeto ${project.title}`}
            loading="lazy"
            className="w-full h-36 sm:h-40 object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <ProjectCategoryBadge project={project} className="self-start mb-4" />

      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
        {project.title}
      </h3>

      <p className="text-gray-400 text-sm mb-4 line-clamp-2">
        {project.description}
      </p>

      <div className="mb-4">
        <ProjectCaseDiagram project={project} />
      </div>

      <ul className="space-y-1 mb-6">
        {project.highlights.slice(0, 2).map((highlight) => (
          <li key={highlight} className="flex items-start gap-2 text-gray-500 text-xs">
            <ChevronRight className="w-3 h-3 mt-0.5 flex-shrink-0 text-purple-400" />
            {highlight}
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-3 pt-4 border-t border-white/5 mt-auto">
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
            className="ml-auto flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-purple-500/15 border border-purple-500/30 text-purple-400 hover:bg-purple-500/25 hover:border-purple-500/60 hover:text-purple-300 transition-all duration-200 text-xs font-mono"
          >
            <ExternalLink className="w-3.5 h-3.5" />
            Versão Demo
          </a>
        )}
      </div>

      <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center">
          <ExternalLink className="w-4 h-4 text-purple-400" />
        </div>
      </div>
    </motion.div>
  );
}

