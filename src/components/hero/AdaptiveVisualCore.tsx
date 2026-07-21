import { lazy, Suspense, useEffect, useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { dataCoreGraph } from '@/data/portfolio';
import { useVisualTier, type VisualTier } from '@/hooks/use-visual-tier';

const CoreSphere = lazy(() =>
  import('@/components/3d/CoreSphere').then((module) => ({ default: module.CoreSphere }))
);

type DataCoreNode = (typeof dataCoreGraph.nodes)[number];

const viewBoxSize = 420;

function getNodeById(id: string) {
  return dataCoreGraph.nodes.find((node) => node.id === id);
}

function getNodePoint(node: DataCoreNode) {
  return {
    x: (node.x / 100) * viewBoxSize,
    y: (node.y / 100) * viewBoxSize
  };
}

function isNodeActive(node: DataCoreNode, activeNodeId: string | null) {
  if (!activeNodeId) return false;
  if (node.id === activeNodeId) return true;

  return dataCoreGraph.links.some(
    (link) =>
      (link.source === activeNodeId && link.target === node.id) ||
      (link.target === activeNodeId && link.source === node.id)
  );
}

function DataCoreSvg({ activeNodeId }: { activeNodeId: string | null }) {
  return (
    <svg
      viewBox={`0 0 ${viewBoxSize} ${viewBoxSize}`}
      role="img"
      aria-label="Grafo técnico do portfólio conectando projetos, tecnologias e arquitetura"
      className="h-[min(78vw,420px)] w-[min(78vw,420px)] max-w-full text-cyan-300"
    >
      <defs>
        <radialGradient id="dataCoreGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#00f0ff" stopOpacity="0.28" />
          <stop offset="58%" stopColor="#00f0ff" stopOpacity="0.08" />
          <stop offset="100%" stopColor="#00f0ff" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="210" cy="210" r="158" fill="url(#dataCoreGlow)" />
      <circle cx="210" cy="210" r="124" fill="none" stroke="currentColor" strokeOpacity="0.16" />
      <circle cx="210" cy="210" r="68" fill="none" stroke="currentColor" strokeOpacity="0.22" />

      {dataCoreGraph.links.map((link) => {
        const source = getNodeById(link.source);
        const target = getNodeById(link.target);
        if (!source || !target) return null;

        const sourcePoint = getNodePoint(source);
        const targetPoint = getNodePoint(target);
        const active =
          activeNodeId === link.source ||
          activeNodeId === link.target ||
          (!activeNodeId && link.strength === 'primary');

        return (
          <line
            key={`${link.source}-${link.target}`}
            x1={sourcePoint.x}
            y1={sourcePoint.y}
            x2={targetPoint.x}
            y2={targetPoint.y}
            stroke={active ? '#00f0ff' : 'currentColor'}
            strokeOpacity={active ? 0.54 : 0.13}
            strokeWidth={active ? 1.5 : 1}
          />
        );
      })}

      {dataCoreGraph.nodes.map((node) => {
        const point = getNodePoint(node);
        const active = isNodeActive(node, activeNodeId);
        const radius = node.kind === 'core' ? 34 : node.kind === 'project' ? 17 : 12;

        return (
          <g key={node.id}>
            <circle
              cx={point.x}
              cy={point.y}
              r={radius + (active ? 9 : 0)}
              fill={node.color}
              fillOpacity={active ? 0.16 : 0.05}
            />
            <circle
              cx={point.x}
              cy={point.y}
              r={radius}
              fill="#101318"
              stroke={node.color}
              strokeOpacity={active ? 0.95 : 0.42}
              strokeWidth={active ? 2 : 1}
            />
          </g>
        );
      })}
    </svg>
  );
}

function DataCoreLabels({
  activeNodeId,
  onActiveNodeChange
}: {
  activeNodeId: string | null;
  onActiveNodeChange: (nodeId: string | null) => void;
}) {
  return (
    <div className="absolute inset-0 hidden sm:block">
      {dataCoreGraph.nodes
        .filter((node) => node.kind !== 'core')
        .map((node) => {
          const active = isNodeActive(node, activeNodeId);

          return (
            <button
              key={node.id}
              type="button"
              onMouseEnter={() => onActiveNodeChange(node.id)}
              onMouseLeave={() => onActiveNodeChange(null)}
              onFocus={() => onActiveNodeChange(node.id)}
              onBlur={() => onActiveNodeChange(null)}
              className={`system-chip absolute max-w-32 -translate-x-1/2 -translate-y-1/2 justify-center border-cyan-400/20 bg-dark/80 text-center text-[10px] transition-all duration-200 ${
                active ? 'system-chip-active scale-105' : 'hover:border-cyan-400/35 hover:text-cyan-100'
              }`}
              style={{ left: `${node.x}%`, top: `${node.y}%` }}
            >
              {node.label}
            </button>
          );
        })}
    </div>
  );
}

function StaticDataCore({ animated }: { animated: boolean }) {
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const primaryProjectId = useMemo(() => dataCoreGraph.nodes.find((node) => node.kind === 'project')?.id ?? null, []);
  const currentActiveNodeId = activeNodeId ?? (animated ? primaryProjectId : null);

  return (
    <div className="relative flex h-full w-full items-center justify-center">
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        animate={animated ? { rotate: 360 } : undefined}
        transition={{ duration: 54, repeat: Infinity, ease: 'linear' }}
      >
        <DataCoreSvg activeNodeId={currentActiveNodeId} />
      </motion.div>
      <DataCoreLabels activeNodeId={currentActiveNodeId} onActiveNodeChange={setActiveNodeId} />
    </div>
  );
}

function VisualCoreFallback({ tier }: { tier: VisualTier }) {
  return <StaticDataCore animated={tier === 'medium'} />;
}

export function AdaptiveVisualCore() {
  const tier = useVisualTier();
  const [shouldLoadHighTier, setShouldLoadHighTier] = useState(false);

  useEffect(() => {
    if (tier !== 'high') {
      return;
    }

    const win = window as Window & {
      requestIdleCallback?: (callback: () => void, options?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };

    if (win.requestIdleCallback) {
      const idleId = win.requestIdleCallback(() => setShouldLoadHighTier(true), { timeout: 1800 });
      return () => win.cancelIdleCallback?.(idleId);
    }

    const timeoutId = window.setTimeout(() => setShouldLoadHighTier(true), 1400);
    return () => window.clearTimeout(timeoutId);
  }, [tier]);

  if (tier === 'high') {
    if (!shouldLoadHighTier) {
      return (
        <div
          className="h-full w-full"
          onPointerEnter={() => setShouldLoadHighTier(true)}
          onFocus={() => setShouldLoadHighTier(true)}
        >
          <VisualCoreFallback tier="medium" />
        </div>
      );
    }

    return (
      <Suspense fallback={<VisualCoreFallback tier="medium" />}>
        <CoreSphere />
      </Suspense>
    );
  }

  return <VisualCoreFallback tier={tier} />;
}
