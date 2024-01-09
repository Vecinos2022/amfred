export interface PatrocinadorModel {
  _id?: string | null | undefined
  nombre_patrocinador: string
  descripcion: string
  sitio_web: string
  direccion: string
  telefono: string
  imagen: string
}

export interface PatrocinadoresSlice {
  isLoading: boolean

  patrocinadores: PatrocinadorResponse[]
  patrocinadorActive?: PatrocinadorResponse | null
  getPatrocinadores: () => Promise<void>
  changeStatusPatrocinador: (id: string) => Promise<boolean | undefined>
  saveNewPatrocinador: (user: PatrocinadorModel) => Promise<boolean | undefined>
  editPatrocinador: (
    user: PatrocinadorFormInputs,
    id: string
  ) => Promise<boolean | undefined>
  setActive: (user: PatrocinadorResponse) => Promise<void>
  clearActive: () => Promise<void>
}

export interface PatrocinadorResponse {
  _id: string
  nombre_patrocinador: string
  descripcion: string
  sitio_web: string
  direccion: string
  telefono: string
  imagen: string
  estatus: boolean
  updatedAt: string
}

export interface PatrocinadorFormInputs {
  _id?: string
  nombre_patrocinador: string
  descripcion: string
  sitio_web: string
  direccion: string
  telefono: string
  imagen: string
}
