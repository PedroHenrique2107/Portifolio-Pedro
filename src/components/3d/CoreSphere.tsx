import { useEffect, useMemo, useRef, useState } from 'react';
import { Canvas, type ThreeEvent, useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import { dataCoreGraph } from '@/data/portfolio';

type DataCoreNode = (typeof dataCoreGraph.nodes)[number];

function StaticCoreFallback() {
  return (
    <div className="flex h-full w-full items-center justify-center">
      <div className="h-48 w-48 border border-cyan-500/30 bg-cyan-500/10" />
    </div>
  );
}

function getNodeById(id: string) {
  return dataCoreGraph.nodes.find((node) => node.id === id);
}

function mapNodeToVector(node: DataCoreNode) {
  const x = (node.x - 50) / 12;
  const y = (50 - node.y) / 12;
  const z = node.kind === 'technology' ? -0.35 : node.kind === 'project' ? 0.35 : 0;

  return new THREE.Vector3(x, y, z);
}

function isNodeActive(nodeId: string, activeNodeId: string | null) {
  if (!activeNodeId) return false;
  if (nodeId === activeNodeId) return true;

  return dataCoreGraph.links.some(
    (link) =>
      (link.source === activeNodeId && link.target === nodeId) ||
      (link.target === activeNodeId && link.source === nodeId)
  );
}

function DataCoreNodeMesh({
  node,
  activeNodeId,
  onActiveNodeChange
}: {
  node: DataCoreNode;
  activeNodeId: string | null;
  onActiveNodeChange: (nodeId: string | null) => void;
}) {
  const meshRef = useRef<THREE.Mesh>(null);
  const position = useMemo(() => mapNodeToVector(node), [node]);
  const active = isNodeActive(node.id, activeNodeId);
  const radius = node.kind === 'core' ? 0.34 : node.kind === 'project' ? 0.18 : 0.13;

  useFrame((state) => {
    if (!meshRef.current) return;
    const pulse = active ? 1.12 + Math.sin(state.clock.elapsedTime * 4) * 0.05 : 1;
    meshRef.current.scale.setScalar(pulse);
  });

  const handlePointerOver = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onActiveNodeChange(node.id);
  };

  const handlePointerOut = (event: ThreeEvent<PointerEvent>) => {
    event.stopPropagation();
    onActiveNodeChange(null);
  };

  return (
    <mesh
      ref={meshRef}
      position={position}
      onPointerOver={handlePointerOver}
      onPointerOut={handlePointerOut}
    >
      <sphereGeometry args={[radius, node.kind === 'core' ? 32 : 20, node.kind === 'core' ? 32 : 20]} />
      <meshBasicMaterial
        color={node.color}
        transparent
        opacity={node.kind === 'core' ? 0.58 : active ? 0.92 : 0.52}
      />
    </mesh>
  );
}

function DataCoreLink({
  source,
  target,
  active
}: {
  source: DataCoreNode;
  target: DataCoreNode;
  active: boolean;
}) {
  const positions = useMemo(() => {
    const sourcePoint = mapNodeToVector(source);
    const targetPoint = mapNodeToVector(target);
    return new Float32Array([
      sourcePoint.x,
      sourcePoint.y,
      sourcePoint.z,
      targetPoint.x,
      targetPoint.y,
      targetPoint.z
    ]);
  }, [source, target]);

  return (
    <line>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <lineBasicMaterial color={active ? '#00f0ff' : '#64748b'} transparent opacity={active ? 0.58 : 0.16} />
    </line>
  );
}

function DataCoreHalo() {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.z = state.clock.elapsedTime * 0.06;
  });

  return (
    <group ref={groupRef}>
      <mesh>
        <torusGeometry args={[1.9, 0.008, 12, 96]} />
        <meshBasicMaterial color="#00f0ff" transparent opacity={0.26} />
      </mesh>
      <mesh rotation={[0.7, 0.2, 0.6]}>
        <torusGeometry args={[2.45, 0.006, 12, 96]} />
        <meshBasicMaterial color="#10b981" transparent opacity={0.2} />
      </mesh>
      <mesh rotation={[1.15, -0.4, -0.45]}>
        <torusGeometry args={[2.85, 0.005, 12, 96]} />
        <meshBasicMaterial color="#8b5cf6" transparent opacity={0.14} />
      </mesh>
    </group>
  );
}

