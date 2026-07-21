import { filterCategories } from '@/data/portfolio';
import type { FilterCategory } from '@/types';

interface ProjectFiltersProps {
  activeFilter: FilterCategory;
  onFilterChange: (filter: FilterCategory) => void;
}

export function ProjectFilters({ activeFilter, onFilterChange }: ProjectFiltersProps) {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {filterCategories.map((cat) => (
        <button
          key={cat.value}
          type="button"
          aria-pressed={activeFilter === cat.value}
          onClick={() => onFilterChange(cat.value)}
          className={`min-h-10 px-3 py-1.5 font-mono text-sm transition-all duration-300 sm:px-4 sm:py-2 ${
            activeFilter === cat.value
              ? 'border-purple-400/45 bg-purple-400/10 text-purple-100'
              : 'system-chip hover:border-white/20 hover:text-white'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
