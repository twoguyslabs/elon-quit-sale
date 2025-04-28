import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/header'

export const metadata: Metadata = {
  title: '$RAGE Token | Launchpad',
  description: 'The angriest token in crypto. Join the revolution.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang='en' className='dark'>
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  )
}
