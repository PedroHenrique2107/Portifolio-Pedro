import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { AlertCircle, Check, Loader2, Mail, Send } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { metrics, socialLinks } from '@/data/portfolio';
import type { ElementType } from 'react';
import type { ContactFormData, SocialLink } from '@/types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function AnimatedCounter({ to, suffix, color, trigger }: { to: number; suffix: string; color: string; trigger: boolean }) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (v) => setValue(Math.round(v)),
    });
    return controls.stop;
  }, [trigger, to]);

  return <span className={`block text-2xl font-bold ${color}`}>{value}{suffix}</span>;
}

const WEB3FORMS_ENDPOINT = 'https://api.web3forms.com/submit';
const WEB3FORMS_ACCESS_KEY = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY ?? '';
const HONEYPOT_FIELD = 'botcheck';

const contactSocialStyles: Record<SocialLink['id'], { icon: ElementType<{ className?: string }>; hover: string; iconHover: string }> = {
  github: {
    icon: GitHubIcon,
    hover: 'hover:border-cyan-500/30 hover:bg-cyan-500/5',
    iconHover: 'group-hover:text-cyan-400'
  },
  email: {
    icon: Mail,
    hover: 'hover:border-emerald-500/30 hover:bg-emerald-500/5',
    iconHover: 'group-hover:text-emerald-400'
  },
  linkedin: {
    icon: LinkedInIcon,
    hover: 'hover:border-purple-500/30 hover:bg-purple-500/5',
    iconHover: 'group-hover:text-purple-400'
  }
};

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [requestError, setRequestError] = useState('');
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const honeypotRef = useRef<HTMLInputElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim() || formData.name.trim().length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email invalido';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const honeypotValue = honeypotRef.current?.value.trim() ?? '';
    if (honeypotValue) {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
      return;
    }

    if (!validateForm()) return;

    if (!WEB3FORMS_ACCESS_KEY) {
      setStatus('error');
      setRequestError('Defina VITE_WEB3FORMS_ACCESS_KEY no arquivo .env');
      return;
    }

    setStatus('loading');
    setRequestError('');

    const payload = new FormData();
    payload.append('access_key', WEB3FORMS_ACCESS_KEY);
    payload.append('subject', 'Novo contato do portfolio');
    payload.append('from_name', formData.name.trim());
    payload.append('name', formData.name.trim());
    payload.append('email', formData.email.trim());
    payload.append('message', formData.message.trim());
    payload.append(HONEYPOT_FIELD, honeypotValue);

    try {
      const response = await fetch(WEB3FORMS_ENDPOINT, {
        method: 'POST',
        body: payload
      });

      const result = await response.json();
      if (!response.ok || result?.success === false) {
        throw new Error(result?.message || result?.error || 'Nao foi possivel enviar sua mensagem.');
      }

      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setRequestError(
        error instanceof Error ? error.message : 'Falha ao enviar mensagem. Tente novamente.'
      );
    }
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-16 sm:py-24 lg:py-32 bg-dark-100">
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
            <span className="font-mono text-cyan-400 text-sm">04</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-500/50 to-transparent" />
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white text-center mb-4">
            Vamos construir algo <span className="text-gradient-cyan">robusto</span>.
          </h2>
          <p className="text-gray-400 text-center max-w-2xl mx-auto">
            Aberto a oportunidades, colaborações e discussões técnicas.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">Informações de Contato</h3>
              <p className="text-gray-400 mb-6">
                Prefere outro canal? Estou disponível nas seguintes plataformas:
              </p>
            </div>

            <div className="space-y-4">
              {socialLinks.map((social) => {
                const styles = contactSocialStyles[social.id];
                const Icon = styles.icon;

                return (
                  <a
                    key={social.id}
                    href={social.href}
                    target={social.external ? '_blank' : undefined}
                    rel={social.external ? 'noopener noreferrer' : undefined}
                    className={`flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 ${styles.hover} transition-all duration-300 group`}
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-white/5 flex items-center justify-center transition-colors">
                      <Icon className={`w-6 h-6 text-gray-400 ${styles.iconHover} transition-colors`} />
                    </div>
                    <div>
                      <span className="block text-white font-medium">{social.label}</span>
                      <span className="text-gray-500 font-mono text-sm truncate">{social.display}</span>
                    </div>
                  </a>
                );
              })}
            </div>

            <div className="grid grid-cols-3 gap-2 sm:gap-4 pt-8 border-t border-white/5">
              {metrics.map((metric) => (
                <div key={metric.label} className="text-center">
                  <AnimatedCounter to={metric.value} suffix={metric.suffix} color={metric.color} trigger={isInView} />
                  <span className="text-gray-500 text-sm">{metric.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            {status === 'success' ? (
              <div className="h-full flex flex-col items-center justify-center p-8 rounded-2xl bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 flex items-center justify-center mb-4">
                  <Check className="w-8 h-8 text-emerald-400" />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Mensagem Enviada!</h3>
                <p className="text-gray-400 text-center">Obrigado pelo contato. Responderei em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  ref={honeypotRef}
                  type="text"
                  name={HONEYPOT_FIELD}
                  className="absolute left-[-9999px] top-auto h-px w-px overflow-hidden opacity-0"
                  tabIndex={-1}
                  autoComplete="off"
                  aria-hidden="true"
                />

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">Nome</Label>
                  <Input
                    id="name"
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleChange('name', e.target.value)}
                    placeholder="Seu nome"
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 ${
                      errors.name ? 'border-red-500/50' : ''
                    }`}
                  />
                  {errors.name && (
                    <span className="flex items-center gap-1 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="email" className="text-gray-300">Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleChange('email', e.target.value)}
                    placeholder="seu@email.com"
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 ${
                      errors.email ? 'border-red-500/50' : ''
                    }`}
                  />
                  {errors.email && (
                    <span className="flex items-center gap-1 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => handleChange('message', e.target.value)}
                    placeholder="Sua mensagem..."
                    rows={5}
                    className={`bg-white/5 border-white/10 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 resize-none ${
                      errors.message ? 'border-red-500/50' : ''
                    }`}
                  />
                  {errors.message && (
                    <span className="flex items-center gap-1 text-red-400 text-sm">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'error' && requestError && (
                  <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {requestError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="w-full bg-cyan-500 hover:bg-cyan-400 text-dark font-semibold py-6 transition-all duration-300 hover:shadow-glow disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5 mr-2" />
                      Enviar Mensagem
                    </>
                  )}
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
