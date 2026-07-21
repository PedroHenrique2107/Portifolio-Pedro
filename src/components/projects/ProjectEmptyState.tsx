import { motion } from 'framer-motion';
import { panelRevealVariants } from '@/lib/motion';

interface ProjectEmptyStateProps {
  activeFilterLabel: string;
}

export function ProjectEmptyState({ activeFilterLabel }: ProjectEmptyStateProps) {
  return (
    <motion.div
      variants={panelRevealVariants}
      initial="hidden"
      animate="visible"
      className="max-w-2xl mx-auto"
    >
      <div className="system-panel p-6 sm:p-8 text-center">
        <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-300 font-mono text-xs mb-4">
          <span className="w-2 h-2 rounded-full bg-purple-400 animate-pulse" />
          Em desenvolvimento
        </span>
        <h3 className="text-white text-xl font-semibold mb-2">
          Novos projetos em breve
        </h3>
        <p className="text-gray-300 text-sm sm:text-base">
          Ainda não há projetos publicados em <span className="text-purple-300 font-medium">{activeFilterLabel}</span>.
          Estou finalizando novos cases e em breve terá atualizações nesta categoria.
        </p>
      </div>
    </motion.div>
  );
}

