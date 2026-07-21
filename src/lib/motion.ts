import type { Variants } from 'framer-motion';

export const motionViewport = {
  once: true,
  margin: '-100px'
} as const;

export const heroSequence = {
  badge: {
    hidden: { opacity: 1, y: 18 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.55, ease: 'easeOut' }
    }
  },
  title: {
    hidden: { opacity: 1, y: 28 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.65, delay: 0.08, ease: 'easeOut' }
    }
  },
  copy: {
    hidden: { opacity: 1, y: 24 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, delay: 0.16, ease: 'easeOut' }
    }
  },
  actions: {
    hidden: { opacity: 1, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.58, delay: 0.24, ease: 'easeOut' }
    }
  },
  visual: {
    hidden: { opacity: 0, scale: 0.96 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.7, delay: 0.18, ease: 'easeOut' }
    }
  }
} satisfies Record<string, Variants>;

export const sectionHeaderVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.58, ease: 'easeOut' }
  }
};

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' }
  }
};

export const staggerContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08
    }
  }
};

export const panelRevealVariants: Variants = {
  hidden: { opacity: 0, y: 26 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.48, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: 16,
    transition: { duration: 0.22, ease: 'easeIn' }
  }
};

export const projectCardVariants: Variants = {
  hidden: { opacity: 0, y: 24, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.42, ease: 'easeOut' }
  },
  exit: {
    opacity: 0,
    y: 12,
    scale: 0.98,
    transition: { duration: 0.22, ease: 'easeIn' }
  }
};
