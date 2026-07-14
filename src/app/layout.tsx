import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nikita Poojary | Ethical Hacker & Penetration Tester',
  description:
    'Ethical hacking portfolio showcasing penetration testing, red team exercises, security research, and enterprise security expertise.',
  keywords: [
    'ethical hacker',
    'penetration tester',
    'red team',
    'cybersecurity',
    'security research',
    'enterprise security',
  ],
  authors: [{ name: 'Nikita Poojary' }],
  creator: 'Nikita Poojary',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://yourportfolio.com',
    title: 'Nikita Poojary | Ethical Hacker & Penetration Tester',
    description:
      'Ethical hacking portfolio showcasing penetration testing, red team exercises, and security expertise.',
    images: [
      {
        url: 'https://yourportfolio.com/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Nikita Poojary - Ethical Hacker',
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