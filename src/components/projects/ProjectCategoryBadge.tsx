import { categoryColors } from '@/components/projects/projectStyles';
import type { Project } from '@/types';

interface ProjectCategoryBadgeProps {
  project: Project;
  className?: string;
}

export function ProjectCategoryBadge({ project, className = '' }: ProjectCategoryBadgeProps) {
  const colors = categoryColors[project.category];

  return (
    <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full ${colors.bg} ${colors.border} border ${className}`}>
      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
      <span className={`font-mono text-xs ${colors.text}`}>
        {project.categoryLabel}
      </span>
    </div>
  );
}

