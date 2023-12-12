export interface PermisosModel {
  _id?: string
  uid: string
  empleado: string
  areaTrabajo: string
  fechaInicio: Date
  fechaFin: Date
  motivo: string
  evidencia?: Any | null | undefined
}

export interface PermisosSlice {
  isLoading: boolean
  permisos: UserResponse[]
  permisoActive?: PermisosModel | null
  getPermisos: () => Promise<void>
  deletePermiso: (id: string) => Promise<boolean | undefined>
  saveNewPermiso: (user: UserModel) => Promise<void>
  editPermiso: (permiso: PermisosModel, id: string | undefined) => Promise<boolean | undefined>
  setActive: (user: UserResponse) => Promise<void>
  clearActive: () => Promise<void>
}
