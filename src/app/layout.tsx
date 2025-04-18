import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Navbar } from '@/components/layout/navbar';
import { Footer } from '@/components/layout/footer';
import { AppProvider } from '@/context/app-context';
import { AuthProvider } from '@/lib/auth'; // Import AuthProvider
import { Toaster } from 'sonner'; // Import Toaster for auth notifications

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Authentico - Authentication for Handbags, Sneakers & Designer Products',
  description: 'Fast & reliable authentication for luxury items powered by expert authenticators and AI technology',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/logos/luxury-pattern-light.png" as="image" />
      </head>
      <body className={`${inter.className} bg-white text-[#1A1A1A] min-h-screen flex flex-col`}>
        <AppProvider>
          <AuthProvider> {/* Add AuthProvider here */}
            <Toaster position="top-right" /> {/* Add Toaster for notifications */}
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </AuthProvider>
        </AppProvider>
      </body>
    </html>
  );
}
