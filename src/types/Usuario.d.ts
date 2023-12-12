export interface UserModel {
  _id: string | null | undefined
  nombre: string
  correo: string
  contrasena: string
  rol: string
  descripcion?: string
}

export interface UsuariosSlice {
  isLoading: boolean
  usuarios: UserResponse[]
  userActive?: UserResponse | null
  getUsers: () => Promise<void>
  deleteUser: (id: string) => Promise<boolean | undefined>
  saveNewUser: (user: UserModel) => Promise<boolean | undefined>
  editUser: (user: UserResponse, id: string) => Promise<boolean | undefined>
  setActive: (user: UserResponse) => Promise<void>
  clearActive: () => Promise<void>
}
