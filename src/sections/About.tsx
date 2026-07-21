import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Brain, Code2, Database, GitBranch, Lightbulb, Network, Server, Target, User } from 'lucide-react';
import { experiences, skills } from '@/data/portfolio';
import {
  panelRevealVariants,
  revealVariants,
  sectionHeaderVariants,
  staggerContainerVariants
} from '@/lib/motion';
import type { LucideIcon } from 'lucide-react';
import type { Experience, Skill } from '@/types';

const iconMap: Record<Experience['icon'], LucideIcon> = {
  Server,
  Code2,
  Brain
};

const colorMap: Record<Experience['color'], { bg: string; dot: string; border: string; text: string }> = {
  green: {
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    dot: 'bg-cyan-500',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400'
  },
  purple: {
    bg: 'bg-purple-500/10',
    dot: 'bg-purple-500',
    border: 'border-purple-500/20',
    text: 'text-purple-400'
  }
};

const skillCategoryColors: Record<Skill['category'], string> = {
  architecture: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
  devops: 'border-emerald-500/30 text-emerald-300 bg-emerald-500/10',
  database: 'border-purple-500/30 text-purple-300 bg-purple-500/10',
  backend: 'border-cyan-500/30 text-cyan-300 bg-cyan-500/10',
  tools: 'border-gray-500/30 text-gray-300 bg-gray-500/10'
};

const aboutBlocks = [
  {
    id: 'identidade',
    title: 'Quem sou',
    icon: User,
    color: 'text-cyan-300 border-cyan-500/20 bg-cyan-500/10',
    content:
      'Desde pequeno, sempre fui fascinado por tecnologia. Eu passava horas assistindo a vídeos, pesquisando e tentando entender como as coisas eram feitas. Cada descoberta me deixava ainda mais curioso e com vontade de aprender mais. Foi assim que nasceu minha paixão por esse universo. Com o tempo, essa curiosidade se transformou em algo maior (a vontade de criar), onde veio a ideia de ser um Engenheiro da Computação. Desenvolver projetos, resolver problemas e aprender algo novo, ter a oportunidade de ajudar ou facilitar a vida do proximo. Pode-se dizer que cada desafio é o que me motiva. Gosto de estar sempre em movimento, explorando novas tecnologias e buscando maneiras de evoluir.'
  },
  {
    id: 'foco',
    title: 'Foco atual',
    icon: Target,
    color: 'text-emerald-300 border-emerald-500/20 bg-emerald-500/10',
    content:
      'Atuar na área de Tecnologia, com foco em Engenharia de Software | DevOps Cloud, desenvolvendo projetos, solucionando problemas e aprimorando constantemente minhas habilidades técnicas, visando criar soluções que facilitem e impactem positivamente a vida das pessoas.'
  },
  {
    id: 'abordagem',
    title: 'Como trabalho',
    icon: Lightbulb,
    color: 'text-purple-300 border-purple-500/20 bg-purple-500/10',
    content:
      'Tenho como prioridade a clareza técnica, a qualidade por meio de testes e uma documentação objetiva. Minhas decisões são guiadas pelo impacto prático no produto e na produtividade do time. Acredito que a melhor solução é aquela que equilibra simplicidade, eficiência e facilidade de manutenção. Estou sempre aberto a feedbacks e disposto a iterar para alcançar os melhores resultados possíveis.'
  }
] as const;

const capabilitySignals = [
  { icon: GitBranch, label: 'Backend', value: 'APIs, automações e serviços' },
  { icon: Database, label: 'Dados', value: 'Modelagem, persistência e leitura operacional' },
  { icon: Network, label: 'Integração', value: 'Camadas, eventos e comunicação entre sistemas' },
  { icon: Server, label: 'Operação', value: 'Docker, cloud e observabilidade' }
] as const;

function getSkillInitials(name: string) {
  if (name === 'C#') return 'C#';
  return name
    .split(/\s|\.|-/)
    .filter(Boolean)
    .map((part) => part[0])
    .join('')
    .slice(0, 2)
    .toUpperCase();
}

