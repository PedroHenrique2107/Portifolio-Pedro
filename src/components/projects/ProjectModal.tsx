import { ExternalLink, Github } from 'lucide-react';
import { ProjectCaseDiagram } from '@/components/projects/ProjectCaseDiagram';
import { ProjectCategoryBadge } from '@/components/projects/ProjectCategoryBadge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { ReactNode } from 'react';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

function CaseSection({
  label,
  tone,
  children
}: {
  label: string;
  tone: 'cyan' | 'emerald' | 'purple';
  children: ReactNode;
}) {
  const toneClasses = {
    cyan: 'text-cyan-300 border-cyan-400/20',
    emerald: 'text-emerald-300 border-emerald-400/20',
    purple: 'text-purple-300 border-purple-400/20'
  }[tone];

  return (
    <section className={`border-l pl-4 ${toneClasses}`}>
      <h4 className="system-label mb-2">{label}</h4>
      <div className="text-sm leading-relaxed text-gray-400">{children}</div>
    </section>
  );
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-h-[90vh] max-w-[92vw] overflow-y-auto border-white/10 bg-dark-100 text-white sm:max-w-3xl">
        {project && (
          <>
            <DialogHeader>
              <ProjectCategoryBadge project={project} className="mb-4 w-fit" />
              <DialogTitle className="text-2xl font-bold leading-tight text-white sm:text-3xl">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              <p className="max-w-2xl text-base leading-relaxed text-gray-300">
                {project.description}
              </p>

              <ProjectCaseDiagram project={project} />

              <div className="grid gap-5 sm:grid-cols-2">
                {project.problem && (
                  <CaseSection label="Problema" tone="purple">
                    <p>{project.problem}</p>
                  </CaseSection>
                )}

                {project.architecture && (
                  <CaseSection label="Arquitetura" tone="cyan">
                    <p>{project.architecture}</p>
                  </CaseSection>
                )}

                {project.decisions && (
                  <CaseSection label="Decisões técnicas" tone="emerald">
                    <ul className="space-y-2">
                      {project.decisions.map((decision) => (
                        <li key={decision} className="flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400" />
                          {decision}
                        </li>
                      ))}
                    </ul>
                  </CaseSection>
                )}

                {project.results && (
                  <CaseSection label="Resultados" tone="purple">
                    <p>{project.results}</p>
                  </CaseSection>
                )}
              </div>

              <div>
                <h4 className="system-label mb-3 text-gray-400">Stack</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="system-chip text-gray-300">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-col gap-3 border-t border-white/5 pt-4 sm:flex-row">
                {project.githubUrl && (
                  <Button
                    asChild
                    variant="outline"
                    className="system-button-outline flex-1"
                  >
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                      <Github className="h-4 w-4" />
                      Ver Código
                    </a>
                  </Button>
                )}
                {project.liveUrl && (
                  <Button asChild className="system-button-primary flex-1">
                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="h-4 w-4" />
                      Versão Demo
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
