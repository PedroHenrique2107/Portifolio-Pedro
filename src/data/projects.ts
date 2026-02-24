import type { Project, Experience, TimelineItem, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: 'apisrestfull',
    title: 'APIsRESTFULL',
    category: 'apis',
    categoryLabel: 'APIs & Microserviços',
    description: 'APIs robustas com arquitetura limpa e separação de responsabilidades, implementadas em Python/Flask e Go.',
    highlights: [
      'Design de APIs RESTful escaláveis',
      'Implementação em Python/Flask e Go',
      'Testes automatizados e documentação',
      'Performance otimizada para alta carga'
    ],
    stack: ['Python', 'Flask', 'Go', 'REST', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/pedrohenrique/apisrestfull',
    problem: 'Necessidade de APIs performáticas e bem estruturadas para integração entre sistemas heterogêneos.',
    architecture: 'Arquitetura em camadas com controllers, services e repositories. Separação clara de responsabilidades.',
    decisions: [
      'Uso de Go para endpoints de alta performance',
      'Python/Flask para lógica de negócio complexa',
      'Docker para consistência de ambiente',
      'Testes de contrato para garantir compatibilidade'
    ],
    results: 'APIs com latência < 50ms, 99.9% uptime, documentação automatizada.'
  },
  {
    id: 'shop-swift',
    title: 'Shop Swift Suite',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Plataforma de e-commerce completa com gestão de produtos, pedidos e integração com gateway de pagamentos.',
    highlights: [
      'Arquitetura fullstack moderna',
      'Sistema de autenticação seguro',
      'Gestão de estado e cache',
      'Integração com gateway de pagamentos'
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'PostgreSQL', 'Redis', 'Stripe'],
    githubUrl: 'https://github.com/pedrohenrique/shop-swift',
    problem: 'Criar uma plataforma de e-commerce escalável com experiência de usuário fluida.',
    architecture: 'Frontend SPA com React, backend em Node.js com arquitetura em camadas, cache Redis.',
    decisions: [
      'TypeScript para type safety',
      'Redis para cache de produtos populares',
      'Stripe para processamento seguro',
      'JWT com refresh tokens'
    ],
    results: 'Checkout otimizado, carrinho persistente, relatórios de vendas em tempo real.'
  },
  {
    id: 'valeti-system',
    title: 'Sistema de Valeti',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Sistema de gerenciamento de valets com tracking em tempo real e gestão de filas.',
    highlights: [
      'Interface responsiva e intuitiva',
      'Comunicação em tempo real',
      'Gestão de filas e priorização',
      'Relatórios e analytics'
    ],
    stack: ['React', 'Node.js', 'MongoDB', 'WebSocket', 'Express'],
    githubUrl: 'https://github.com/pedrohenrique/valeti-system',
    problem: 'Otimizar o fluxo de valets em eventos e estabelecimentos com alta demanda.',
    architecture: 'Realtime com WebSocket, MongoDB para flexibilidade de dados, React para interface dinâmica.',
    decisions: [
      'WebSocket para updates em tempo real',
      'MongoDB para schema flexível',
      'Fila prioritária por tempo de espera',
      'Notificações push'
    ],
    results: 'Redução de 40% no tempo de espera, satisfação do cliente aumentada.'
  },
  {
    id: 'agrolink',
    title: 'AgroLink',
    category: 'aiot',
    categoryLabel: 'AIoT & Infraestrutura',
    description: 'Plataforma de monitoramento agrícola com sensores IoT e dashboards em tempo real.',
    highlights: [
      'Integração com sensores IoT',
      'Pipeline de dados em tempo real',
      'Dashboards de monitoramento',
      'Alertas e automação'
    ],
    stack: ['IoT', 'MQTT', 'Node.js', 'InfluxDB', 'Grafana', 'Docker'],
    githubUrl: 'https://github.com/pedrohenrique/agrolink',
    problem: 'Monitorar condições de solo e clima em tempo real para otimização agrícola.',
    architecture: 'MQTT para comunicação IoT, InfluxDB para séries temporais, Grafana para visualização.',
    decisions: [
      'MQTT para baixa latência',
      'InfluxDB para dados temporais',
      'Docker para deployment edge',
      'Alertas baseados em thresholds'
    ],
    results: 'Economia de 25% em irrigação, detecção precoce de problemas.'
  },
  {
    id: 'web-institutional',
    title: 'Desenvolvimento Web Institucional',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Sites institucionais com foco em performance, SEO e experiência do usuário.',
    highlights: [
      'SEO otimizado',
      'Performance 90+ Lighthouse',
      'Design responsivo',
      'CMS headless'
    ],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Strapi', 'Vercel'],
    githubUrl: 'https://github.com/pedrohenrique/web-institutional',
    problem: 'Criar presença digital profissional com alta performance e facilidade de manutenção.',
    architecture: 'Next.js com SSR/SSG, Strapi CMS para conteúdo, Tailwind para styling.',
    decisions: [
      'Next.js para SEO e performance',
      'SSG para páginas estáticas',
      'CMS headless para flexibilidade',
      'Vercel para deploy automático'
    ],
    results: 'Score 95+ no Lighthouse, ranking melhorado no Google.'
  }
];

