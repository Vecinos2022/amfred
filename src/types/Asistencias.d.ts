import { Edificio } from './Edificio'
import { Empleado } from './Empleado'

export interface AsistenciasSlice {
  asistencias: Asistencia[]
  asistenciasDescripcion: AsistenciaDescripcion[]
  isPosting: boolean
  getAsistenciasEdificio: (edificio: string) => void
  getAsistenciasDescription: (
    edificio: string,
    fecha: string,
    empleado: string
  ) => void
  // addAsistencia: (asistencia: AsistenciaFormInputs) => Promise<boolean | undefined>
}

export interface Asistencia {
  _id: {
    month: number
    year: number
  }
  count: number
}

export interface AsistenciaDescripcion {
  _id: string
  hora_entrada?: {
    status: string
    hora: string
  }
  hora_salida?: {
    status: string
    hora: string
  }
  estatus: pendiente
  uid: Empleado
  no_empleado: string
  nombre_empleado: string
  fecha: string
  lugar_trabajo: Edificio
}
