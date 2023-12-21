import { Roles } from './roles'

interface SidebarOption {
  name: string
  id: string
}

interface childRoute {
  name: string
  path: string
  rol: Roles[]
  id: string
}

export const options: SidebarOption[] = [
  {
    name: 'Dashboard',
    id: 'dashboard'
  }
]

export const childOptions: childRoute[] = [
  // Subsecciones de nosotros
  {
    name: 'DashBoard',
    path: '/admin',
    rol: [Roles.ADMIN],
    id: 'dashboard'
  }
]
