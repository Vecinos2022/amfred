export interface EdificioSlice {
  edificios: Edificio[]
  edificioActive: EdificioFormInputs | null
  isPosting: boolean
  setEdificioActive: (edificio: EdificioFormInputs | null) => void
  updateEdificio: (
    edificio: EdificioFormInputs,
    id: string | undefined
  ) => Promise<boolean | undefined>
  getEdificios: () => void
  addEdificio: (edificio: EdificioFormInputs) => Promise<boolean | undefined>
}

export interface Edificio {
  _id: string
  nombre_edificio: string
  calle?: string
  colonia?: string
  numero?: string
  cp?: string
  ciudad?: string
  estado?: string
  nombre_propietario?: string
  celular_propietario?: string
  correo_propietario?: string
  direccion_propietario?: string
  num_trabajadores?: string
  propiedad?: string
  administrador?: string
  celular_administrador?: string
  correo_administrador?: string
  recursos?: string
  celular_recursos?: string
  correo_recursos?: string
  serviciosg?: string
  celular_serviciosg?: string
  correo_serviciosg?: string
}

interface EdificioFormInputs {
  _id?: string
  nombre_edificio: string
  calle: string
  colonia: string
  numero: string
  cp: string
  ciudad: string
  estado: string
  nombre_propietario?: string
  celular_propietario?: string
  correo_propietario?: string
  direccion_propietario?: string
  num_trabajadores: string
  tipo_trabajadores: string
  propiedad: string
  administrador: string
  celular_administrador: string
  correo_administrador: string
  recursos: string
  celular_recursos: string
  correo_recursos: string
  serviciosg: string
  celular_serviciosg: string
  correo_serviciosg: string
}
