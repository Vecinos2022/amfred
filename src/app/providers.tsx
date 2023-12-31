'use client'
import { NextUIProvider } from '@nextui-org/react'
import { SessionProvider } from 'next-auth/react'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <SessionProvider>
      <NextUIProvider>
        <main className='light text-foreground bg-background'>{children}</main>
      </NextUIProvider>
    </SessionProvider>
  )
}
