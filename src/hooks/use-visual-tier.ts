import { useEffect, useState } from 'react';

export type VisualTier = 'high' | 'medium' | 'low';

const FRAME_SAMPLE_COUNT = 12;
const LOW_FPS_THRESHOLD = 42;
const HIGH_FPS_THRESHOLD = 54;

function getInitialTier(): VisualTier {
  if (typeof window === 'undefined' || typeof navigator === 'undefined') {
    return 'low';
  }

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion) return 'low';

  const cpu = navigator.hardwareConcurrency ?? 4;
  const memory = (navigator as Navigator & { deviceMemory?: number }).deviceMemory ?? 4;
  const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

  if (cpu <= 4 || memory <= 4) return 'low';
  if (viewportWidth < 1024) return 'medium';
  if (cpu >= 8 && memory >= 8) return 'high';

  return 'medium';
}

function measureFrameRate(callback: (fps: number) => void) {
  let frame = 0;
  let start = 0;
  let rafId = 0;

  const tick = (timestamp: number) => {
    if (frame === 0) {
      start = timestamp;
    }

    frame += 1;

    if (frame >= FRAME_SAMPLE_COUNT) {
      const elapsedSeconds = Math.max((timestamp - start) / 1000, 0.001);
      callback(frame / elapsedSeconds);
      return;
    }

    rafId = window.requestAnimationFrame(tick);
  };

  rafId = window.requestAnimationFrame(tick);

  return () => {
    window.cancelAnimationFrame(rafId);
  };
}

function resolveTierFromFps(currentTier: VisualTier, fps: number): VisualTier {
  if (currentTier === 'low') return 'low';
  if (fps < LOW_FPS_THRESHOLD) return 'low';
  if (currentTier === 'high' && fps >= HIGH_FPS_THRESHOLD) return 'high';
  return 'medium';
}

export function useVisualTier() {
  const [tier, setTier] = useState<VisualTier>(() => getInitialTier());

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

    const updateForMotionPreference = () => {
      setTier(getInitialTier());
    };

    mediaQuery.addEventListener('change', updateForMotionPreference);

    const cancelMeasurement = measureFrameRate((fps) => {
      setTier((currentTier) => resolveTierFromFps(currentTier, fps));
    });

    return () => {
      mediaQuery.removeEventListener('change', updateForMotionPreference);
      cancelMeasurement();
    };
  }, []);

  return tier;
}
