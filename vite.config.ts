import path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';
import { inspectAttr } from 'kimi-plugin-inspect-react';

function manualChunks(id: string) {
  if (!id.includes('node_modules')) return;

  if (id.includes('@react-three') || id.includes('three')) {
    return 'vendor-three';
  }

  if (id.includes('@tsparticles')) {
    return 'vendor-particles';
  }

  if (id.includes('framer-motion')) {
    return 'vendor-motion';
  }

  if (id.includes('react') || id.includes('react-dom')) {
    return 'vendor-react';
  }

  if (id.includes('@radix-ui')) {
    return 'vendor-radix';
  }
}

// https://vite.dev/config/
export default defineConfig(({ command }) => {
  const plugins = command === 'serve' ? [inspectAttr(), react()] : [react()];

  return {
    base: './',
    plugins,
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
      },
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks
        }
      }
    }
  };
});
