'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';
import { Code, ExternalLink } from 'lucide-react';

interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  securityConcepts: string[];
  achievements: string[];
  github?: string;
  demo?: string;
}

const projects: ProjectItem[] = [
  {
    id: 'internal-pentest',
    title: 'Internal Network Penetration Test',
    description:
      'Comprehensive assessment of enterprise internal network discovering critical AD misconfigurations.',
    image: '/images/project-1.jpg',
    technologies: ['Metasploit', 'Impacket', 'Powershell'],
    securityConcepts: ['Lateral Movement', 'Privilege Escalation', 'AD Exploitation'],
    achievements: [
      'Identified 12 critical vulnerabilities',
      'Achieved domain admin access',
      'Provided remediation roadmap',
    ],
    github: 'https://github.com',
    demo: 'https://example.com',
  },
  {
    id: 'web-app-pentest',
    title: 'Web Application Security Assessment',
    description:
      'In-depth testing of custom web application uncovering authentication and injection flaws.',
    image: '/images/project-2.jpg',
    technologies: ['Burp Suite', 'OWASP ZAP', 'Python'],
    securityConcepts: ['OWASP Top 10', 'API Security', 'Authentication Bypass'],
    achievements: [
      'Found SQL injection in payment module',
      'Identified privilege escalation path',
      'Zero-day-like XSS discovery',
    ],
    github: 'https://github.com',
  },
  {
    id: 'cloud-infrastructure',
    title: 'Cloud Infrastructure Security Audit',
    description:
      'Assessed AWS environment configuration discovering S3 misconfigurations and IAM issues.',
    image: '/images/project-3.jpg',
    technologies: ['AWS', 'Terraform', 'ScoutSuite'],
    securityConcepts: ['Cloud Security', 'IaC Security', 'Identity Management'],
    achievements: [
      'Secured exposed data buckets',
      'Fixed overpermissioned IAM roles',
      'Implemented security baselines',
    ],
  },
  {
    id: 'red-team-exercise',
    title: 'Red Team Simulation',
    description:
      'Multi-phase red team exercise simulating sophisticated attack against corporate environment.',
    image: '/images/project-4.jpg',
    technologies: ['Empire', 'Cobalt Strike', 'Custom C2'],
    securityConcepts: ['Evasion', 'Command & Control', 'Persistence'],
    achievements: [
      'Bypassed EDR detection',
      'Established persistence',
      'Exfiltrated sensitive data',
    ],
    github: 'https://github.com',
  },
];

export function Projects() {
  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Portfolio"
            title="Security Projects"
            description="Real-world penetration tests, security assessments, and red team operations."
          />
        </div>

        {/* Projects Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-8"
          initial={animations.containerVariants.hidden}
          whileInView={animations.containerVariants.show}
          viewport={{ once: true }}
          variants={animations.containerVariants}
        >
          {projects.map((project) => (
            <motion.div key={project.id} variants={animations.itemVariants}>
              <Card className="group h-full flex flex-col overflow-hidden">
                {/* Image */}
                {project.image && (
                  <div className="h-48 bg-[var(--surface)] overflow-hidden relative mb-6">
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--hover)]/10 flex items-center justify-center">
                      <span className="text-sm text-[var(--muted)]">
                        {project.title.slice(0, 1)}
                      </span>
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {project.title}
                  </h3>
                  <p className="text-[var(--muted)] text-sm mb-4 flex-grow">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="mb-4">
                    <p className="text-xs text-[var(--muted)] font-semibold mb-2 uppercase">
                      Technologies
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Security Concepts */}
                  <div className="mb-4">
                    <p className="text-xs text-[var(--muted)] font-semibold mb-2 uppercase">
                      Security Focus
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.securityConcepts.map((concept) => (
                        <Badge key={concept} variant="primary" className="text-xs">
                          {concept}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  {/* Achievements */}
                  <div className="mb-6">
                    <p className="text-xs text-[var(--muted)] font-semibold mb-2 uppercase">
                      Key Achievements
                    </p>
                    <ul className="space-y-1 text-xs text-[var(--muted)]">
                      {project.achievements.map((achievement) => (
                        <li key={achievement} className="flex gap-2">
                          <span className="text-[var(--primary)] flex-shrink-0">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Links */}
                  <div className="flex gap-3 pt-4 border-t border-[var(--border)]">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                      >
                        <Code size={16} />
                        Code
                      </a>
                    )}
                    {project.demo && (
                      <a
                        href={project.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-[var(--muted)] hover:text-[var(--primary)] transition-colors"
                      >
                        <ExternalLink size={16} />
                        Details
                      </a>
                    )}
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
