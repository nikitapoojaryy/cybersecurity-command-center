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
      title: 'GRC Certified Professional',
      description: 'Google Cybersecurity, Cisco, IBM, Fortinet, DPDPA, and ISO 27001 certified.',
    },
    {
      icon: Zap,
      title: 'Risk & Compliance Expertise',
      description: 'Skilled in risk assessment, NIST frameworks, ISO 27001 controls mapping, and compliance reporting.',
    },
    {
      icon: Target,
      title: 'Security Governance',
      description: 'Experience in developing security policies, access controls, and incident response strategies.',
    },
  ];

  return (
    <section id="about" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="About"
            title="Who I Am"
            description="Entry-level GRC professional with strong foundation in cybersecurity, risk management, and compliance frameworks."
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
              I'm a cybersecurity professional pursuing my MSc in Information Technology with a strong focus on Governance, Risk, and Compliance. My academic foundation and practical certifications equip me with expertise in security frameworks, risk assessment, and compliance management.
            </p>
            <p className="text-lg text-[var(--muted)] mb-6 leading-relaxed">
              I specialize in implementing NIST Cybersecurity Framework, ISO 27001 controls, and developing comprehensive risk assessments. My work focuses on building secure, compliant infrastructure and helping organizations establish robust governance practices.
            </p>
            <p className="text-lg text-[var(--muted)] leading-relaxed">
              Beyond academics, I'm committed to continuous learning and industry excellence. I'm actively pursuing advanced certifications and staying updated with emerging security threats and compliance requirements across different sectors.
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
