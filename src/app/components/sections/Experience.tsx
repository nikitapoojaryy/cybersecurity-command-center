'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';

interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    id: 'current',
    role: 'Senior Penetration Tester',
    company: 'Security Firm Inc.',
    period: '2023 - Present',
    description:
      'Leading penetration testing engagements for Fortune 500 companies and critical infrastructure.',
    achievements: [
      'Conducted 30+ security assessments',
      'Trained team of 5 junior pentesters',
      'Developed custom exploitation frameworks',
    ],
    technologies: ['Metasploit', 'Burp Suite', 'Python', 'Cobalt Strike'],
  },
  {
    id: 'prev-1',
    role: 'Security Researcher',
    company: 'Enterprise Security Co.',
    period: '2021 - 2023',
    description:
      'Researched vulnerabilities and developed security solutions for enterprise environments.',
    achievements: [
      'Published 3 security research papers',
      'Discovered 5 CVEs',
      'Built automated vulnerability scanning tools',
    ],
    technologies: ['Python', 'JavaScript', 'Kubernetes', 'AWS'],
  },
  {
    id: 'prev-2',
    role: 'Junior Penetration Tester',
    company: 'Cybersecurity Startup',
    period: '2020 - 2021',
    description:
      'Performed security assessments and vulnerability testing for SMB and enterprise clients.',
    achievements: [
      'Completed 15+ assessments',
      'Earned OSCP certification',
      'Mentored by industry experts',
    ],
    technologies: ['Nmap', 'Burp Suite', 'Metasploit', 'Linux'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Career"
            title="Professional Experience"
            description="Journey in ethical hacking and cybersecurity research."
          />
        </div>

        {/* Timeline */}
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card>
                <div className="flex items-start gap-4">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-4 h-4 rounded-full bg-[var(--primary)] border-4 border-[var(--background)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                      <div>
                        <h3 className="text-xl font-semibold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-[var(--primary)] font-medium">
                          {exp.company}
                        </p>
                      </div>
                      <p className="text-sm text-[var(--muted)] mt-1 md:mt-0">
                        {exp.period}
                      </p>
                    </div>

                    <p className="text-[var(--muted)] mb-4">
                      {exp.description}
                    </p>

                    {/* Achievements */}
                    <div className="mb-4">
                      <p className="text-xs text-[var(--muted)] font-semibold mb-2 uppercase">
                        Key Achievements
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-[var(--muted)] flex gap-2"
                          >
                            <span className="text-[var(--primary)] flex-shrink-0">
                              ▸
                            </span>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech) => (
                        <Badge key={tech} variant="default" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
