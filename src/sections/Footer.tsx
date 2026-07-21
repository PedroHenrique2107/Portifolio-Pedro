import { Code2, Heart, Mail } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { navLinks, profile, socialLinks } from '@/data/portfolio';
import type { ElementType } from 'react';
import type { SocialLink } from '@/types';

const socialIconMap: Record<SocialLink['id'], ElementType<{ className?: string }>> = {
  github: GitHubIcon,
  email: Mail,
  linkedin: LinkedInIcon
};

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative border-t border-white/5 bg-dark py-12 sm:py-16">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-8 lg:px-16">
        <div className="system-panel p-5 sm:p-6">
          <div className="grid gap-8 md:grid-cols-[1.1fr_0.7fr_0.7fr]">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center border border-cyan-500/20 bg-cyan-500/10">
                  <Code2 className="h-5 w-5 text-cyan-400" />
                </div>
                <div>
                  <span className="block font-semibold text-white">{profile.name}</span>
                  <span className="font-mono text-sm text-gray-500">{profile.role}</span>
                </div>
              </div>
              <p className="max-w-sm text-sm leading-relaxed text-gray-400">
                Se dá pra automatizar, não é pra fazer manual.
                Backend, AIoT e Arquitetura Limpa.
              </p>
            </div>

            <nav aria-label="Navegação do rodapé">
              <h4 className="system-label mb-4 text-cyan-300">Navegação</h4>
              <ul className="grid grid-cols-2 gap-2 md:grid-cols-1">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollToSection(link.href)}
                      className="text-sm text-gray-400 transition-colors hover:text-cyan-400"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div>
              <h4 className="system-label mb-4 text-emerald-300">Conecte-se</h4>
              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.id];

                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      target={social.external ? '_blank' : undefined}
                      rel={social.external ? 'noopener noreferrer' : undefined}
                      className="system-panel-quiet flex h-10 w-10 items-center justify-center text-gray-400 transition-all duration-300 hover:border-cyan-500/30 hover:bg-cyan-500/5 hover:text-cyan-400"
                      aria-label={social.label}
                    >
                      <Icon className="h-5 w-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-white/5 pt-6 text-sm text-gray-500 sm:flex-row sm:items-center sm:justify-between">
            <p className="flex flex-wrap items-center gap-1">
              © 2026 Pedro Henrique. Construído com <Heart className="h-4 w-4 text-red-500" /> e <Code2 className="h-4 w-4 text-cyan-400" />.
            </p>
            <p className="font-mono text-xs text-gray-600">
              React · TypeScript · TailwindCSS · Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
