import { Empleado } from './Empleado'

export interface ActasAdministrativasSlice {
  actas: ActaAdministrativa[]
  isPosting: boolean
  getActasAdministrativas: () => void
  addActa: (acta: ActaAdministrativaFormInputs) => Promise<boolean | undefined>
}

export interface ActaAdministrativa {
  _id: string
  empleado: Empleado
  fecha: string
  motivo: string
  descripcion: string
}

export interface ActaAdministrativaFormInputs {
  _id?: string
  empleado: string
  fecha: Date
  motivo: string
  descripcion: string
}
