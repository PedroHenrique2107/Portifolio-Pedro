import { lazy, Suspense, useMemo } from 'react';
import { motion } from 'framer-motion';
import { useVisualTier, type VisualTier } from '@/hooks/use-visual-tier';

const CoreSphere = lazy(() =>
  import('@/components/3d/CoreSphere').then((module) => ({ default: module.CoreSphere }))
);

const stackNodes = [
  { label: 'React', x: 50, y: 18 },
  { label: 'Node', x: 77, y: 37 },
  { label: 'Python', x: 68, y: 72 },
  { label: 'Docker', x: 32, y: 72 },
  { label: 'Cloud', x: 23, y: 37 }
] as const;

function StaticCoreGraphic({ showNodeLabels = true }: { showNodeLabels?: boolean }) {
  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <svg
        viewBox="0 0 420 420"
        role="img"
        aria-label="Grafo técnico simplificado da stack"
        className="h-[min(78vw,420px)] w-[min(78vw,420px)] max-w-full text-cyan-300"
      >
        <defs>
          <radialGradient id="coreGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.28" />
            <stop offset="62%" stopColor="#00f0ff" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
          </radialGradient>
        </defs>
        <circle cx="210" cy="210" r="145" fill="url(#coreGlow)" />
        <circle cx="210" cy="210" r="92" fill="none" stroke="currentColor" strokeOpacity="0.35" />
        <circle cx="210" cy="210" r="42" fill="#00f0ff" fillOpacity="0.08" stroke="currentColor" strokeOpacity="0.72" />
        {stackNodes.map((node) => {
          const cx = (node.x / 100) * 420;
          const cy = (node.y / 100) * 420;
          return (
            <g key={node.label}>
              <line x1="210" y1="210" x2={cx} y2={cy} stroke="currentColor" strokeOpacity="0.16" />
              <circle cx={cx} cy={cy} r="18" fill="#101318" stroke="currentColor" strokeOpacity="0.5" />
              {showNodeLabels && (
                <text x={cx} y={cy + 34} textAnchor="middle" fill="#94a3b8" fontSize="12" fontFamily="monospace">
                  {node.label}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
}

function MediumCoreGraphic() {
  const nodes = useMemo(() => stackNodes, []);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 42, repeat: Infinity, ease: 'linear' }}
      >
        <StaticCoreGraphic showNodeLabels={false} />
      </motion.div>
      {nodes.map((node, index) => (
        <motion.div
          key={node.label}
          className="system-chip absolute border-cyan-400/20 bg-dark/80 text-cyan-100"
          style={{
            left: `${node.x}%`,
            top: `${node.y}%`,
            transform: 'translate(-50%, -50%)'
          }}
          animate={{ y: [0, index % 2 === 0 ? -5 : 5, 0] }}
          transition={{ duration: 2.6 + index * 0.2, repeat: Infinity, ease: 'easeInOut' }}
          whileTap={{ scale: 0.96 }}
        >
          {node.label}
        </motion.div>
      ))}
    </div>
  );
}

function VisualCoreFallback({ tier }: { tier: VisualTier }) {
  return tier === 'medium' ? <MediumCoreGraphic /> : <StaticCoreGraphic />;
}

export function AdaptiveVisualCore() {
  const tier = useVisualTier();

  if (tier === 'high') {
    return (
      <Suspense fallback={<VisualCoreFallback tier="medium" />}>
        <CoreSphere />
      </Suspense>
    );
  }

  return <VisualCoreFallback tier={tier} />;
}
