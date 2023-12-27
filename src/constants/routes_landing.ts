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
    id: 'convenios'
  },
  {
    name: 'Afiliate',
    id: 'afiliate'
  },
  {
    name: 'Noticias',
    id: 'todas_noticias'
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
  }
  //Subsecciones networking
]
