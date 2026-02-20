import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Mail, Linkedin, Send, Check, Loader2, AlertCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import type { ContactFormData } from '@/types';

type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState<FormStatus>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: '-100px' });

  const validateForm = (): boolean => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.name.trim() || formData.name.length < 2) {
      newErrors.name = 'Nome deve ter pelo menos 2 caracteres';
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email)) {
      newErrors.email = 'Email inválido';
    }

    if (!formData.message.trim() || formData.message.length < 10) {
      newErrors.message = 'Mensagem deve ter pelo menos 10 caracteres';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setStatus('loading');

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    // Simulate success (in real app, this would be an actual API call)
    setStatus('success');
    setFormData({ name: '', email: '', message: '' });

    // Reset after 3 seconds
    setTimeout(() => setStatus('idle'), 3000);
  };

  const handleChange = (field: keyof ContactFormData, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  return (
    <section id="contact" className="relative py-24 lg:py-32 bg-dark-100">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-16">
        {/* Section header */}
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

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left column - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-xl font-semibold text-white mb-4">
                Informações de Contato
              </h3>
              <p className="text-gray-400 mb-6">
                Prefere outro canal? Estou disponível nas seguintes plataformas:
              </p>
            </div>

            <div className="space-y-4">
              <a
                href="https://github.com/PedroHenrique2107"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-cyan-500/30 hover:bg-cyan-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-cyan-500/10 transition-colors">
                  <Github className="w-6 h-6 text-gray-400 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div>
                  <span className="block text-white font-medium">GitHub</span>
                  <span className="text-gray-500 font-mono text-sm">github.com/PedroHenrique2107</span>
                </div>
              </a>

              <a
                href="mailto:pedrohmsousa2023@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-emerald-500/30 hover:bg-emerald-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-emerald-500/10 transition-colors">
                  <Mail className="w-6 h-6 text-gray-400 group-hover:text-emerald-400 transition-colors" />
                </div>
                <div>
                  <span className="block text-white font-medium">Email</span>
                  <span className="text-gray-500 font-mono text-sm">pedrohmsousa2023@gmail.com</span>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/pedro-henrique-mendes-78a59325a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/5 hover:border-purple-500/30 hover:bg-purple-500/5 transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-purple-500/10 transition-colors">
                  <Linkedin className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
                </div>
                <div>
                  <span className="block text-white font-medium">LinkedIn</span>
                  <span className="text-gray-500 font-mono text-sm">https://www.linkedin.com/in/pedro-henrique-mendes-78a59325a/</span>
                </div>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 pt-8 border-t border-white/5">
              <div className="text-center">
                <span className="block text-2xl font-bold text-cyan-400">20+</span>
                <span className="text-gray-500 text-sm">Projetos</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-emerald-400">1+</span>
                <span className="text-gray-500 text-sm">Anos Exp.</span>
              </div>
              <div className="text-center">
                <span className="block text-2xl font-bold text-purple-400">99%</span>
                <span className="text-gray-500 text-sm">Uptime</span>
              </div>
            </div>
          </motion.div>

          {/* Right column - Form */}
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
                <h3 className="text-xl font-semibold text-white mb-2">
                  Mensagem Enviada!
                </h3>
                <p className="text-gray-400 text-center">
                  Obrigado pelo contato. Responderei em breve.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Honeypot field - hidden */}
                <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

                <div className="space-y-2">
                  <Label htmlFor="name" className="text-gray-300">
                    Nome
                  </Label>
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
                  <Label htmlFor="email" className="text-gray-300">
                    Email
                  </Label>
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
                  <Label htmlFor="message" className="text-gray-300">
                    Mensagem
                  </Label>
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
