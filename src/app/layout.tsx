import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import PageFadeIn from '@/components/ui/PageFadeIn';
import './globals.css';

export const metadata: Metadata = {
  title: 'Burhan Ahmad Khan — Senior Full Stack Engineer',
  description:
    '4+ years building production web and mobile apps across fintech, SaaS, healthcare, and clean energy. React, Angular, NestJS, LLM Integration.',
  icons: {
    icon: `${process.env.NODE_ENV === 'production' ? '/portfolio' : ''}/favicon.ico`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-US" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>
        <PageFadeIn>{children}</PageFadeIn>
      </body>
    </html>
  );
}