function DataCoreScene({
  activeNodeId,
  pointer,
  onActiveNodeChange
}: {
  activeNodeId: string | null;
  pointer: { x: number; y: number };
  onActiveNodeChange: (nodeId: string | null) => void;
}) {
  const groupRef = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!groupRef.current) return;
    groupRef.current.rotation.y = state.clock.elapsedTime * 0.08 + pointer.x * 0.18;
    groupRef.current.rotation.x = pointer.y * -0.14;
  });

  return (
    <>
      <ambientLight intensity={0.8} />
      <group ref={groupRef}>
        <DataCoreHalo />
        {dataCoreGraph.links.map((link) => {
          const source = getNodeById(link.source);
          const target = getNodeById(link.target);
          if (!source || !target) return null;

          const active =
            activeNodeId === link.source ||
            activeNodeId === link.target ||
            (!activeNodeId && link.strength === 'primary');

          return (
            <DataCoreLink
              key={`${link.source}-${link.target}`}
              source={source}
              target={target}
              active={active}
            />
          );
        })}
        {dataCoreGraph.nodes.map((node) => (
          <DataCoreNodeMesh
            key={node.id}
            node={node}
            activeNodeId={activeNodeId}
            onActiveNodeChange={onActiveNodeChange}
          />
        ))}
      </group>
    </>
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
          const active = isNodeActive(node.id, activeNodeId);

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

export function CoreSphere() {
  const [reducedMotion, setReducedMotion] = useState(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  });
  const [webglAvailable] = useState(() => {
    if (typeof document === 'undefined') return true;
    const canvas = document.createElement('canvas');
    return Boolean(canvas.getContext('webgl2') || canvas.getContext('webgl'));
  });
  const [contextLost, setContextLost] = useState(false);
  const [activeNodeId, setActiveNodeId] = useState<string | null>(null);
  const [pointer, setPointer] = useState({ x: 0, y: 0 });
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    const handleChange = (event: MediaQueryListEvent) => {
      setReducedMotion(event.matches);
    };
    mediaQuery.addEventListener('change', handleChange);

    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const handleContextLost = (event: Event) => {
      event.preventDefault();
      setContextLost(true);
    };

    const handleContextRestored = () => {
      setContextLost(false);
    };

    canvas.addEventListener('webglcontextlost', handleContextLost, false);
    canvas.addEventListener('webglcontextrestored', handleContextRestored, false);

    return () => {
      canvas.removeEventListener('webglcontextlost', handleContextLost, false);
      canvas.removeEventListener('webglcontextrestored', handleContextRestored, false);
    };
  }, [webglAvailable]);

  if (reducedMotion || !webglAvailable || contextLost) {
    return <StaticCoreFallback />;
  }

  return (
    <div
      className="relative h-full w-full"
      onPointerMove={(event) => {
        const rect = event.currentTarget.getBoundingClientRect();
        setPointer({
          x: (event.clientX - rect.left) / rect.width - 0.5,
          y: (event.clientY - rect.top) / rect.height - 0.5
        });
      }}
      onPointerLeave={() => {
        setPointer({ x: 0, y: 0 });
        setActiveNodeId(null);
      }}
    >
      <Canvas
        onCreated={({ gl }) => {
          canvasRef.current = gl.domElement;
        }}
        camera={{ position: [0, 0, 6], fov: 48 }}
        dpr={[1, 1.5]}
        gl={{ antialias: false, alpha: true, powerPreference: 'low-power' }}
      >
        <DataCoreScene
          activeNodeId={activeNodeId}
          pointer={pointer}
          onActiveNodeChange={setActiveNodeId}
        />
      </Canvas>
      <DataCoreLabels activeNodeId={activeNodeId} onActiveNodeChange={setActiveNodeId} />
    </div>
  );
}
