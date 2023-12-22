import NavbarDashboard from '@/components/dashboard/NavbarDashboard'
import { Providers } from '../providers'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <Providers>
      <NavbarDashboard>{children}</NavbarDashboard>
    </Providers>
  )
}
