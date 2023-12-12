export interface DescuentoModel {
  _id?: string | null | undefined
  uid: string
  empleado: string
  fecha: Date
  montoDescuento: number
  motivo?: string
}

export interface DescuentoSlice {
  isLoading: boolean
  descuentos: DescuentoModel[]
  descuentoActive?: DescuentoModel | null
  getDescuentos: () => Promise<void>
  deleteDescuento: (id: string | undefined | null) => Promise<boolean | undefined>
  saveNewDescuento: (user: UserModel) => Promise<void>
  editDescuento: (descuento: DescuentoModel, id: string | undefined | null) => Promise<boolean | undefined>
  setActive: (user: DescuentoModel) => Promise<void>
  clearActive: () => Promise<void>
}
