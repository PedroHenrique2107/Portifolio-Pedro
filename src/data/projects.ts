import type { Project, Experience, TimelineItem, Skill } from '@/types';

export const projects: Project[] = [
  {
    id: 'apisrestfull',
    title: 'APIsRESTFULL',
    image: 'APIRESTful.png',
    category: 'apis', //  Mexer tambÃ©m no /types/index.ts
    categoryLabel: 'APIs & MicroserviÃ§os',
    description: 'APIs robustas com arquitetura limpa e separaÃ§Ã£o de responsabilidades, implementadas em Python/Flask',
    highlights: [
      'Design de APIs RESTful escalÃ¡veis',
      'ImplementaÃ§Ã£o em Python/Flask',
      'Testes automatizados e documentaÃ§Ã£o',
      'Performance otimizada para alta carga'
    ],
    stack: ['Python', 'Flask', 'REST', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/pedrohenrique/apisrestfull',
    problem: 'Necessidade de APIs performÃ¡ticas e bem estruturadas para integraÃ§Ã£o entre sistemas heterogÃªneos.',
    architecture: 'Arquitetura em camadas com controllers, services e repositories. SeparaÃ§Ã£o clara de responsabilidades.',
    decisions: [
      'Python/Flask para lÃ³gica de negÃ³cio complexa',
      'PostgreSQL para dados relacionais',
      'Docker para consistÃªncia de ambiente',
      'Testes de contrato para garantir compatibilidade'
    ],
    results: 'APIs com latÃªncia < 50ms, 99.9% uptime, documentaÃ§Ã£o automatizada.'
  },
  {
    id: 'shop-swift',
    title: 'Shop Swift Suite',
    image: 'ShopSwiftSuite.png',
    category: 'fullstack', //  Mexer tambÃ©m no /types/index.ts
    categoryLabel: 'Fullstack',
    description: 'Plataforma de e-commerce completa com gestÃ£o de produtos, pedidos e integraÃ§Ã£o com gateway de pagamentos.',
    highlights: [
      'Arquitetura fullstack moderna',
      'Sistema de autenticaÃ§Ã£o seguro',
      'GestÃ£o de estado e cache',
      'IntegraÃ§Ã£o com gateway de pagamentos'
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'SQLite', 'Docker',],
    githubUrl: 'https://github.com/pedrohenrique/shop-swift',
    problem: 'Criar uma plataforma de e-commerce escalÃ¡vel com experiÃªncia de usuÃ¡rio fluida.',
    architecture: 'Frontend SPA com React, backend em Node.js com arquitetura em camadas, SQLite para persistÃªncia leve, Docker para desenvolvimento e deploy.',
    decisions: [
      'TypeScript para type safety',
      'React para interface dinÃ¢mica',
      'SQLite para simplicidade e performance',
      'JWT com refresh tokens'
    ],
    results: 'Checkout otimizado, carrinho persistente, relatÃ³rios de vendas em tempo real.'
  },
  {
    id: 'valeti-system',
    title: 'Sistema de Valeti',
    image: 'SistemaValeti.png',
    category: 'fullstack', //  Mexer tambÃ©m no /types/index.ts
    categoryLabel: 'Fullstack',
    description: 'Sistema de gerenciamento de valets com tracking em tempo real e gestÃ£o de filas.',
    highlights: [
      'Interface responsiva e intuitiva',
      'ComunicaÃ§Ã£o em tempo real',
      'GestÃ£o de filas e priorizaÃ§Ã£o',
      'RelatÃ³rios e analytics'
    ],
    stack: ['React', 'Node.js', 'MySQL', 'WebSocket', 'Express'],
    githubUrl: 'https://github.com/pedrohenrique/valeti-system',
    problem: 'Otimizar o fluxo de valets em eventos e estabelecimentos com alta demanda.',
    architecture: 'Realtime com WebSocket, MySQL para persistÃªncia de dados, React para interface dinÃ¢mica.',
    decisions: [
      'WebSocket para updates em tempo real',
      'MySQL para schema estruturado',
      'Fila prioritÃ¡ria por tempo de espera',
      'NotificaÃ§Ãµes push'
    ],
    results: 'ReduÃ§Ã£o de 40% no tempo de espera, satisfaÃ§Ã£o do cliente aumentada. Aumento de 60% na eficiÃªncia operacional.'
  },
  {
    id: 'agrolink',
    image: 'AgroLink.png',
    title: 'AgroLink - Â© MetaCore',
    category: 'aiot', //  Mexer tambÃ©m no /types/index.ts
    categoryLabel: 'AIoT & Infraestrutura',
    description: 'Plataforma de monitoramento agrÃ­cola com sensores IoT e dashboards com gestÃ£o em tempo real.',
    highlights: [
      'IntegraÃ§Ã£o com sensores IoT',
      'Pipeline de dados em tempo real',
      'Dashboards de monitoramento',
      'Alertas e automaÃ§Ã£o',
      'Controle e autonomia total do sistema, com foco em performance, seguranÃ§a e experiÃªncia do usuÃ¡rio.'
    ],
    stack: ['IoT', 'Python', 'Node.js', 'React', 'PostgreSQL', 'Flask', 'Docker', 'API REST', 'AWS'],
    githubUrl: 'https://github.com/pedrohenrique/agrolink',
    problem: 'Monitorar condiÃ§Ãµes de solo e clima em tempo real para otimizaÃ§Ã£o agrÃ­cola.',
    architecture: 'MQTT para comunicaÃ§Ã£o IoT, PostgreSQL para persistÃªncia de dados, Flask para backend.',
    decisions: [
      'MQTT para baixa latÃªncia',
      'PostgreSQL para dados de GeolocalizaÃ§Ã£o',
      'Docker para deployment edge',
      'Alertas baseados em thresholds'
    ],
    results: 'Economia de 25% em irrigaÃ§Ã£o, detecÃ§Ã£o precoce de problemas. Aumento de 15% na produtividade agrÃ­cola. 70% de aumento na gestÃ£o financeira e operacional da safra'
  },
  /*{
    id: 'web-institutional',
    title: 'Desenvolvimento Web Institucional',
    githubUrl: '',
    category: 'frontend', //  Mexer tambÃ©m no /types/index.ts
    categoryLabel: 'Frontend',
    description: 'Sites institucionais com foco em performance, SEO e experiÃªncia do usuÃ¡rio.',
    highlights: [
      'SEO otimizado',
      'Performance 90+ Lighthouse',
      'Design responsivo',
      'CMS headless'
    ],
    stack: ['Next.js', 'TypeScript', 'TailwindCSS', 'Strapi', 'Vercel'],
    /* githubUrl: 'https://github.com/pedrohenrique/web-institutional',
    problem: 'Criar presenÃ§a digital profissional com alta performance e facilidade de manutenÃ§Ã£o.',
    architecture: 'Next.js com SSR/SSG, Strapi CMS para conteÃºdo, Tailwind para styling.',
    decisions: [
      'Next.js para SEO e performance',
      'SSG para pÃ¡ginas estÃ¡ticas',
      'CMS headless para flexibilidade',
      'Vercel para deploy automÃ¡tico'
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
      'Desenvolver e evoluir serviÃ§os e APIs com foco em clareza, performance e manutenibilidade.',
      'Garantir qualidade do cÃ³digo por meio de testes (unitÃ¡rios, integraÃ§Ã£o e contratos), revisÃµes criteriosas e boas prÃ¡ticas de engenharia.',
      'Desenvolvimento de soluÃ§Ãµes e automaÃ§Ãµes com Python e NodeJs',
    ],
    quote: 'Aprendo todos os dias que cÃ³digo Ã© apenas o comeÃ§o. O sistema precisa operar, ser observÃ¡vel e evoluir. NecessÃ¡rio ter visÃ£o alÃ©m do cÃ³digo para entregar valor real.'
  },
  {
    id: 'infra',
    title: 'LÃ­der de Projetos de Infraestrutura | Analista de ProgramaÃ§Ã£o',
    period: 'mar/2025 â€” dez/2025',
    company: 'AIoT Solution',
    icon: 'Server',
    color: 'cyan',
    items: [
      'GestÃ£o ponta a ponta de projetos de seguranÃ§a eletrÃ´nica, garantindo prazos, normas e qualidade.',
      'ImplantaÃ§Ã£o de monitoramento inteligente com cÃ¢meras IP, tÃ©rmicas e analÃ­ticas para seguranÃ§a e eficiÃªncia operacional.',
      'ConfiguraÃ§Ã£o de redes seguras e plataformas de vÃ­deo para gestÃ£o centralizada de monitoramento.',
      'DiagnÃ³stico e resoluÃ§Ã£o Ã¡gil de falhas em redes, cÃ¢meras e infraestrutura, remoto e em campo.',
      'Desenvolvimento e implantaÃ§Ã£o de soluÃ§Ãµes com sensores, automaÃ§Ã£o e IA para monitoramento, energia e seguranÃ§a.'
    ],
    quote: 'A gestÃ£o de projetos de infraestrutura Ã© um desafio complexo que exige visÃ£o estratÃ©gica, coordenaÃ§Ã£o eficaz e capacidade de resolver problemas tÃ©cnicos, principalmente quando envolve tecnologias emergentes como IoT e IA.'
  },
  {
    id: 'fullstack',
    title: 'Desenvolvedor AutÃ´nomo | Fullstack',
    period: 'ago/2023 â€” fev/2025',
    company: 'MetaCore - UniMetrocamp',
    icon: 'Brain',
    color: 'purple',
    items: [
      'Sistema completo de GestÃ£o do AgronÃ©gocio, com mÃ³dulos de CRM, ERP e E-commerce para produtores rurais.',
      'Desenvolvimento de APIs RESTful e GraphQL para integraÃ§Ã£o entre sistemas e clientes.',
      'ImplementaÃ§Ã£o de soluÃ§Ãµes de infraestrutura em nuvem, garantindo escalabilidade e seguranÃ§a.',
      'AnÃ¡lise de dados, IoT, Desenvolvimento de Software completo para qualquer um poder mexer de forma bem moderna, com foco em performance, seguranÃ§a e experiÃªncia do usuÃ¡rio.',
      ],
    quote: 'O comeÃ§o Ã© a parte mais importante de qualquer jornada. Aprender a trabalhar em equipe gera resultados extraordinÃ¡rios â€” a convivÃªncia diÃ¡ria fortalece laÃ§os, transforma colegas em amigos e torna os desafios mais leves. Sonhar grande, manter o foco e nunca parar de estudar sÃ£o atitudes que abrem caminhos, porque com dedicaÃ§Ã£o, disciplina e constÃ¢ncia, qualquer pessoa pode chegar onde deseja.'
  }
];

export const timeline: TimelineItem[] = [
  {
    year: '2024',
    title: 'Arquitetura Orientada a Eventos',
    description: 'Aprofundamento em sistemas desacoplados e escalÃ¡veis com processamento assÃ­ncrono.',
    technologies: ['Apache Kafka', 'RabbitMQ', 'Event Sourcing']
  },
  {
    year: '2025',
    title: 'Kubernetes & Cloud Native',
    description: 'OrquestraÃ§Ã£o de containers, service mesh e estratÃ©gias multi-cloud.',
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
    description: 'Processamento no edge com latÃªncia mÃ­nima e automaÃ§Ã£o inteligente.',
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
  { value: 'apis', label: 'APIs & MicroserviÃ§os' },
  { value: 'frontend', label: 'Frontend' },
  { value: 'fullstack', label: 'Fullstack' },
  { value: 'aiot', label: 'AIoT & Infraestrutura' },
] as const;
