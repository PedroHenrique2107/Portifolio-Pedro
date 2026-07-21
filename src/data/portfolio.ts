export const profile = {
  name: 'Pedro Henrique',
  role: 'Engenheiro de Software',
  email: 'pedrohmsousa2023@gmail.com',
  githubUrl: 'https://github.com/PedroHenrique2107',
  linkedInUrl: 'https://www.linkedin.com/in/pedro-henrique-mendes-78a59325a/',
  resumeUrl: 'https://drive.google.com/file/d/1Aa2EULBfAR54iKOk2WUwL9lbxl-Uz8FQ/view?usp=sharing'
} as const;

export const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Visão', href: '#vision' },
  { label: 'Contato', href: '#contact' }
] as const;

export const socialLinks = [
  {
    id: 'github',
    label: 'GitHub',
    href: profile.githubUrl,
    display: 'github.com/PedroHenrique2107',
    external: true
  },
  {
    id: 'email',
    label: 'Email',
    href: `mailto:${profile.email}`,
    display: profile.email,
    external: false
  },
  {
    id: 'linkedin',
    label: 'LinkedIn',
    href: profile.linkedInUrl,
    display: 'linkedin.com/in/pedro-henrique-mendes-78a59325a/',
    external: true
  }
] as const;

export const metrics = [
  { label: 'Projetos', value: 20, suffix: '+', color: 'text-cyan-400' },
  { label: 'Anos Exp.', value: 1, suffix: '+', color: 'text-emerald-400' },
  { label: 'Uptime', value: 99, suffix: '%', color: 'text-purple-400' }
] as const;

export const projects = [
  {
    id: 'apisrestfull',
    title: 'APIsRESTFULL',
    image: 'optimized/APIRESTful.webp',
    category: 'apis',
    categoryLabel: 'Backend',
    description: 'APIs robustas com arquitetura limpa e separação de responsabilidades, implementadas em Python/Flask',
    highlights: [
      'Design de APIs RESTful escaláveis',
      'Implementação em Python/Flask',
      'Testes automatizados e documentação',
      'Performance otimizada para alta carga'
    ],
    stack: ['Python', 'Flask', 'REST', 'Docker', 'PostgreSQL'],
    githubUrl: 'https://github.com/PedroHenrique2107/APIRestNode',
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
    image: 'optimized/ShopSwiftSuite.webp',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Plataforma de e-commerce completa com gestão de produtos, pedidos e integração com gateway de pagamentos.',
    highlights: [
      'Arquitetura fullstack moderna',
      'Sistema de autenticação seguro',
      'Gestão de estado e cache',
      'Integração com gateway de pagamentos'
    ],
    stack: ['React', 'Node.js', 'TypeScript', 'SQLite', 'Docker'],
    githubUrl: 'https://github.com/PedroHenrique2107/shop-swift-suite',
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
    title: 'Valet Tracker',
    image: 'optimized/SistemaValeti.webp',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'Sistema de gerenciamento de valets com tracking em tempo real e gestão de filas.',
    highlights: [
      'Interface responsiva e intuitiva',
      'Comunicação em tempo real',
      'Gestão de filas e priorização',
      'Relatórios e analytics'
    ],
    stack: ['React', 'Node.js', 'MySQL', 'WebSocket', 'Express'],
    githubUrl: 'https://github.com/PedroHenrique2107/valet-perfect',
    liveUrl: 'https://valet-perfect.vercel.app/',
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
    id: 'park-scan',
    title: 'ParkScan',
    image: 'optimized/ParkScan.webp',
    category: 'fullstack',
    categoryLabel: 'Fullstack',
    description: 'PWA operacional para gestão de estacionamento com leitura de pátio, mapa de pisos, busca de veículos e histórico do dia.',
    highlights: [
      'Dashboard mobile-first para operação de pátio',
      'Mapa de pisos e busca de veículos',
      'Histórico operacional do dia',
      'Deploy em produção na Vercel com comportamento PWA'
    ],
    stack: ['React', 'TypeScript', 'Vite', 'PWA', 'Vercel'],
    githubUrl: 'https://github.com/PedroHenrique2107/ParkScan',
    liveUrl: 'https://park-scan.vercel.app/',
    problem: 'Centralizar a leitura operacional de um estacionamento em uma interface rápida para consulta de ocupação, vagas e movimentações.',
    architecture: 'SPA/PWA com rotas para início, mapa, busca e histórico, preparada para uso recorrente em operação mobile.',
    decisions: [
      'Vite para build rápido e deploy simples',
      'PWA para experiência mais próxima de aplicativo',
      'Layout mobile-first para uso em campo',
      'Vercel para publicação contínua'
    ],
    results: 'Projeto publicado em produção com painel de ocupação, atalhos operacionais e navegação inferior para fluxos principais.'
  },
  {
    id: 'agrolink',
    image: 'optimized/AgroLink.webp',
    title: 'AgroLink - © MetaCore',
    category: 'aiot',
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
    githubUrl: 'https://github.com/PedroHenrique2107/Dashboard-Agroneg-cio',
    problem: 'Monitorar condições de solo e clima em tempo real para otimização agrícola.',
    architecture: 'MQTT para comunicação IoT, PostgreSQL para persistência de dados, Flask para backend.',
    decisions: [
      'MQTT para baixa latência',
      'PostgreSQL para dados de Geolocalização',
      'Docker para deployment edge',
      'Alertas baseados em thresholds'
    ],
    results: 'Economia de 25% em irrigação, detecção precoce de problemas. Aumento de 15% na produtividade agrícola. 70% de aumento na gestão financeira e operacional da safra'
  }
] as const;

