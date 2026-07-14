import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nikita Poojary | GRC Analyst & Cybersecurity Professional',
  description:
    'Cybersecurity professional specializing in Governance, Risk, and Compliance (GRC). Portfolio showcasing risk assessment, ISO 27001 controls, NIST framework implementation, and compliance expertise.',
  keywords: [
    'GRC analyst',
    'cybersecurity',
    'risk assessment',
    'ISO 27001',
    'NIST framework',
    'compliance',
    'governance',
    'security controls',
  ],
  authors: [{ name: 'Nikita Poojary' }],
  creator: 'Nikita Poojary',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nikitapoojary.com',
    title: 'Nikita Poojary | GRC Analyst & Cybersecurity Professional',
    description:
      'GRC and cybersecurity portfolio showcasing risk assessment, compliance frameworks, and security governance expertise.',
    images: [
      {
        url: 'https://nikitapoojary.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikita Poojary - GRC Analyst',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikita Poojary | Ethical Hacker & Penetration Tester',
    description: 'Ethical hacking portfolio and security research',
    images: ['https://yourportfolio.com/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="theme-color" content="#080808" />
      </head>
      <body className="bg-[var(--background)] text-[var(--text)]">
        {children}
      </body>
    </html>
  );
}