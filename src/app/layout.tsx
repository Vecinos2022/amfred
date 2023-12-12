import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { Providers } from './providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Control de asistencias - Vecinos Comprometidos',
  description: 'Control de asistencias - Vecinos Comprometidos'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>
          <div className="flex flex-col h-full">{children}</div>
        </Providers>
      </body>
    </html>
  )
}
