'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Button } from '@/app/components/ui/Button';
import { animations } from '@/app/config/animations';
import { Code, Mail, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Get In Touch"
            title="Let's Connect"
            description="Interested in collaboration or want to discuss security challenges? Reach out."
          />
        </div>

        <div className="grid md:grid-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={animations.fadeInUp.initial}
            whileInView={animations.fadeInUp.animate}
            transition={animations.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-white mb-8">
              Let's discuss your security challenges
            </h3>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--primary)]/10">
                    <Mail className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1">Email</h4>
                  <a
                    href="mailto:nikitapoojarey@gmail.com"
                    className="text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    nikitapoojarey@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--primary)]/10">
                    <MapPin className="h-6 w-6 text-[var(--primary)]" />
                  </div>
                </div>

                <div>
                  <h4 className="text-white font-semibold mb-1">Location</h4>
                  <p className="text-[var(--muted)]">India</p>
                </div>
              </div>

              <div>
                <h4 className="text-white font-semibold mb-4">Follow me</h4>

                <div className="flex flex-wrap gap-4">
                  <a
                    href="https://github.com/nikitapoojaryy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    <Code size={20} />
                    GitHub
                  </a>

                  <a
                    href="https://linkedin.com/in/nikitapoojaryy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                  >
                    <Mail size={20} />
                    LinkedIn
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={animations.fadeInUp.initial}
            whileInView={animations.fadeInUp.animate}
            transition={{
              ...animations.fadeInUp.transition,
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            {isSubmitted ? (
              <div className="bg-green-900/20 border border-green-700/30 rounded-lg p-8 text-center">
                <div className="text-2xl font-semibold text-green-400 mb-2">
                  Success! Message Sent
                </div>

                <p className="text-[var(--muted)]">
                  Thank you for reaching out. I will get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Full Name
                  </label>

                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--cards)] border border-[var(--border)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm medium text-white mb-2"
                  >
                    Email Address
                  </label>

                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--cards)] border border-[var(--border)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Subject
                  </label>

                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-[var(--cards)] border border-[var(--border)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all"
                    placeholder="What's this about?"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-white mb-2"
                  >
                    Message
                  </label>

                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[var(--cards)] border border-[var(--border)] rounded-lg text-white placeholder-[var(--muted)] focus:outline-none focus:ring-2 focus:ring-[var(--primary)] focus:border-transparent transition-all resize-none"
                    placeholder="Tell me more..."
                  />
                </div>

                <Button
                  variant="primary"
                  size="lg"
                  type="submit"
                  className="w-full"
                >
                  Send Message
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
