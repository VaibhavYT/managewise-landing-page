import type { Metadata } from 'next'
import { Inter } from 'next/font/google';
import { Poppins } from 'next/font/google';
import { Outfit } from 'next/font/google';
import './globals.css'
import Navbar from '../components/navbar';
const inter = Inter({ subsets: ['latin'] })
const poppins = Poppins({
  subsets: ['latin'],
  weight: '400'
});
const outfit = Outfit({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Manage Wise -SaaS Product Landing Page',
  description: 'A site for creating business insight',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <Navbar/>
        {children}</body>
    </html>
  )
}
