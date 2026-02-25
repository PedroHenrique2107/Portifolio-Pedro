import type { Project, Experience, TimelineItem, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: 'apisrestfull',
    title: 'APIsRESTFULL',
    category: 'apis', //  Mexer também no /types/index.ts
    categoryLabel: 'APIs & Microserviços',
    description: 'APIs robustas com arquitetura limpa e separação de responsabilidades, implementadas em Python/Flask',
    highlights: [
      'Design de APIs RESTful escaláveis',
      'Implementação em Python/Flask',
      'Testes automatizados e documentação',
      'Performance otimizada para alta carga'
    ],
    stack: ['Python', 'Flask', 'REST', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/pedrohenrique/apisrestfull',
    problem: 'Necessidade de APIs performáticas e bem estruturadas para integração entre sistemas heterogêneos.',
    architecture: 'Arquitetura em camadas com controllers, services e repositories. Separação clara de responsabilidades.',
    decisions: [
      'Python/Flask para lógica de negócio complexa',
      'PostgreSQL para dados relacionais',
      'Docker para consistência de ambiente',
      'Testes de contrato para garantir compatibilidade'
    ],
    results: 'APIs com latência < 50ms, 99.9% uptime, documentação automatizada.'
  },
  {
    id: 'shop-swift',
    title: 'Shop Swift Suite',
    category: 'fullstack', //  Mexer também no /types/index.ts
    categoryLabel: 'Fullstack',
    description: 'Plataforma de e-commerce completa com gestão de produtos, pedidos e integração com gateway de pagamentos.',
    highlights: [
      'Arquitetura fullstack moderna',
      'Sistema de autenticação seguro',
      'Gestão de estado e cache',
      'Integração com gateway de pagamentos'
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'SQLite', 'Docker',],
    githubUrl: 'https://github.com/pedrohenrique/shop-swift',
    problem: 'Criar uma plataforma de e-commerce escalável com experiência de usuário fluida.',
    architecture: 'Frontend SPA com React, backend em Node.js com arquitetura em camadas, SQLite para persistência leve, Docker para desenvolvimento e deploy.',
    decisions: [
      'TypeScript para type safety',
      'React para interface dinâmica',
      'SQLite para simplicidade e performance',
      'JWT com refresh tokens'
    ],
    results: 'Checkout otimizado, carrinho persistente, relatórios de vendas em tempo real.'
  },
  {
    id: 'valeti-system',
    title: 'Sistema de Valeti',
    category: 'fullstack', //  Mexer também no /types/index.ts
    categoryLabel: 'Fullstack',
    description: 'Sistema de gerenciamento de valets com tracking em tempo real e gestão de filas.',
    highlights: [
      'Interface responsiva e intuitiva',
      'Comunicação em tempo real',
      'Gestão de filas e priorização',
      'Relatórios e analytics'
    ],
    stack: ['React', 'Node.js', 'MySQL', 'WebSocket', 'Express'],
    githubUrl: 'https://github.com/pedrohenrique/valeti-system',
    problem: 'Otimizar o fluxo de valets em eventos e estabelecimentos com alta demanda.',
    architecture: 'Realtime com WebSocket, MySQL para persistência de dados, React para interface dinâmica.',
    decisions: [
      'WebSocket para updates em tempo real',
      'MySQL para schema estruturado',
      'Fila prioritária por tempo de espera',
      'Notificações push'
    ],
    results: 'Redução de 40% no tempo de espera, satisfação do cliente aumentada. Aumento de 60% na eficiência operacional.'
  },
  {
    id: 'agrolink',
    title: 'AgroLink - © MetaCore',
    category: 'aiot', //  Mexer também no /types/index.ts
    categoryLabel: 'AIoT & Infraestrutura',
    description: 'Plataforma de monitoramento agrícola com sensores IoT e dashboards com gestão em tempo real.',
    highlights: [
      'Integração com sensores IoT',
      'Pipeline de dados em tempo real',
      'Dashboards de monitoramento',
      'Alertas e automação',
      'Controle e autonomia total do sistema, com foco em performance, segurança e experiência do usuário.'
    ],
    stack: ['IoT', 'Python', 'Node.js', 'React', 'PostgreSQL', 'Flask', 'Docker', 'API REST', 'AWS'],
    githubUrl: 'https://github.com/pedrohenrique/agrolink',
    problem: 'Monitorar condições de solo e clima em tempo real para otimização agrícola.',
    architecture: 'MQTT para comunicação IoT, PostgreSQL para persistência de dados, Flask para backend.',
    decisions: [
      'MQTT para baixa latência',
      'PostgreSQL para dados de Geolocalização',
      'Docker para deployment edge',
      'Alertas baseados em thresholds'
    ],
    results: 'Economia de 25% em irrigação, detecção precoce de problemas. Aumento de 15% na produtividade agrícola. 70% de aumento na gestão financeira e operacional da safra'
  },
  /*{
    id: 'web-institutional',
    title: 'Desenvolvimento Web Institucional',
    githubUrl: '',
    category: 'frontend', //  Mexer também no /types/index.ts
    categoryLabel: 'Frontend',
    description: 'Sites institucionais com foco em performance, SEO e experiência do usuário.',
    highlights: [
      'SEO otimizado',
      'Performance 90+ Lighthouse',
      'Design responsivo',
      'CMS headless'
    ],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Strapi', 'Vercel'],
    /* githubUrl: 'https://github.com/pedrohenrique/web-institutional',
    problem: 'Criar presença digital profissional com alta performance e facilidade de manutenção.',
    architecture: 'Next.js com SSR/SSG, Strapi CMS para conteúdo, Tailwind para styling.',
    decisions: [
      'Next.js para SEO e performance',
      'SSG para páginas estáticas',
      'CMS headless para flexibilidade',
      'Vercel para deploy automático'
    ],
    results: 'Score 95+ no Lighthouse, ranking melhorado no Google.'
  } */
];

