import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Server, Code2, Brain, User, Target, Lightbulb } from 'lucide-react';
import { experiences, skills } from '@/data/projects';

import type { LucideIcon } from 'lucide-react';

const iconMap: Record<string, LucideIcon> = {
  Server,
  Code2,
  Brain
};

const colorMap: Record<string, { bg: string; dot: string; border: string; text: string; glow: string }> = {
  green: {
    bg: 'bg-emerald-500/10',
    dot: 'bg-emerald-500',
    border: 'border-emerald-500/20',
    text: 'text-emerald-400',
    glow: 'hover:shadow-[0_0_30px_rgba(16,185,129,0.2)]'
  },
  cyan: {
    bg: 'bg-cyan-500/10',
    dot: 'bg-cyan-500',
    border: 'border-cyan-500/20',
    text: 'text-cyan-400',
    glow: 'hover:shadow-[0_0_30px_rgba(0,240,255,0.2)]'
  },
  purple: {
    bg: 'bg-purple-500/10',
    dot: 'bg-purple-500',
    border: 'border-purple-500/20',
    text: 'text-purple-400',
    glow: 'hover:shadow-[0_0_30px_rgba(168,85,247,0.2)]'
  }
};

const skillCategoryColors: Record<string, string> = {
  architecture: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  devops: 'border-emerald-500/30 text-emerald-400 bg-emerald-500/10',
  database: 'border-purple-500/30 text-purple-400 bg-purple-500/10',
  backend: 'border-cyan-500/30 text-cyan-400 bg-cyan-500/10',
  tools: 'border-gray-500/30 text-gray-400 bg-gray-500/10'
};

const aboutBlocks = [
  {
    id: 'identidade',
    title: 'Quem sou',
    icon: User,
    color: 'text-cyan-400 border-cyan-500/20 bg-cyan-500/10',
    content:
      'Desde pequeno, sempre fui fascinado por tecnologia. Eu passava horas assistindo a vídeos, pesquisando e tentando entender como as coisas eram feitas. Cada descoberta me deixava ainda mais curioso e com vontade de aprender mais. Foi assim que nasceu minha paixão por esse universo. Com o tempo, essa curiosidade se transformou em algo maior (a vontade de criar), onde veio a ideia de ser um Engenheiro da Computação. Desenvolver projetos, resolver problemas e aprender algo novo, ter a oportunidade de ajudar ou facilitar a vida do proximo. Pode-se dizer que cada desafio é o que me motiva. Gosto de estar sempre em movimento, explorando novas tecnologias e buscando maneiras de evoluir.'
  },
  {
    id: 'foco',
    title: 'Foco atual',
    icon: Target,
    color: 'text-emerald-400 border-emerald-500/20 bg-emerald-500/10',
    content:
      'Atuar na área de Tecnologia, com foco em Engenharia de Softaware | DevOps Cloud, desenvolvendo projetos, solucionando problemas e aprimorando constantemente minhas habilidades técnicas, visando criar soluções que facilitem e impactem positivamente a vida das pessoas.'
  },
  {
    id: 'abordagem',
    title: 'Como trabalho',
    icon: Lightbulb,
    color: 'text-purple-400 border-purple-500/20 bg-purple-500/10',
    content:
      'Tenho como prioridade a clareza técnica, a qualidade por meio de testes e uma documentação objetiva. Minhas decisões são guiadas pelo impacto prático no produto e na produtividade do time. Acredito que a melhor solução é aquela que equilibra simplicidade, eficiência e facilidade de manutenção. Estou sempre aberto a feedbacks e disposto a iterar para alcançar os melhores resultados possíveis.'
  }
] as const;

const aboutTabs = [
  { id: 'sobre', label: 'Sobre mim' },
  { id: 'experiencia', label: 'Experiencia' },
  { id: 'stack', label: 'Stack tecnico' }
] as const;

export function About() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });
  const [activeTab, setActiveTab] = useState<(typeof aboutTabs)[number]['id']>('sobre');

  return (
    <section id="about" className="relative py-24 lg:py-32 bg-dark">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        <motion.div
          ref={containerRef}
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: 'easeOut' }}
          className="mb-16"
        >
          <div className="flex items-center gap-4 mb-4">
            <div className="h-px flex-1 bg-gradient-to-r from-cyan-500/50 to-transparent" />
            <span className="font-mono text-cyan-400 text-sm">01</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center">
            Minha <span className="text-gradient-cyan">História</span>
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-6 lg:mb-8"
        >
          {aboutTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-cyan-500 text-dark'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </motion.div>

        {activeTab === 'sobre' && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {aboutBlocks.map((block, index) => {
              const Icon = block.icon;

              return (
                <motion.article
                  key={block.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.1 + index * 0.1, ease: 'easeOut' }}
                  className="p-6 lg:p-8 rounded-xl bg-dark-100 border border-white/5 transition-all duration-300 hover:-translate-y-1 hover:border-white/10"
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg border mb-5 ${block.color}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-3">{block.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{block.content}</p>
                </motion.article>
              );
            })}
          </div>
        )}

        {activeTab === 'experiencia' && (
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8 mb-20">
            {experiences.map((exp, index) => {
              const Icon = iconMap[exp.icon];
              const colors = colorMap[exp.color];

              return (
                <motion.div
                  key={exp.id}
                  initial={{ opacity: 0, y: 40 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.15, ease: 'easeOut' }}
                  className={`group relative p-6 lg:p-8 rounded-xl bg-dark-100 border border-white/5 ${colors.glow} transition-all duration-500 hover:-translate-y-1 hover:border-white/10`}
                >
                  <div className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${colors.bg} ${colors.border} border mb-6`}>
                    <Icon className={`w-6 h-6 ${colors.text}`} />
                  </div>
                  <span className="font-mono text-sm text-gray-500 block mb-2">{exp.period}</span>
                  <h3 className="text-xl font-semibold text-white mb-4">{exp.title}</h3>
                  <ul className="space-y-2 mb-6">
                    {exp.items.map((item, i) => (
                      <li key={i} className="flex items-start gap-2 text-gray-400 text-sm">
                        <span className={`w-1.5 h-1.5 rounded-full ${colors.dot} mt-2 flex-shrink-0`} />
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className={`pt-4 border-t ${colors.border} border-opacity-30`}>
                    <p className={`text-sm italic ${colors.text}`}>"{exp.quote}"</p>
                  </div>
                  <div className="absolute top-0 right-0 w-16 h-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className={`absolute top-4 right-4 w-2 h-2 border-t-2 border-r-2 ${colors.border.replace('/20', '/40')}`} />
                  </div>
                </motion.div>
              );
            })}
          </div>
        )}

        {activeTab === 'stack' && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            className="text-center"
          >
            <h3 className="text-2xl font-semibold text-white mb-8">Stack Tecnico</h3>
            <div className="flex flex-wrap justify-center gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.3 + index * 0.03 }}
                  className={`px-4 py-2 rounded-lg border font-mono text-sm transition-all duration-300 hover:scale-105 ${skillCategoryColors[skill.category]}`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
