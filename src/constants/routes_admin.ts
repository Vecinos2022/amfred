import { Roles } from './roles'

interface SidebarOption {
  name: string
  id: string
  path: string
}

interface childRoute {
  name: string
  path: string
  rol: Roles[]
  id: string
}

export const options: SidebarOption[] = [
  {
    name: 'Noticias',
    id: 'noticias',
    path: '/admin/noticias/todas_noticias'
  },
  {
    name: 'Patrocinadores',
    id: 'patrocinadores',
    path: '/admin/patrocinadores/todos_patrocinadores'
  }
]

export const childOptions: childRoute[] = [
  // Subsecciones de noticias

  {
    name: 'Todas las noticias',
    path: '/admin/todas_noticias',
    rol: [Roles.ADMIN],
    id: 'noticias'
  }
]
