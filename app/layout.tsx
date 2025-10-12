import type { Metadata } from 'next';
import { Crimson_Pro, Electrolize, Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from './ui/layout/Header';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const crimson = Crimson_Pro({
  variable: '--font-crimson',
  weight: '500',
});

const electrolize = Electrolize({
  variable: '--font-electrolize',
  weight: '400'
})

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
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${crimson.variable}${electrolize.variable} antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
