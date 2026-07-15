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
    id: 'msc',
    role: 'Master of Science in Information Technology',
    company: 'Thakur College of Science & Commerce',
    period: '2024 - 2026',
    description:
      'Pursuing advanced degree with focus on cybersecurity, risk management, and enterprise security governance.',
    achievements: [
      'CGPA: 8.25/10',
      'Specialized in cybersecurity and compliance',
      'Completed industry-relevant certifications',
    ],
    technologies: ['NIST Framework', 'ISO 27001', 'Risk Assessment', 'Security Governance'],
  },
  {
    id: 'bsc',
    role: 'Bachelor of Science in Information Technology',
    company: 'Nirmala Memorial Foundation College',
    period: '2021 - 2024',
    description:
      'Built strong foundation in IT fundamentals, networking, database management, and cybersecurity basics.',
    achievements: [
      'CGPA: 7.83/10',
      'Developed interest in GRC and security',
      'Participated in security workshops',
    ],
    technologies: ['Networking', 'Database Management', 'Web Development', 'System Administration'],
  },
];

export function Experience() {
  return (
    <section id="experience" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Background"
            title="Education"
            description="Academic foundation in information technology with cybersecurity specialization."
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
