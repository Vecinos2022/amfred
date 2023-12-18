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
    name: 'Noticias',
    id: 'noticias'
  }
]

export const childOptions: childRoute[] = [
  // Subsecciones de nosotros
  {
    name: 'Misión y Visión',
    path: '/mision_vision',
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
  }
  //Subsecciones noticias
]