export const experiences = [
  {
    id: 'moderna-fullstack-intern',
    title: 'FullStack Developer Intern',
    period: 'mai/2026 - Atualmente',
    company: 'Moderna Tecnologia',
    icon: 'Code2',
    color: 'green',
    items: [
      'Atuação em desenvolvimento fullstack com TypeScript, Node.js, Angular e C#.',
      'Evolução de aplicações e serviços usando PostgreSQL, Prisma ORM e Fastify.',
      'Contato com aplicações desktop/web com Photino e fluxos modernos de desenvolvimento.',
      'Uso de Docker, Git, GitHub e ArgoCD em rotinas de versionamento, entrega e operação.'
    ],
    quote: 'Experiência em evolução, com foco em ampliar repertório fullstack, atuar em sistemas reais e consolidar práticas modernas de desenvolvimento, entrega e operação.'
  },
  {
    id: 'metacore-fullstack',
    title: 'Desenvolvedor Autônomo | Fullstack',
    period: 'ago/2023 — Atualmente',
    company: 'UniMetrocamp - Wyden',
    icon: 'Brain',
    color: 'purple',
    items: [
      'Sistema completo de Gestão do Agronégocio, com módulos de CRM, ERP e E-commerce para produtores rurais.',
      'Desenvolvimento de APIs RESTful e GraphQL para integração entre sistemas e clientes.',
      'Implementação de soluções de infraestrutura em nuvem, garantindo escalabilidade e segurança.',
      'Análise de dados, IoT, Desenvolvimento de Software completo para qualquer um poder mexer de forma bem moderna, com foco em performance, segurança e experiência do usuário.'
    ],
    quote: 'O começo é a parte mais importante de qualquer jornada. Aprender a trabalhar em equipe gera resultados extraordinários — a convivência diária fortalece laços, transforma colegas em amigos e torna os desafios mais leves. Sonhar grande, manter o foco e nunca parar de estudar são atitudes que abrem caminhos, porque com dedicação, disciplina e constância, qualquer pessoa pode chegar onde deseja.'
  },
  {
    id: 'smartcompass-fullstack',
    title: 'FullStack Developer',
    period: 'jan/2026 - mar/2026',
    company: 'SmartCompass',
    icon: 'Code2',
    color: 'green',
    items: [
      'Atuar nas rotinas de CI/CD, automatizando processos, versionamento e fluxo de deploy.',
      'Desenvolver e evoluir serviços e APIs com foco em clareza, performance e manutenibilidade.',
      'Garantir qualidade do código por meio de testes (unitários, integração e contratos), revisões criteriosas e boas práticas de engenharia.',
      'Desenvolvimento de soluções e automações com Python e NodeJs'
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
  }
] as const;

export const timeline = [
  {
    year: '2020',
    title: 'Onde tudo começou',
    description: 'Com a paixão por tecnologia, comecei a explorar o mundo da programação e a descobrir em qual faculdade de TI ingressar, pois sabia que era ali o meu lugar. Comecei aprendendo as bases de algoritmos, estruturas de dados e lógica de programação.',
    technologies: ['Lógica de Programação', 'Algoritmo', 'HTML/CSS', 'JavaScript']
  },
  {
    year: '2023',
    title: 'Inicio da faculdade de Engenharia da Computação',
    description: 'O início foi mágico: professores e matérias que faziam meus olhos brilharem, e naquele momento tive certeza de que aquele era o meu lugar. Tive contato com diversas áreas, como sistemas operacionais, redes de computadores, banco de dados e desenvolvimento de software. Foi então que comecei a me aprofundar naquilo que mais me interessava: o desenvolvimento de software.',
    technologies: ['C/C++', 'NodeJS', 'Python', 'Git', 'Linux', 'Docker', 'AWS', 'Projetos Acadêmicos']
  },
  {
    year: '2024',
    title: 'Primeira experiência profissional pela faculdade',
    description: 'O primeiro grande projeto começou como apenas um trabalho de faculdade, que evoluiu para a criação de uma Iniciação Científica com alguns amigos. A partir disso, criamos a MetaCore, uma "Empresa Júnior" que tinha o propósito de desenvolver soluções tecnológicas para o agronegócio. Nesse contexto, tive a oportunidade de trabalhar em um projeto completo, iniciado do zero: o AgroLink.',
    technologies: ['Python', 'Flask', 'NodeJS', 'React', 'PostgreSQL', 'Docker', 'AWS', 'API REST', 'IoT', 'Kubernetes', 'Terraform']
  },
  {
    year: '2025',
    title: 'Do estágio para o mercado de trabalho',
    description: 'Iniciei minha carreira na tecnologia como estagiário, onde tive a oportunidade de aprender e crescer muito no mundo de IoT e Segurança Eletrônica pela Aiot Solution. Nessa função, segui até minha efetivação, quando tive a oportunidade de liderar projetos de infraestrutura e desenvolvimento de soluções inteligentes para monitoramento e automação utilizando CFTV, Segurança Eletrônica, IoT e IA.',
    technologies: ['AIoT', 'Configuração de CFTV', 'Rede de Computadores', 'IVMS/HikCentral', 'Gestão de Projetos']
  },
  {
    year: '2026',
    title: 'Desenvolvimento em progresso',
    description: 'Depois de muito estudo, esforço e dedicação, avancei em experiências profissionais de desenvolvimento, passando por backend, automações e engenharia fullstack. Em 2026, sigo evoluindo como FullStack Developer Intern na Moderna Tecnologia, ampliando meu contato com aplicações web, serviços, bancos de dados, deploy e operação.',
    technologies: ['C#', 'Angular', 'TypeScript', 'NodeJS', 'Fastify', 'Prisma ORM', 'PostgreSQL', 'Docker', 'ArgoCD']
  },
  {
    year: '2027',
    title: 'Diploma da faculdade e novos desafios',
    description: 'Após a conclusão da faculdade, estou me preparando para novos desafios no mercado de tecnologia, com foco em Engenharia de Software e arquitetura de software escalável, expandindo meus conhecimentos em tecnologias de nuvem e DevOps.',
    technologies: ['Software Engineering', 'Clean Architecture', 'Vibe Coding', 'Inteligência Artificial', 'Certificações em Cloud/IaC/Linux', 'DevOps']
  },
  {
    year: '2028',
    title: 'Inicio em Pós-Graduação',
    description: 'A decidir em breve! - Possiveís áreas de interesse:',
    technologies: ['Software Engineering', 'Software Architecture', 'IA']
  }
] as const;

type SkillData = {
  name: string;
  category: 'architecture' | 'devops' | 'database' | 'backend' | 'tools';
  logo?: string;
};

export const skills = [
  { name: 'Clean Architecture', category: 'architecture', logo: 'https://cdn.simpleicons.org/openapiinitiative' },
  { name: 'SOLID', category: 'architecture', logo: 'https://cdn.simpleicons.org/bookstack' },
  { name: 'Amazon Web Services', category: 'devops', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'CI/CD', category: 'devops', logo: 'https://cdn.simpleicons.org/githubactions' },
  { name: 'IaC', category: 'devops', logo: 'https://cdn.simpleicons.org/terraform' },
  { name: 'Docker', category: 'devops', logo: 'https://cdn.simpleicons.org/docker' },
  { name: 'Kubernetes', category: 'devops', logo: 'https://cdn.simpleicons.org/kubernetes' },
  { name: 'Vercel', category: 'devops', logo: 'https://cdn.simpleicons.org/vercel' },
  { name: 'ArgoCD', category: 'devops', logo: 'https://cdn.simpleicons.org/argo' },
  { name: 'MySQL', category: 'database', logo: 'https://cdn.simpleicons.org/mysql' },
  { name: 'PostgreSQL', category: 'database', logo: 'https://cdn.simpleicons.org/postgresql' },
  { name: 'Prisma ORM', category: 'database', logo: 'https://cdn.simpleicons.org/prisma' },
  { name: 'JavaScript', category: 'backend', logo: 'https://cdn.simpleicons.org/javascript' },
  { name: 'TypeScript', category: 'backend', logo: 'https://cdn.simpleicons.org/typescript' },
  { name: 'C#', category: 'backend', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg' },
  { name: 'Angular', category: 'backend', logo: 'https://cdn.simpleicons.org/angular' },
  { name: 'React', category: 'backend', logo: 'https://cdn.simpleicons.org/react' },
  { name: 'Vite', category: 'backend', logo: 'https://cdn.simpleicons.org/vite' },
  { name: 'PWA', category: 'backend', logo: 'https://cdn.simpleicons.org/pwa' },
  { name: 'Node.js', category: 'backend', logo: 'https://cdn.simpleicons.org/nodedotjs' },
  { name: 'Fastify', category: 'backend', logo: 'https://cdn.simpleicons.org/fastify' },
  { name: 'Photino', category: 'backend', logo: './photino.svg' },
  { name: 'Python', category: 'backend', logo: 'https://cdn.simpleicons.org/python' },
  { name: 'Go', category: 'backend', logo: 'https://cdn.simpleicons.org/go' },
  { name: 'REST APIs', category: 'backend', logo: 'https://cdn.simpleicons.org/openapiinitiative' },
  { name: 'GraphQL', category: 'backend', logo: 'https://cdn.simpleicons.org/graphql' },
  { name: 'Linux', category: 'tools', logo: 'https://cdn.simpleicons.org/linux' },
  { name: 'Git', category: 'tools', logo: 'https://cdn.simpleicons.org/git' },
  { name: 'GitHub', category: 'tools', logo: 'https://cdn.simpleicons.org/github' },
  { name: 'Grafana', category: 'tools', logo: 'https://cdn.simpleicons.org/grafana' },
  { name: 'Claude AI', category: 'tools', logo: 'https://cdn.simpleicons.org/claude' },
  { name: 'Claude Code', category: 'tools', logo: 'https://cdn.simpleicons.org/claudecode' },
] as const satisfies readonly SkillData[];

export const dataCoreTechnologies = [
  {
    id: 'react',
    label: 'React',
    group: 'frontend',
    x: 50,
    y: 14,
    color: '#00f0ff',
    stackMatches: ['React']
  },
  {
    id: 'node',
    label: 'Node.js',
    group: 'backend',
    x: 82,
    y: 36,
    color: '#10b981',
    stackMatches: ['Node.js']
  },
  {
    id: 'python',
    label: 'Python',
    group: 'backend',
    x: 72,
    y: 78,
    color: '#00f0ff',
    stackMatches: ['Python', 'Flask']
  },
  {
    id: 'docker',
    label: 'Docker',
    group: 'devops',
    x: 28,
    y: 78,
    color: '#10b981',
    stackMatches: ['Docker']
  },
  {
    id: 'data',
    label: 'Data',
    group: 'database',
    x: 18,
    y: 36,
    color: '#8b5cf6',
    stackMatches: ['PostgreSQL', 'MySQL', 'SQLite']
  },
  {
    id: 'cloud',
    label: 'Cloud',
    group: 'infra',
    x: 50,
    y: 88,
    color: '#10b981',
    stackMatches: ['AWS', 'Kubernetes', 'Terraform']
  }
] as const;

export const dataCoreProjectNodes = projects.map((project, index) => ({
  id: project.id,
  label: project.title,
  kind: 'project',
  x: [50, 75, 62, 36, 25][index] ?? 50,
  y: [50, 54, 30, 70, 54][index] ?? 50,
  color:
    project.category === 'aiot'
      ? '#10b981'
      : project.category === 'apis'
        ? '#00f0ff'
        : '#8b5cf6'
})) as ReadonlyArray<{
  id: (typeof projects)[number]['id'];
  label: (typeof projects)[number]['title'];
  kind: 'project';
  x: number;
  y: number;
  color: string;
}>;

export const dataCoreTechnologyNodes = dataCoreTechnologies.map((technology) => ({
  id: technology.id,
  label: technology.label,
  kind: 'technology',
  x: technology.x,
  y: technology.y,
  color: technology.color
})) as ReadonlyArray<{
  id: (typeof dataCoreTechnologies)[number]['id'];
  label: (typeof dataCoreTechnologies)[number]['label'];
  kind: 'technology';
  x: number;
  y: number;
  color: string;
}>;

export const dataCoreNodes = [
  {
    id: 'portfolio-core',
    label: 'Pedro Core',
    kind: 'core',
    x: 50,
    y: 50,
    color: '#00f0ff'
  },
  ...dataCoreProjectNodes,
  ...dataCoreTechnologyNodes
] as const;

export const dataCoreLinks = [
  ...dataCoreProjectNodes.map((project) => ({
    source: 'portfolio-core',
    target: project.id,
    strength: 'primary'
  })),
  ...projects.flatMap((project) =>
    dataCoreTechnologies
      .filter((technology) =>
        technology.stackMatches.some((match) =>
          (project.stack as readonly string[]).includes(match)
        )
      )
      .map((technology) => ({
        source: project.id,
        target: technology.id,
        strength: 'secondary'
      }))
  )
] as ReadonlyArray<{
  source: (typeof dataCoreNodes)[number]['id'];
  target: (typeof dataCoreNodes)[number]['id'];
  strength: 'primary' | 'secondary';
}>;

export const dataCoreGraph = {
  nodes: dataCoreNodes,
  links: dataCoreLinks
} as const;

type ProjectCategory = (typeof projects)[number]['category'];

const categoryLabels: Record<ProjectCategory, string> = {
  apis: 'Backend',
  fullstack: 'Fullstack',
  aiot: 'AIoT & Infraestrutura'
};

const activeProjectCategories = Array.from(
  new Set(projects.map((project) => project.category))
) as ProjectCategory[];

export const filterCategories: ReadonlyArray<{
  value: 'all' | ProjectCategory;
  label: string;
}> = [
  { value: 'all', label: 'Todos' },
  ...activeProjectCategories.map((category) => ({
    value: category,
    label: categoryLabels[category]
  }))
];
