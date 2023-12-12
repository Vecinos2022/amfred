import { Empleado } from './Empleado'

interface TiempoExtraSlice {
  tiemposExtra: TiempoExtra[]
  isPosting: boolean
  getTiemposExtra: () => void
  addTiempoExtra: (tiempoExtra: any) => Promise<boolean | undefined>
}

interface TiempoExtra {
  _id: string
  empleado: Empleado
  fecha: string
  horaInicio: string
  horaFin: string
  pagoPorHora: string
  horasExtras: string
  totalAPagar: string
  autoriza: string
}

interface TiempoExtraFormInputs {
  empleado: string
  fecha: Date
  horaInicio: string
  horaFin: string
  pagoPorHora: number
  horasExtras: number
  totalAPagar?: string
  autoriza: string
}
