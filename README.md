# Portfólio Pedro Henrique

SPA de portfólio construída com React, TypeScript, Vite, TailwindCSS, Framer Motion e visualizações interativas com React Three Fiber.

## Stack

- React 19
- TypeScript
- Vite
- TailwindCSS
- Framer Motion
- React Three Fiber + Three.js
- Radix UI para Dialog/Slot/Label
- Web3Forms para contato sem backend próprio
- Sharp para otimização local de imagens

## Scripts

```bash
npm run dev
npm run build
npm run lint
npm run preview
npm run optimize:images
```

## Arquitetura

- `src/data/portfolio.ts`: fonte única de dados do portfólio, projetos, experiências, timeline, skills, métricas e Data Core.
- `src/types/index.ts`: tipos derivados dos dados canônicos.
- `src/sections/`: seções principais da SPA.
- `src/components/projects/`: cards, filtros, modal e diagrama dos cases.
- `src/components/hero/AdaptiveVisualCore.tsx`: seleção de tier visual conforme capacidade do dispositivo.
- `src/components/3d/CoreSphere.tsx`: versão 3D do Data Core, carregada de forma preguiçosa.
- `src/lib/motion.ts`: presets de animação reutilizáveis.

## Visual Tiers

O hero usa três níveis de fidelidade:

- `high`: Data Core 3D com React Three Fiber, carregado após idle ou interação.
- `medium`: Data Core SVG animado e interativo.
- `low`: SVG estático para dispositivos fracos ou `prefers-reduced-motion`.

## Imagens

As imagens originais ficam em `src/image/`. O script abaixo gera WebP e AVIF em `src/image/optimized/`:

```bash
npm run optimize:images
```

O build importa apenas os WebP otimizados usados nos cards de projeto.

## Contato

O formulário usa Web3Forms. Configure a chave no `.env`:

```env
VITE_WEB3FORMS_ACCESS_KEY=YOUR_WEB3FORMS_ACCESS_KEY
```

O formulário inclui honeypot com o campo `botcheck`.

## Validação

Antes de publicar:

```bash
npm run build
npm run lint
npm audit
npm run preview
```

Também valide:

- navegação mobile e desktop;
- modal dos projetos;
- links de GitHub, LinkedIn, email e currículo;
- formulário com chave Web3Forms válida;
- screenshots em larguras mobile e desktop.
