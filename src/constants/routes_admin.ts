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
    name: 'Noticias',
    id: 'noticias'
  }
]

export const childOptions: childRoute[] = [
  // Subsecciones de noticias
  {
    name: 'Agregar',
    path: '/admin/agregar_noticia',
    rol: [Roles.ADMIN],
    id: 'noticias'
  },
  {
    name: 'Todas las noticias',
    path: '/admin/todas_noticias',
    rol: [Roles.ADMIN],
    id: 'noticias'
  }
]