function SkillIcon({ skill }: { skill: Skill }) {
  if (!skill.logo) {
    return (
      <span
        aria-hidden="true"
        className="flex h-4 min-w-4 items-center justify-center border border-current/25 px-0.5 text-[9px] leading-none"
      >
        {getSkillInitials(skill.name)}
      </span>
    );
  }

  return (
    <img
      src={skill.logo}
      alt=""
      loading="lazy"
      aria-hidden="true"
      className="h-4 w-4 object-contain"
      onError={(event) => {
        event.currentTarget.style.display = 'none';
      }}
    />
  );
}

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeBlockId, setActiveBlockId] = useState<(typeof aboutBlocks)[number]['id']>('identidade');
  const activeBlock = aboutBlocks.find((block) => block.id === activeBlockId) ?? aboutBlocks[0];
  const ActiveIcon = activeBlock.icon;

  return (
    <section id="about" className="relative bg-dark py-16 sm:py-24 lg:py-32">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <motion.div
          ref={containerRef}
          variants={sectionHeaderVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="mb-12 sm:mb-16"
        >
          <div className="mb-4 flex items-center gap-4">
            <div className="system-divider-cyan" />
            <span className="font-mono text-sm text-cyan-400">01</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/50 to-transparent" />
          </div>
          <h2 className="text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Minha <span className="text-gradient-cyan">História</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
          className="grid gap-6 lg:grid-cols-[0.95fr_1.35fr]"
        >
          <motion.aside variants={panelRevealVariants} className="system-panel p-4 sm:p-6">
            <div className="mb-6 flex items-center gap-3">
              <div className={`flex h-12 w-12 items-center justify-center border ${activeBlock.color}`}>
                <ActiveIcon className="h-5 w-5" />
              </div>
              <div>
                <span className="system-label text-cyan-300">Operating profile</span>
                <h3 className="text-xl font-semibold text-white">{activeBlock.title}</h3>
              </div>
            </div>

            <p className="text-sm leading-relaxed text-gray-300 sm:text-base">
              {activeBlock.content}
            </p>

            <div className="mt-6 grid gap-2">
              {aboutBlocks.map((block) => {
                const Icon = block.icon;
                const active = block.id === activeBlockId;

                return (
                  <button
                    key={block.id}
                    type="button"
                    onClick={() => setActiveBlockId(block.id)}
                    className={`flex items-center justify-between border px-3 py-3 text-left transition-all ${
                      active
                        ? 'border-cyan-400/35 bg-cyan-400/10 text-cyan-100'
                        : 'border-white/10 bg-white/[0.025] text-gray-400 hover:border-white/20 hover:text-white'
                    }`}
                  >
                    <span className="flex items-center gap-2">
                      <Icon className="h-4 w-4" />
                      <span className="font-mono text-xs">{block.title}</span>
                    </span>
                    <span className="h-px w-8 bg-current opacity-30" />
                  </button>
                );
              })}
            </div>
          </motion.aside>

          <div className="grid gap-6">
            <motion.div variants={panelRevealVariants} className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
              {capabilitySignals.map((signal) => {
                const Icon = signal.icon;

                return (
                  <div key={signal.label} className="system-panel-quiet p-4">
                    <Icon className="mb-4 h-5 w-5 text-cyan-300" />
                    <span className="system-label text-gray-500">{signal.label}</span>
                    <p className="mt-2 text-sm leading-relaxed text-gray-300">{signal.value}</p>
                  </div>
                );
              })}
            </motion.div>

            <motion.div variants={panelRevealVariants} className="system-panel p-4 sm:p-6">
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <span className="system-label text-emerald-300">Experience stream</span>
                  <h3 className="text-2xl font-semibold text-white">Experiência aplicada</h3>
                </div>
                <span className="font-mono text-xs text-gray-500">{experiences.length} operações mapeadas</span>
              </div>

              <div className="grid gap-4">
                {experiences.map((experience) => {
                  const Icon = iconMap[experience.icon];
                  const colors = colorMap[experience.color];

                  return (
                    <article key={experience.id} className={`border-l pl-4 ${colors.border}`}>
                      <div className="mb-3 flex items-start gap-3">
                        <div className={`flex h-10 w-10 flex-shrink-0 items-center justify-center border ${colors.bg} ${colors.border}`}>
                          <Icon className={`h-5 w-5 ${colors.text}`} />
                        </div>
                        <div className="min-w-0">
                          <span className="font-mono text-xs text-gray-500">{experience.period}</span>
                          <h4 className="text-base font-semibold text-white">{experience.company}</h4>
                          <p className={`text-sm ${colors.text}`}>{experience.title}</p>
                        </div>
                      </div>
                      <ul className="grid gap-2 sm:grid-cols-2">
                        {experience.items.slice(0, 4).map((item) => (
                          <li key={item} className="flex items-start gap-2 text-xs leading-relaxed text-gray-400">
                            <span className={`mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full ${colors.dot}`} />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </motion.div>

            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate={isInView ? 'visible' : 'hidden'}
              className="system-panel-quiet p-4 sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between gap-4">
                <div>
                  <span className="system-label text-purple-300">Stack técnico</span>
                  <h3 className="text-xl font-semibold text-white">Ferramentas em operação</h3>
                </div>
                <span className="font-mono text-xs text-gray-500">{skills.length} sinais</span>
              </div>

              <div className="flex flex-wrap gap-2">
                {skills.map((skill) => (
                  <span
                    key={skill.name}
                    className={`inline-flex min-h-8 items-center gap-2 border px-3 py-1.5 font-mono text-xs transition-all hover:scale-[1.02] ${skillCategoryColors[skill.category]}`}
                  >
                    <SkillIcon skill={skill} />
                    {skill.name}
                  </span>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
