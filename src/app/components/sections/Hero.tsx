'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Download } from 'lucide-react';
import { Button } from '@/app/components/ui/Button';
import { Container } from '@/app/components/ui/Container';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';

export function Hero() {
  return (
    <section className="min-h-screen pt-32 pb-20 flex items-center relative">
      <Container>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={animations.fadeInUp.initial}
            animate={animations.fadeInUp.animate}
            transition={animations.fadeInUp.transition}
          >
            {/* Tag */}
            <div className="mb-6">
              <Badge variant="primary">
                GRC Analyst & Cybersecurity Professional
              </Badge>
            </div>

            {/* Main Headline */}
            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Governance, Risk &
              <span className="block mt-2 bg-gradient-to-r from-[var(--primary)] to-[var(--hover)] bg-clip-text text-transparent">
                Compliance Excellence
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-lg text-[var(--muted)] mb-8 leading-relaxed max-w-xl">
              Dedicated cybersecurity professional specializing in risk assessment, compliance frameworks, security controls, and enterprise governance.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <Button 
                variant="primary" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
              >
                View Projects
                <ArrowRight size={18} />
              </Button>
              <Button 
                variant="outline" 
                size="lg" 
                className="flex items-center gap-2"
                onClick={() => {
                  const link = document.createElement('a');
                  link.href = '/resume.pdf';
                  link.download = 'Nikita_Poojary_Resume.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
              >
                <Download size={18} />
                Download Resume
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-[var(--border)]">
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">6</div>
                <p className="text-sm text-[var(--muted)]">Certifications</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">3</div>
                <p className="text-sm text-[var(--muted)]">Projects</p>
              </div>
              <div>
                <div className="text-2xl font-bold text-[var(--primary)]">2/6</div>
                <p className="text-sm text-[var(--muted)]">Courses</p>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Animated Terminal */}
          <motion.div
            initial={animations.fadeInUp.initial}
            animate={animations.fadeInUp.animate}
            transition={{
              ...animations.fadeInUp.transition,
              delay: 0.2,
            }}
          >
            <div className="relative">
              {/* Terminal-like card */}
              <div className="bg-[var(--cards)] border border-[var(--border)] rounded-2xl overflow-hidden">
                {/* Terminal header */}
                <div className="bg-[var(--secondary)] border-b border-[var(--border)] px-6 py-4 flex items-center gap-3">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <span className="text-xs text-[var(--muted)] ml-4 font-mono">
                    security-profile.sh
                  </span>
                </div>

                {/* Terminal content */}
                <div className="p-6 font-mono text-sm space-y-4">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.4, duration: 0.5 }}
                  >
                    <div className="text-[var(--muted)]">
                      $ <span className="text-[var(--text)]">whoami</span>
                    </div>
                    <div className="text-[var(--primary)] mt-2">
                     nikita_poojary | grc_analyst | cybersecurity
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6, duration: 0.5 }}
                  >
                    <div className="text-[var(--muted)] mt-4">
                     $ <span className="text-[var(--text)]">expertise --display</span>
                    </div>
                    <div className="text-[var(--text)] mt-2 space-y-1 text-xs">
                     <div>→ Risk Assessment & Compliance</div>
                     <div>→ NIST Framework Implementation</div>
                     <div>→ ISO 27001 Controls Mapping</div>
                     <div>→ Security Governance</div>
                     <div>→ Vulnerability Management</div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.5 }}
                  >
                    <div className="text-[var(--muted)] mt-4">
                     $ <span className="text-[var(--text)]">certifications --list</span>
                    </div>
                   <div className="text-[var(--primary)] mt-2">
                     [✓] 6 Industry Certifications
                    </div>
                  </motion.div>

                  <div className="text-[var(--muted)] mt-4">$ █</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-[var(--primary)] to-[var(--hover)] opacity-20 blur-2xl -z-10" />
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
