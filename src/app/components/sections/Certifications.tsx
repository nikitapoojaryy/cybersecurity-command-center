'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';
import { CheckCircle, Clock, Bookmark } from 'lucide-react';

interface CertificationItem {
  id: string;
  name: string;
  issuer: string;
  date: string;
  status: 'completed' | 'in-progress' | 'planned';
  credentialUrl?: string;
  description: string;
}

const certifications: CertificationItem[] = [
  {
    id: 'oscp',
    name: 'Offensive Security Certified Professional',
    issuer: 'Offensive Security',
    date: 'November 2023',
    status: 'completed',
    credentialUrl: 'https://verify.offsec.com',
    description:
      'Advanced penetration testing skills including exploitation, privilege escalation, and post-exploitation.',
  },
  {
    id: 'ceh',
    name: 'Certified Ethical Hacker',
    issuer: 'EC-Council',
    date: 'August 2023',
    status: 'completed',
    credentialUrl: 'https://verify.eccouncil.org',
    description: 'Comprehensive ethical hacking and security testing methodologies.',
  },
  {
    id: 'gpen',
    name: 'GIAC Certified Penetration Tester',
    issuer: 'GIAC',
    date: 'June 2024',
    status: 'completed',
    credentialUrl: 'https://verify.giac.org',
    description:
      'Advanced penetration testing and security assessment techniques.',
  },
  {
    id: 'gwapt',
    name: 'GIAC Web Application Penetration Tester',
    issuer: 'GIAC',
    date: 'Coming Q4 2024',
    status: 'in-progress',
    description: 'Specialized web application security testing and exploitation.',
  },
  {
    id: 'osint',
    name: 'OSINT Certification',
    issuer: 'OPSEU',
    date: 'Planned 2025',
    status: 'planned',
    description: 'Open-source intelligence gathering and analysis.',
  },
  {
    id: 'cloud',
    name: 'AWS Certified Security Specialist',
    issuer: 'Amazon Web Services',
    date: 'Planned 2025',
    status: 'planned',
    description: 'Cloud security, architecture, and compliance on AWS.',
  },
];

const statusConfig = {
  completed: {
    icon: CheckCircle,
    badge: 'Completed',
    variant: 'success' as const,
  },
  'in-progress': {
    icon: Clock,
    badge: 'In Progress',
    variant: 'warning' as const,
  },
  planned: {
    icon: Bookmark,
    badge: 'Planned',
    variant: 'default' as const,
  },
};

export function Certifications() {
  return (
    <section id="certifications" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Credentials"
            title="Certifications"
            description="Industry-recognized certifications and ongoing professional development."
          />
        </div>

        {/* Certifications Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          initial={animations.containerVariants.hidden}
          whileInView={animations.containerVariants.show}
          viewport={{ once: true }}
          variants={animations.containerVariants}
        >
          {certifications.map((cert) => {
            const config = statusConfig[cert.status];
            const Icon = config.icon;

            return (
              <motion.div key={cert.id} variants={animations.itemVariants}>
                <Card className="h-full flex flex-col relative overflow-hidden">
                  {/* Status badge */}
                  <div className="flex items-start justify-between mb-4">
                    <Icon className="w-5 h-5 text-[var(--primary)]" />
                    <Badge variant={config.variant}>{config.badge}</Badge>
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-2 flex-grow">
                    {cert.name}
                  </h3>

                  <p className="text-sm text-[var(--primary)] font-medium mb-2">
                    {cert.issuer}
                  </p>

                  <p className="text-sm text-[var(--muted)] mb-4">
                    {cert.description}
                  </p>

                  <div className="pt-4 border-t border-[var(--border)]">
                    <p className="text-xs text-[var(--muted)]">{cert.date}</p>
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-[var(--primary)] hover:text-[var(--hover)] transition-colors mt-2 inline-block"
                      >
                        View Credential →
                      </a>
                    )}
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </section>
  );
}
