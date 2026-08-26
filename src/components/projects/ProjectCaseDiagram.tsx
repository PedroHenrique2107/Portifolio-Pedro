import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { Project } from '@/types';

interface ProjectCaseDiagramProps {
  project: Project;
  expandable?: boolean;
}

export function ProjectCaseDiagram({ project, expandable = false }: ProjectCaseDiagramProps) {
  const [expanded, setExpanded] = useState(false);
  const showFullContent = expandable && expanded;
  const visibleStack = showFullContent ? project.stack : project.stack.slice(0, 4);

  return (
    <div className="system-panel-quiet p-4">
      <div className="grid gap-3 sm:grid-cols-[1fr_auto_1fr_auto_1fr] sm:items-stretch">
        <div className="min-w-0">
          <span className="system-label text-purple-300">Problema</span>
          <p className={`mt-1 text-xs leading-relaxed text-gray-400 ${showFullContent ? '' : 'line-clamp-3'}`}>
            {project.problem ?? project.description}
          </p>
        </div>

        <div className="hidden w-6 items-center sm:flex">
          <div className="h-px w-full bg-cyan-400/30" />
        </div>

        <div className="min-w-0 border-y border-white/5 py-3 sm:border-y-0 sm:py-0">
          <span className="system-label text-cyan-300">Stack</span>
          <div className="mt-2 flex flex-wrap gap-1">
            {visibleStack.map((tech) => (
              <span
                key={tech}
                className="rounded-sm border border-white/10 bg-white/[0.035] px-1.5 py-0.5 font-mono text-[10px] text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="hidden w-6 items-center sm:flex">
          <div className="h-px w-full bg-emerald-400/30" />
        </div>

        <div className="min-w-0">
          <span className="system-label text-emerald-300">Resultado</span>
          <p className={`mt-1 text-xs leading-relaxed text-gray-400 ${showFullContent ? '' : 'line-clamp-3'}`}>
            {project.results ?? 'Case em evolução'}
          </p>
        </div>
      </div>

      {expandable && (
        <button
          type="button"
          aria-expanded={expanded}
          onClick={(event) => {
            event.stopPropagation();
            setExpanded((current) => !current);
          }}
          onKeyDown={(event) => event.stopPropagation()}
          className="mt-4 flex min-h-10 w-full items-center justify-center gap-2 border-t border-white/5 pt-3 font-mono text-xs text-cyan-300 transition-colors hover:text-cyan-100 focus-visible:text-cyan-100"
        >
          {expanded ? 'Recolher detalhes' : 'Ler conteúdo completo'}
          <ChevronDown
            className={`h-3.5 w-3.5 transition-transform ${expanded ? 'rotate-180' : ''}`}
          />
        </button>
      )}
    </div>
  );
}
