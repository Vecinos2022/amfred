interface SidebarOption {
  name: string
  id: string
}

interface childRoute {
  name: string
  path: string
  id: string
}

export const options: SidebarOption[] = [
  {
    name: 'Nosotros',
    id: 'nosotros'
  },
  {
    name: 'Beneficios',
    id: 'beneficios'
  },
  {
    name: 'Convenios',
    id: 'Convenios'
  },
  {
    name: 'Afiliate',
    id: 'afiliate'
  },
  {
    name: 'Networking',
    id: 'networking'
  }
]

export const childOptions: childRoute[] = [
  // Subsecciones de nosotros
  {
    name: 'Misión y Visión',
    path: '/mision_vision',
    id: 'nosotros'
  },
  {
    name: 'Propuestas de Valor',
    path: '/propuestas_valor',
    id: 'nosotros'
  },
  //Subsecciones de afiliate
  {
    name: 'Formato de Afiliación',
    path: '/formato_afiliacion',
    id: 'afiliate'
  },
  {
    name: 'Código de Ética',
    path: '/codigo_etica',
    id: 'afiliate'
  },
  //Subsecciones networking
  {
    name: 'Últimas Noticias',
    path: '/noticias',
    id: 'networking'
  },
  {
    name: 'Todas las Noticias',
    path: '/todas_noticias',
    id: 'networking'
  }
]
