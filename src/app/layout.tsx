import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AppProvider } from '@/context/app-context';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'LEGIT APP - Authentication for Handbags, Sneakers & Designer Products',
  description: 'Fast & reliable authentication for luxury items powered by expert authenticators and AI technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0908] text-white min-h-screen flex flex-col`}>
        <AppProvider>
          <Navbar />
          <main className="flex-grow">{children}</main>
          <Footer />
        </AppProvider>
      </body>
    </html>
  );
}
