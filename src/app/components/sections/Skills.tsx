'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';

interface SkillCategory {
  name: string;
  icon: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    name: 'Security Frameworks',
    icon: '🔒',
    skills: ['NIST Framework', 'ISO 27001', 'CIS Controls', 'Risk Assessment', 'Threat Modeling'],
  },
  {
    name: 'Operating Systems',
    icon: '🖥️',
    skills: ['Windows', 'Linux Fundamentals', 'Virtual Machines', 'System Hardening'],
  },
  {
    name: 'Networking',
    icon: '🌐',
    skills: ['TCP/IP', 'DNS', 'Network Security', 'Packet Analysis', 'VPNs'],
  },
  {
    name: 'Tools & Tech',
    icon: '⚙️',
    skills: ['Wireshark', 'Nmap', 'Excel', 'Git', 'Virtual Machines', 'Documentation'],
  },
  {
    name: 'Risk Management',
    icon: '📊',
    skills: ['Risk Register', 'Compliance Reports', 'Vulnerability Mgmt', 'Access Control', 'Incident Response'],
  },
  {
    name: 'Certifications',
    icon: '🎓',
    skills: ['Google Cybersecurity', 'Cisco CCNA', 'IBM Security', 'Fortinet FCA', 'DPDPA', 'ISO 27001'],
  },
];

export function Skills() {
  return (
    <section id="skills" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Expertise"
            title="Technical Skills"
            description="Comprehensive skill set across offensive security, systems, and advanced technologies."
          />
        </div>

        {/* Skills Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          initial={animations.containerVariants.hidden}
          whileInView={animations.containerVariants.show}
          viewport={{ once: true }}
          variants={animations.containerVariants}
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.name}
              variants={animations.itemVariants}
            >
              <Card className="h-full flex flex-col">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-lg font-semibold text-white mb-4">
                  {category.name}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge key={skill} variant="default" className="text-xs">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </Container>
    </section>
  );
}
