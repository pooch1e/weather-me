import type { Metadata } from 'next';
import { Electrolize } from 'next/font/google';
import './globals.css';
import Header from './ui/layout/Header';

const electrolize = Electrolize({
  variable: '--font-electrolize',
  weight: '400',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'BearTech Weather Test',
  description: 'next.js',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="text-white bg-black">
      <body className={`} ${electrolize.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
