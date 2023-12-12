import { ReactNode } from 'react'

interface CustomCardProps {
  children: ReactNode
}

export const CustomCard = ({ children }: CustomCardProps) => {
  return <article className='flex items-center gap-4 rounded-lg border border-gray-100 bg-background p-5 shadow-small'>{children}</article>
}
