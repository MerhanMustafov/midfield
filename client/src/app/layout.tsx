import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="grid  min-h-svh max-w-full grid-rows-[max-content,1fr,max-content]">
          <header>
            <Navigation />
          </header>
          <main className="mx-auto w-full max-w-screen-xl">{children}</main>
          <footer className="text-black">Copyrights</footer>
        </div>
      </body>
    </html>
  );
}
