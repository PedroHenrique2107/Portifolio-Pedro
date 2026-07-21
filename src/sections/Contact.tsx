import { useEffect, useRef, useState } from 'react';
import { animate, motion, useInView } from 'framer-motion';
import { AlertCircle, Check, Loader2, Mail, Radio, Send, ShieldCheck } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/icons/BrandIcons';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { metrics, socialLinks } from '@/data/portfolio';
import {
  panelRevealVariants,
  revealVariants,
  sectionHeaderVariants,
  staggerContainerVariants
} from '@/lib/motion';
import type { ElementType, FormEvent } from 'react';
import type { ContactFormData, SocialLink } from '@/types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

function AnimatedCounter({
  to,
  suffix,
  color,
  trigger
}: {
  to: number;
  suffix: string;
  color: string;
  trigger: boolean;
}) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!trigger) return;
    const controls = animate(0, to, {
      duration: 1.5,
      ease: 'easeOut',
      onUpdate: (nextValue) => setValue(Math.round(nextValue))
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
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

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
        throw new Error(result?.message || result?.error || 'Não foi possível enviar sua mensagem.');
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
    <section id="contact" className="relative bg-dark-100 py-16 sm:py-24 lg:py-32">
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
            <span className="font-mono text-sm text-cyan-400">04</span>
            <div className="h-px flex-1 bg-gradient-to-l from-cyan-400/50 to-transparent" />
          </div>
          <h2 className="mb-4 text-center text-3xl font-bold text-white sm:text-4xl lg:text-5xl">
            Vamos construir algo <span className="text-gradient-cyan">robusto</span>.
          </h2>
          <p className="mx-auto max-w-2xl text-center text-gray-400">
            Aberto a oportunidades, colaborações e discussões técnicas.
          </p>
        </motion.div>

        <div className="grid min-w-0 gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <motion.aside
            variants={staggerContainerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="min-w-0 space-y-4"
          >
            <motion.div variants={panelRevealVariants} className="system-panel min-w-0 overflow-hidden p-5 sm:p-6">
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center border border-emerald-400/25 bg-emerald-400/10">
                  <Radio className="h-5 w-5 text-emerald-300" />
                </div>
                <div>
                  <span className="system-label text-emerald-300">Status</span>
                  <h3 className="text-xl font-semibold text-white">Canal aberto</h3>
                </div>
              </div>
              <p className="break-words text-sm leading-relaxed text-gray-400">
                Prefere outro canal? Estou disponível nas seguintes plataformas:
              </p>
            </motion.div>

            {socialLinks.map((social) => {
              const styles = contactSocialStyles[social.id];
              const Icon = styles.icon;

              return (
                <motion.a
                  key={social.id}
                  variants={panelRevealVariants}
                  href={social.href}
                  target={social.external ? '_blank' : undefined}
                  rel={social.external ? 'noopener noreferrer' : undefined}
                  className={`system-panel-quiet group flex min-w-0 items-center gap-3 overflow-hidden p-4 transition-all duration-300 sm:gap-4 ${styles.hover}`}
                >
                  <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center border border-white/10 bg-white/5">
                    <Icon className={`h-5 w-5 text-gray-400 transition-colors ${styles.iconHover}`} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <span className="block font-medium text-white">{social.label}</span>
                    <span className="block truncate font-mono text-xs text-gray-500 sm:text-sm">{social.display}</span>
                  </div>
                </motion.a>
              );
            })}

            <motion.div variants={panelRevealVariants} className="grid min-w-0 grid-cols-3 gap-2 border-t border-white/5 pt-4 sm:gap-3">
              {metrics.map((metric) => (
                <div key={metric.label} className="system-panel-quiet min-w-0 p-3 text-center">
                  <AnimatedCounter to={metric.value} suffix={metric.suffix} color={metric.color} trigger={isInView} />
                  <span className="text-xs text-gray-500">{metric.label}</span>
                </div>
              ))}
            </motion.div>
          </motion.aside>

          <motion.div
            variants={revealVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="system-panel min-w-0 overflow-hidden p-5 sm:p-6 lg:p-8"
          >
            {status === 'success' ? (
              <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-500/20">
                  <Check className="h-8 w-8 text-emerald-400" />
                </div>
                <h3 className="mb-2 text-xl font-semibold text-white">Mensagem Enviada!</h3>
                <p className="text-gray-400">Obrigado pelo contato. Responderei em breve.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="mb-2 flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-cyan-300" />
                  <span className="system-label text-cyan-300">Mensagem protegida por honeypot</span>
                </div>

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
                    onChange={(event) => handleChange('name', event.target.value)}
                    placeholder="Seu nome"
                    aria-invalid={Boolean(errors.name)}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`bg-white/5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 ${
                      errors.name ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.name && (
                    <span id="name-error" className="flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
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
                    onChange={(event) => handleChange('email', event.target.value)}
                    placeholder="seu@email.com"
                    aria-invalid={Boolean(errors.email)}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                    className={`bg-white/5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 ${
                      errors.email ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.email && (
                    <span id="email-error" className="flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      {errors.email}
                    </span>
                  )}
                </div>

                <div className="space-y-2">
                  <Label htmlFor="message" className="text-gray-300">Mensagem</Label>
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(event) => handleChange('message', event.target.value)}
                    placeholder="Sua mensagem..."
                    rows={6}
                    aria-invalid={Boolean(errors.message)}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                    className={`resize-none bg-white/5 text-white placeholder:text-gray-600 focus:border-cyan-500/50 focus:ring-cyan-500/20 ${
                      errors.message ? 'border-red-500/50' : 'border-white/10'
                    }`}
                  />
                  {errors.message && (
                    <span id="message-error" className="flex items-center gap-1 text-sm text-red-400">
                      <AlertCircle className="h-4 w-4" />
                      {errors.message}
                    </span>
                  )}
                </div>

                {status === 'error' && requestError && (
                  <div className="border border-red-500/30 bg-red-500/10 p-3 text-sm text-red-300">
                    {requestError}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={status === 'loading'}
                  className="system-button-primary h-14 w-full disabled:opacity-50"
                >
                  {status === 'loading' ? (
                    <>
                      <Loader2 className="h-5 w-5 animate-spin" />
                      Enviando...
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
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
