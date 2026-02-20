import { Github, Mail, Linkedin, Heart, Code2 } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Sobre', href: '#about' },
  { label: 'Projetos', href: '#projects' },
  { label: 'Visão', href: '#vision' },
  { label: 'Contato', href: '#contact' }
];

const socialLinks = [
  { icon: Github, href: 'https://github.com/pedrohenrique', label: 'GitHub' },
  { icon: Linkedin, href: 'https://linkedin.com/in/pedrohenrique', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:pedro.henrique.m.s@example.com', label: 'Email' }
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const id = href.replace('#', '');
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 bg-dark border-t border-white/5">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center">
                <Code2 className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <span className="block text-white font-semibold">Pedro Henrique</span>
                <span className="text-gray-500 font-mono text-sm">Backend Engineer</span>
              </div>
            </div>
            <p className="text-gray-400 text-sm max-w-xs">
              Construindo sistemas que operam sob pressão. 
              Backend • AIoT • Arquitetura Limpa.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold mb-4">Navegação</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-400 hover:text-cyan-400 transition-colors text-sm"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-semibold mb-4">Conecte-se</h4>
            <div className="flex gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-gray-400 hover:text-cyan-400 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/5">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © 2024 Pedro Henrique. Construído com{' '}
              <Heart className="w-4 h-4 text-red-400 fill-red-400" /> e precisão.
            </p>
            <p className="text-gray-600 font-mono text-xs">
              React • TypeScript • TailwindCSS • Three.js
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