export const experiences: Experience[] = [
  {
    id: 'infra',
    title: 'Infraestrutura & Operação',
    period: '2022 — 2023',
    icon: 'Server',
    color: 'green',
    items: [
      'Liderança técnica em CFTV para usinas fotovoltaicas',
      'Redes IP, VMS, latência e disponibilidade',
      'Diagnóstico de falhas em produção',
      'POCs e decisões arquiteturais',
      'Conexão entre campo e engenharia'
    ],
    quote: 'Aprendi que sistemas precisam funcionar sob pressão, não apenas em ambiente ideal.'
  },
  {
    id: 'backend',
    title: 'Backend & Arquitetura',
    period: '2023 — 2024',
    icon: 'Code2',
    color: 'cyan',
    items: [
      'Desenvolvimento e evolução de APIs',
      'Microsserviços e integrações',
      'Testes unitários, integração e contratos',
      'Observabilidade: logs estruturados, métricas, tracing',
      'Resiliência: circuit breaker, caching, idempotência'
    ],
    quote: 'Código é apenas o começo. O sistema precisa operar.'
  },
  {
    id: 'mindset',
    title: 'Mentalidade de Engenharia',
    period: '2024 — Presente',
    icon: 'Brain',
    color: 'purple',
    items: [
      'Clean Architecture & SOLID',
      'CI/CD & DevOps',
      'IaC & Cloud Native',
      'Docker & Kubernetes',
      'Observabilidade & SRE'
    ],
    quote: 'Engenharia é sobre resolver problemas, não apenas escrever código.'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Arquitetura Orientada a Eventos',
    description: 'Aprofundamento em sistemas desacoplados e escaláveis com processamento assíncrono.',
    technologies: ['Apache Kafka', 'RabbitMQ', 'Event Sourcing']
  },
  {
    year: '2025',
    title: 'Kubernetes & Cloud Native',
    description: 'Orquestração de containers, service mesh e estratégias multi-cloud.',
    technologies: ['Kubernetes', 'Istio', 'Terraform', 'AWS/GCP']
  },
  {
    year: '2026',
    title: 'SRE & Confiabilidade',
    description: 'SLIs, SLOs, error budgets e chaos engineering para sistemas resilientes.',
    technologies: ['Prometheus', 'Grafana', 'Chaos Monkey', 'SLOs']
  },
  {
    year: '2027',
    title: 'Edge Computing & AIoT',
    description: 'Processamento no edge com latência mínima e automação inteligente.',
    technologies: ['Edge Computing', 'ML Inference', '5G', 'Real-time OS']
  }
];

export const skills: Skill[] = [
  { name: 'Clean Architecture', category: 'architecture' },
  { name: 'SOLID', category: 'architecture' },
  { name: 'Design Patterns', category: 'architecture' },
  { name: 'CI/CD', category: 'devops' },
  { name: 'IaC', category: 'devops' },
  { name: 'Docker', category: 'devops' },
  { name: 'Kubernetes', category: 'devops' },
  { name: 'MySQL', category: 'database' },
  { name: 'PostgreSQL', category: 'database' },
  { name: 'MongoDB', category: 'database' },
  { name: 'Redis', category: 'database' },
  { name: 'Node.js', category: 'backend' },
  { name: 'Python', category: 'backend' },
  { name: 'Go', category: 'backend' },
  { name: 'REST APIs', category: 'backend' },
  { name: 'GraphQL', category: 'backend' },
  { name: 'Linux', category: 'tools' },
  { name: 'Git', category: 'tools' },
  { name: 'Observability', category: 'tools' },
  { name: 'POCs', category: 'tools' }
];

export const filterCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'apis', label: 'APIs & Microserviços' },
  { value: 'aiot', label: 'AIoT & Infraestrutura' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'systems', label: 'Sistemas Operacionais' }
] as const;
