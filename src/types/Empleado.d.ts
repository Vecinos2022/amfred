import { Edificio } from './Edificio'

export interface EmpleadoSlice {
  empleados: Empleado[]
  empleadoActive: EmpleadoFormInputs | null
  isPosting: boolean
  setEmpleadoActive: (empleado: EmpleadoFormInputs | null) => void
  updateEmpleado: (
    empleado: EmpleadoFormInputs,
    id: string | undefined
  ) => Promise<boolean | undefined>
  getEmpleados: () => void
  addEmpleado: (empleado: EmpleadoFormInputs) => Promise<boolean | undefined>
}

export interface Empleado {
  _id: string
  no_empleado?: string
  nombre?: string
  primer_apellido?: string
  segundo_apellido?: string
  fecha_nacimiento?: string
  fecha_contratacion?: string
  lugar_trabajo: Edificio
  correo?: string
  rfc?: string
  colonia?: string
  calle?: string
  num_interior?: string
  num_exterior?: string
  cp?: string
  ciudad?: string
  estado?: string
  pais?: string
  curp?: string
  num_seguro?: string
  fecha_inicio?: string
  tipo_contrato?: string
  sindicalizado?: string
  tipo_jornada?: string
  tipo_regimen?: string
  departamento?: string
  puesto?: string
  riesgo_puesto?: string
  periodicidad?: string
  banco?: string
  cuenta_bancaria?: string
  clave_entidad?: string
  sueldo_diario?: string
  lunes?: string
  lunes_inicio?: string
  lunes_fin?: string
  lunes_tolerancia?: string
  martes?: string
  martes_inicio?: string
  martes_fin?: string
  martes_tolerancia?: string
  miercoles?: string
  miercoles_inicio?: string
  miercoles_fin?: string
  miercoles_tolerancia?: string
  jueves?: string
  jueves_inicio?: string
  jueves_fin?: string
  jueves_tolerancia?: string
  viernes?: string
  viernes_inicio?: string
  viernes_fin?: string
  viernes_tolerancia?: string
  sabado?: string
  sabado_inicio?: string
  sabado_fin?: string
  sabado_tolerancia?: string
  domingo?: string
  domingo_inicio?: string
  domingo_fin?: string
  domingo_tolerancia?: string
}

interface HorarioLaboral {
  lunes: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  martes: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  miercoles: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  jueves: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  viernes: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  sabado: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
  domingo: {
    entrada?: string
    salida?: string
    tolerancia?: string
    estatus?: boolean
  }
}

interface EmpleadoFormInputs {
  _id?: string
  no_empleado?: string
  nombre?: string
  primer_apellido?: string
  segundo_apellido?: string
  fecha_nacimiento?: Date
  fecha_contratacion?: string
  lugar_trabajo?: Edificio
  correo?: string
  rfc?: string
  colonia?: string
  calle?: string
  num_interior?: string
  num_exterior?: string
  cp?: string
  ciudad?: string
  estado?: string
  pais?: string
  curp?: string
  num_seguro?: string
  fecha_inicio?: string
  tipo_contrato?: string
  sindicalizado?: string
  tipo_jornada?: string
  tipo_regimen?: string
  departamento?: string
  puesto?: string
  riesgo_puesto?: string
  periodicidad?: string
  banco?: string
  cuenta_bancaria?: string
  clave_entidad?: string
  sueldo_diario?: string
  horario_laboral?: HorarioLaboral
}
