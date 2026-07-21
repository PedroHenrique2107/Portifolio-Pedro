import { ExternalLink, Github } from 'lucide-react';
import { ProjectCaseDiagram } from '@/components/projects/ProjectCaseDiagram';
import { ProjectCategoryBadge } from '@/components/projects/ProjectCategoryBadge';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import type { Project } from '@/types';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  return (
    <Dialog open={!!project} onOpenChange={onClose}>
      <DialogContent className="max-w-[92vw] sm:max-w-2xl bg-dark-100 border-white/10 text-white max-h-[90vh] overflow-y-auto">
        {project && (
          <>
            <DialogHeader>
              <ProjectCategoryBadge project={project} className="mb-4 w-fit" />
              <DialogTitle className="text-2xl font-bold text-white">
                {project.title}
              </DialogTitle>
            </DialogHeader>

            <div className="space-y-6 mt-4">
              <p className="text-gray-300">
                {project.description}
              </p>

              <ProjectCaseDiagram project={project} />

              {project.problem && (
                <div>
                  <h4 className="text-sm font-mono text-purple-400 mb-2">PROBLEMA</h4>
                  <p className="text-gray-400 text-sm">{project.problem}</p>
                </div>
              )}

              {project.architecture && (
                <div>
                  <h4 className="text-sm font-mono text-cyan-400 mb-2">ARQUITETURA</h4>
                  <p className="text-gray-400 text-sm">{project.architecture}</p>
                </div>
              )}

              {project.decisions && (
                <div>
                  <h4 className="text-sm font-mono text-emerald-400 mb-2">DECISÕES TÉCNICAS</h4>
                  <ul className="space-y-1">
                    {project.decisions.map((decision) => (
                      <li key={decision} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 mt-1.5 flex-shrink-0" />
                        {decision}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {project.results && (
                <div>
                  <h4 className="text-sm font-mono text-purple-400 mb-2">RESULTADOS</h4>
                  <p className="text-gray-400 text-sm">{project.results}</p>
                </div>
              )}

              <div>
                <h4 className="text-sm font-mono text-gray-400 mb-2">STACK</h4>
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="system-chip text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex gap-4 pt-4">
                {project.githubUrl && (
                  <Button
                    variant="outline"
                    className="flex-1 border-white/20 text-white hover:bg-white/10"
                    onClick={() => window.open(project.githubUrl, '_blank')}
                  >
                    <Github className="w-4 h-4 mr-2" />
                    Ver Código
                  </Button>
                )}
                {project.liveUrl && (
                  <Button
                    className="system-button-primary flex-1"
                    onClick={() => window.open(project.liveUrl, '_blank')}
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Versão Demo
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

