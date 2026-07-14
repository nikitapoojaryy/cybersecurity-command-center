'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { animations } from '@/app/config/animations';
import { Shield, Zap, Target } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Shield,
      title: 'Offensive Security Certified',
      description: 'OSCP, CEH, and other industry-leading ethical hacking certifications.',
    },
    {
      icon: Zap,
      title: 'High-Impact Assessments',
      description: 'Discovered critical vulnerabilities protecting Fortune 500 enterprises.',
    },
    {
      icon: Target,
      title: 'Red Team Operations',
      description: 'Simulated advanced attack scenarios to improve security posture.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="About"
            title="Who I Am"
            description="Dedicated ethical hacker with a passion for finding and fixing security vulnerabilities before adversaries do."
          />
        </div>

        {/* Main About Content */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <motion.div
            initial={animations.fadeInUp.initial}
            whileInView={animations.fadeInUp.animate}
            transition={animations.fadeInUp.transition}
            viewport={{ once: true }}
          >
            <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
              I'm a penetration tester and ethical hacker with 5+ years of experience securing enterprise infrastructure. My work focuses on identifying vulnerabilities through realistic attack scenarios and providing actionable remediation strategies.
            </p>
            <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
              I specialize in network penetration testing, application security assessment, and red team operations. I've worked with organizations across finance, healthcare, technology, and government sectors to strengthen their security defenses.
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Beyond assessments, I'm passionate about security research and knowledge sharing. I regularly contribute to the cybersecurity community through published research, speaking engagements, and mentoring the next generation of ethical hackers.
            </p>
          </motion.div>

          {/* Highlights */}
          <motion.div
            className="space-y-4"
            initial={animations.containerVariants.hidden}
            whileInView={animations.containerVariants.show}
            viewport={{ once: true }}
            variants={animations.containerVariants}
          >
            {highlights.map((item, index) => (
              <motion.div
                key={index}
                variants={animations.itemVariants}
              >
                <Card className="flex gap-4 p-6">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-lg bg-[var(--primary)]/10">
                      <item.icon
                        className="h-6 w-6 text-[var(--primary)]"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-[var(--muted)]">
                      {item.description}
                    </p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Container>
    </section>
  );
}
