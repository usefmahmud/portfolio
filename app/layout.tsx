import type { Metadata } from 'next';
import './globals.css';
import { madeTommyFamily } from '@/lib/fonts';
import Header from '@/components/layout/header';
import Navbar from '@/components/layout/navbar';

export const metadata: Metadata = {
  title: 'Yousef Mahmoud',
  description:
    'A portfolio showcasing the work of Yousef Mahmoud, a web developer and software engineer specializing in React, Next.js, and modern web technologies.',
  keywords: [
    'Yousef Mahmoud',
    'Portfolio',
    'Web Developer',
    'Software Engineer',
    'React',
    'Next.js',
    'JavaScript',
    'TypeScript',
    'Frontend Developer',
    'web development',
    'UI/UX Design',
    'Responsive Design',
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${madeTommyFamily.variable} overflow-hidden antialiased`}
      >
        <div className='flex h-screen flex-col px-10'>
          <Header />
          <div className='border-foreground h-full w-full border-5'>
            {children}
          </div>
          <Navbar />
        </div>
      </body>
    </html>
  );
}
