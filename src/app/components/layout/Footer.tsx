'use client';

import { Code, Mail, X } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      icon: Code,
      label: 'Code',
      url: 'https://github.com',
      ariaLabel: 'GitHub profile',
    },
    {
      icon: X,
      label: 'X',
      url: 'https://x.com',
      ariaLabel: 'X (Twitter) profile',
    },
    {
      icon: Mail,
      label: 'Email',
      url: 'mailto:your@email.com',
      ariaLabel: 'Send email',
    },
  ];

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--secondary)]">
      <div className="max-w-7xl mx-auto px-6 md:px-8 py-12">
        {/* Main footer content */}
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-xl mb-2">
              <span className="text-[var(--primary)]">●</span> NK
            </h3>
            <p className="text-[var(--muted)] text-sm">
              Ethical hacker & penetration tester
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Navigation</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a href="#about" className="hover:text-[var(--primary)] transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-[var(--primary)] transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[var(--primary)] transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-[var(--muted)]">
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition-colors">
                  Research
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-[var(--primary)] transition-colors">
                  Tools
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-4">
              {socialLinks.map(({ icon: Icon, url, ariaLabel }) => (
                <a
                  key={ariaLabel}
                  href={url}
                  aria-label={ariaLabel}
                  className="w-10 h-10 rounded-lg bg-[var(--cards)] border border-[var(--border)] flex items-center justify-center text-[var(--muted)] hover:text-[var(--primary)] hover:border-[var(--primary)] transition-all duration-200"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-[var(--border)] my-8" />

        {/* Bottom footer */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-[var(--muted)]">
          <p>
            © {currentYear} Nikita Poojary. All rights reserved.
          </p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[var(--primary)] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
