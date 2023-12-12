import { IconType } from 'react-icons'
import { FaCalendarCheck, FaDatabase } from 'react-icons/fa'
import { FaListCheck } from 'react-icons/fa6'
import { Roles } from './roles'

interface SidebarOption {
  name: string
  icon: IconType
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
    name: 'Base de datos general',
    icon: FaDatabase,
    id: 'base_datos'
  },
  {
    name: 'Asistencias',
    icon: FaListCheck,
    id: 'asistencias'
  },
  {
    name: 'Eventos',
    icon: FaCalendarCheck,
    id: 'eventos'
  }
]

export const childOptions: childRoute[] = [
  // Base de datos general
  {
    name: 'Edificios',
    path: '/admin/base-datos/edificios',
    rol: [Roles.ADMIN],
    id: 'base_datos'
  },
  {
    name: 'Empleados',
    path: '/admin/base-datos/empleados',
    rol: [Roles.ADMIN],
    id: 'base_datos'
  },
  {
    name: 'Actas administrativas',
    path: '/admin/base-datos/actas-administrativas',
    rol: [Roles.ADMIN],
    id: 'base_datos'
  },
  // Asistencias
  {
    name: 'Control de eventos',
    path: '/admin/asistencias/control-eventos',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  {
    name: 'Entradas y salidas',
    path: '/admin/asistencias/control-entradas-salidas',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  {
    name: 'Permanencia laboral',
    path: '/admin/asistencias/permanencia-laboral',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  {
    name: 'Permisos y justificaciones',
    path: '/admin/asistencias/permisos-justificaciones',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  {
    name: 'Tiempos extra',
    path: '/admin/asistencias/tiempos-extra',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  {
    name: 'Descuentos',
    path: '/admin/asistencias/descuentos',
    rol: [Roles.ADMIN],
    id: 'asistencias'
  },
  // Eventos
  {
    name: 'Por fecha',
    path: '/admin/eventos',
    rol: [Roles.ADMIN],
    id: 'eventos'
  },
  {
    name: 'Por trabajador',
    path: '/admin/eventos',
    rol: [Roles.ADMIN],
    id: 'eventos'
  }
]
