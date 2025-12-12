import './globals.css'

import { Kumbh_Sans } from 'next/font/google'

import LayoutClient from './layout.client'

const kumbhSans = Kumbh_Sans({
  variable: '--font-kumbh-sans',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`
        ${kumbhSans.variable}
        antialiased
      `}>
        <LayoutClient>{children}</LayoutClient>
      </body>
    </html>
  )
}