export const experiences: Experience[] = [
  {
    id: 'backend',
    title: 'Backend Developer',
    period: 'jan/2026 - Atualmente',
    company: 'SmartCompass',
    icon: 'Code2',
    color: 'green',
    items: [
      'Atuar nas rotinas de CI/CD, automatizando processos, versionamento e fluxo de deploy.',
      'Desenvolver e evoluir serviços e APIs com foco em clareza, performance e manutenibilidade.',
      'Garantir qualidade do código por meio de testes (unitários, integração e contratos), revisões criteriosas e boas práticas de engenharia.',
      'Desenvolvimento de soluções e automações com Python e NodeJs',
    ],
    quote: 'Aprendo todos os dias que código é apenas o começo. O sistema precisa operar, ser observável e evoluir. Necessário ter visão além do código para entregar valor real.'
  },
  {
    id: 'infra',
    title: 'Líder de Projetos de Infraestrutura | Analista de Programação',
    period: 'mar/2025 — dez/2025',
    company: 'AIoT Solution',
    icon: 'Server',
    color: 'cyan',
    items: [
      'Gestão ponta a ponta de projetos de segurança eletrônica, garantindo prazos, normas e qualidade.',
      'Implantação de monitoramento inteligente com câmeras IP, térmicas e analíticas para segurança e eficiência operacional.',
      'Configuração de redes seguras e plataformas de vídeo para gestão centralizada de monitoramento.',
      'Diagnóstico e resolução ágil de falhas em redes, câmeras e infraestrutura, remoto e em campo.',
      'Desenvolvimento e implantação de soluções com sensores, automação e IA para monitoramento, energia e segurança.'
    ],
    quote: 'A gestão de projetos de infraestrutura é um desafio complexo que exige visão estratégica, coordenação eficaz e capacidade de resolver problemas técnicos, principalmente quando envolve tecnologias emergentes como IoT e IA.'
  },
  {
    id: 'fullstack',
    title: 'Desenvolvedor Autônomo | Fullstack',
    period: 'ago/2023 — fev/2025',
    company: 'MetaCore - UniMetrocamp',
    icon: 'Brain',
    color: 'purple',
    items: [
      'Sistema completo de Gestão do Agronégocio, com módulos de CRM, ERP e E-commerce para produtores rurais.',
      'Desenvolvimento de APIs RESTful e GraphQL para integração entre sistemas e clientes.',
      'Implementação de soluções de infraestrutura em nuvem, garantindo escalabilidade e segurança.',
      'Análise de dados, IoT, Desenvolvimento de Software completo para qualquer um poder mexer de forma bem moderna, com foco em performance, segurança e experiência do usuário.',
      ],
    quote: 'O começo é a parte mais importante de qualquer jornada. Aprender a trabalhar em equipe gera resultados extraordinários — a convivência diária fortalece laços, transforma colegas em amigos e torna os desafios mais leves. Sonhar grande, manter o foco e nunca parar de estudar são atitudes que abrem caminhos, porque com dedicação, disciplina e constância, qualquer pessoa pode chegar onde deseja.'
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
  { name: 'Clean Architecture', category: 'architecture', logo: 'https://cdn.simpleicons.org/openapiinitiative' },
  { name: 'SOLID', category: 'architecture', logo: 'https://cdn.simpleicons.org/bookstack' },
  { name: 'Amazon Web Services', category: 'devops', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'CI/CD', category: 'devops', logo: 'https://cdn.simpleicons.org/githubactions' },
  { name: 'IaC', category: 'devops', logo: 'https://cdn.simpleicons.org/terraform' },
  { name: 'Docker', category: 'devops', logo: 'https://cdn.simpleicons.org/docker' },
  { name: 'Kubernetes', category: 'devops', logo: 'https://cdn.simpleicons.org/kubernetes' },
  { name: 'MySQL', category: 'database', logo: 'https://cdn.simpleicons.org/mysql' },
  { name: 'PostgreSQL', category: 'database', logo: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'JavaScript', category: 'backend', logo: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript', category: 'backend', logo: 'https://cdn.simpleicons.org/typescript' },
  { name: 'React', category: 'backend', logo: 'https://cdn.simpleicons.org/react' },
  { name: 'Node.js', category: 'backend', logo: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Python', category: 'backend', logo: 'https://cdn.simpleicons.org/python' },
  { name: 'Go', category: 'backend', logo: 'https://cdn.simpleicons.org/go' },
  { name: 'REST APIs', category: 'backend', logo: 'https://cdn.simpleicons.org/openapiinitiative' },
  { name: 'GraphQL', category: 'backend', logo: 'https://cdn.simpleicons.org/graphql' },
  { name: 'Linux', category: 'tools', logo: 'https://cdn.simpleicons.org/linux' },
  { name: 'Git', category: 'tools', logo: 'https://cdn.simpleicons.org/git' },
  { name: 'Grafana', category: 'tools', logo: 'https://cdn.simpleicons.org/grafana' },
 /* { name: 'POCs', category: 'tools', logo: 'https://cdn.simpleicons.org/lightning' } */
];

export const filterCategories = [
  { value: 'all', label: 'Todos' },
  { value: 'apis', label: 'APIs & Microserviços' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'aiot', label: 'AIoT & Infraestrutura' },
] as const;
