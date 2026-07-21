import type { Project } from '@/types';

interface ProjectCaseDiagramProps {
  project: Project;
}

export function ProjectCaseDiagram({ project }: ProjectCaseDiagramProps) {
  const visibleStack = project.stack.slice(0, 4);

  return (
    <div className="system-panel-quiet p-4">
      <div className="grid grid-cols-[1fr_auto_1fr_auto_1fr] items-center gap-2 text-center">
        <div className="min-w-0">
          <span className="system-label text-purple-300">Problema</span>
          <p className="mt-1 truncate text-xs text-gray-400">{project.problem ?? project.description}</p>
        </div>

        <div className="h-px w-6 bg-cyan-400/30" />

        <div className="min-w-0">
          <span className="system-label text-cyan-300">Stack</span>
          <div className="mt-2 flex flex-wrap justify-center gap-1">
            {visibleStack.map((tech) => (
              <span key={tech} className="rounded-sm border border-white/10 bg-white/[0.035] px-1.5 py-0.5 font-mono text-[10px] text-gray-400">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="h-px w-6 bg-emerald-400/30" />

        <div className="min-w-0">
          <span className="system-label text-emerald-300">Resultado</span>
          <p className="mt-1 truncate text-xs text-gray-400">{project.results ?? 'Case em evolução'}</p>
        </div>
      </div>
    </div>
  );
}

