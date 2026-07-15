'use client';

import { motion } from 'framer-motion';
import { Container } from '@/app/components/ui/Container';
import { SectionTitle } from '@/app/components/ui/SectionTitle';
import { Card } from '@/app/components/ui/Card';
import { Badge } from '@/app/components/ui/Badge';
import { animations } from '@/app/config/animations';
import { Calendar, ArrowRight } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  description: string;
  date: string;
  readTime: number;
  tags: string[];
  url?: string;
}

const posts: BlogPost[] = [
  {
    id: 'active-directory-exploitation',
    title: 'Active Directory Exploitation Techniques in 2024',
    description:
      'Deep dive into modern AD exploitation methods, ASREPROP, Kerberoasting, and lateral movement strategies.',
    date: 'December 2024',
    readTime: 12,
    tags: ['Active Directory', 'Windows', 'Exploitation'],
    url: '#',
  },
  {
    id: 'zero-day-discovery',
    title: 'From Fuzzing to CVE: A Zero-Day Discovery Journey',
    description:
      'Case study on discovering and responsibly disclosing a zero-day vulnerability in a major web framework.',
    date: 'November 2024',
    readTime: 15,
    tags: ['Vulnerability', 'Research', 'Disclosure'],
    url: '#',
  },
  {
    id: 'cloud-security-misconfigurations',
    title: 'AWS Misconfigurations: The Top 10 to Test',
    description:
      'Comprehensive guide to identifying and exploiting common AWS security misconfigurations in real environments.',
    date: 'October 2024',
    readTime: 10,
    tags: ['Cloud Security', 'AWS', 'Methodology'],
    url: '#',
  },
];

export function Research() {
  return (
    <section id="research" className="py-20 relative">
      <Container>
        <div className="mb-16">
          <SectionTitle
            subtitle="Knowledge"
            title="Security Research & Blog"
            description="In-depth articles, case studies, and security research findings."
          />
        </div>

        {/* Blog Posts */}
        <motion.div
          className="space-y-6"
          initial={animations.containerVariants.hidden}
          whileInView={animations.containerVariants.show}
          viewport={{ once: true }}
          variants={animations.containerVariants}
        >
          {posts.map((post) => (
            <motion.div key={post.id} variants={animations.itemVariants}>
              <Card className="group cursor-pointer hover:bg-[var(--surface)] transition-colors">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Content */}
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-[var(--primary)] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-[var(--muted)] mb-4">
                      {post.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.map((tag) => (
                        <Badge key={tag} variant="primary" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    {/* Meta */}
                    <div className="flex items-center gap-4 text-sm text-[var(--muted)]">
                      <div className="flex items-center gap-1">
                        <Calendar size={16} />
                        <span>{post.date}</span>
                      </div>
                      <span>{post.readTime} min read</span>
                    </div>
                  </div>

                  {/* Arrow */}
                  <div className="flex-shrink-0 text-[var(--primary)] group-hover:translate-x-2 transition-transform">
                    <ArrowRight size={24} />
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* View All */}
        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[var(--primary)] hover:text-[var(--hover)] font-semibold transition-colors"
          >
            View All Articles
            <ArrowRight size={18} />
          </a>
        </div>
      </Container>
    </section>
  );
}
