import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import NavbarLanding from '@/components/landing/NavbarLanding'
import FooterLanding from '@/components/landing/FooterLanding'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'AMFRED A.C.',
  description: 'AMFRED A.C.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <NavbarLanding />
      <div className={inter.className}>
        <div className='flex flex-col h-full'>{children}</div>
      </div>
      <FooterLanding />
    </>
  )
}
