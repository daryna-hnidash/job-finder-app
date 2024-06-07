import { Footer } from '../components/ui/Footer';
import { Navbar } from '../components/ui/Navbar';
import { Providers } from '@/globalRedux/provider';
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Job App',
  description:
    'Find Your Dream Job Explore thousands of opportunities and take the next step in your career.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        <Providers>
          <Navbar />
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
