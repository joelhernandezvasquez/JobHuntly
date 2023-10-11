import './globals.css'
import type { Metadata } from 'next';
import { Epilogue } from 'next/font/google';
import localFont from 'next/font/local';

const epilogue = Epilogue(
  {
    weight: ['400', '700'],
    style: ['normal', 'italic'],
    subsets:['latin']
  }
  );

const clashFont = localFont({
  src:'./fonts/ClashDisplay-Semibold.otf',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Job Huntly',
  description: 'Job, Job Hunt',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${clashFont.className} ${epilogue.className}`}>{children}</body>
    </html>
  )
}
