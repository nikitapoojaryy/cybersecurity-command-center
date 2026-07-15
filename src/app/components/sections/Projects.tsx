'use client';

import { useRef, useState } from 'react';
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
    id: 'risk-assessment',
    title: 'Information Security Risk Assessment Project',
    description:
      'Comprehensive risk assessment framework for enterprise environment, identifying and prioritizing security risks.',
    image: '/images/project-1.jpg',
    technologies: ['Risk Assessment', 'NIST Framework', 'Excel', 'Documentation'],
    securityConcepts: ['Risk Management', 'Vulnerability Assessment', 'Threat Analysis'],
    achievements: [
      'Developed complete risk register',
      'Identified critical security gaps',
      'Provided remediation prioritization',
    ],
  },
  {
    id: 'iso-27001',
    title: 'ISO/IEC 27001 Security Controls Mapping',
    description:
      'Mapped existing security controls to ISO 27001 standards, ensuring compliance and identifying control gaps.',
    image: '/images/project-2.jpg',
    technologies: ['ISO 27001', 'Compliance Mapping', 'Excel', 'Documentation'],
    securityConcepts: ['Compliance', 'Control Framework', 'Security Governance'],
    achievements: [
      'Completed controls mapping to ISO 27001',
      'Identified compliance gaps',
      'Developed implementation roadmap',
    ],
  },
  {
    id: 'hands-on-labs',
    title: 'Cybersecurity Hands-on Lab Practice',
    description:
      'Practical hands-on exercises in network security, vulnerability assessment, and security tools implementation.',
    image: '/images/project-3.jpg',
    technologies: ['Wireshark', 'Nmap', 'Virtual Machines', 'Linux', 'Windows'],
    securityConcepts: ['Network Security', 'Packet Analysis', 'Vulnerability Scanning'],
    achievements: [
      'Completed advanced security labs',
      'Mastered network analysis tools',
      'Practiced incident response scenarios',
    ],
  },
];

export function Projects() {
  const [previews, setPreviews] = useState<Record<string, string>>({});
  const inputRefs = useRef<Record<string, HTMLInputElement | null>>({});

  const handleImageSelect = (projectId: string, file?: File | null) => {
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPreviews((p) => ({ ...p, [projectId]: url }));
  };

  const openImagePicker = (projectId: string) => {
    const ref = inputRefs.current[projectId];
    ref?.click();
  };

  return (
    <section id="projects" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Portfolio"
            title="GRC & Security Projects"
            description="Risk assessment, compliance mapping, and hands-on security implementations."
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
                {/* Image / Upload */}
                <div className="h-48 bg-[var(--surface)] overflow-hidden relative mb-6">
                  {previews[project.id] ? (
                    <img src={previews[project.id]} alt={project.title} className="w-full h-full object-cover" />
                  ) : project.image ? (
                    <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-[var(--primary)]/10 to-[var(--hover)]/10 flex items-center justify-center">
                      <span className="text-sm text-[var(--muted)]">{project.title.slice(0, 1)}</span>
                    </div>
                  )}

                  {/* Hidden file input for local preview */}
                  <input
                    ref={(el) => { inputRefs.current[project.id] = el; }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleImageSelect(project.id, e.target.files?.[0] || null)}
                  />

                  <div className="absolute right-3 top-3">
                    <button
                      type="button"
                      className="px-3 py-1 text-xs rounded bg-[var(--cards)] border border-[var(--border)] text-[var(--muted)] hover:text-[var(--primary)]"
                      onClick={() => openImagePicker(project.id)}
                    >
                      Upload Photo
                    </button>
                  </div>
                </div>

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
