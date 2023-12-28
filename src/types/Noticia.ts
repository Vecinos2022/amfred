export interface NoticiaModel {
  _id?: string | null | undefined
  titulo: string
  descripcion: string
  descripcion_corta: string
  imagen: string
}

export interface NoticiasSlice {
  isLoading: boolean

  noticias: NoticiaResponse[]
  noticiaActive?: NoticiaResponse | null
  getNoticias: () => Promise<void>
  changeStatusNoticia: (id: string) => Promise<boolean | undefined>
  saveNewNoticia: (user: NoticiaModel) => Promise<boolean | undefined>
  editNoticia: (
    user: NoticiaFormInputs,
    id: string
  ) => Promise<boolean | undefined>
  setActive: (user: NoticiaResponse) => Promise<void>
  clearActive: () => Promise<void>
}

export interface NoticiaResponse {
  _id: string
  titulo: string
  descripcion: string
  descripcion_corta: string
  imagen: string
  estatus: boolean
  updatedAt: string
}

export interface NoticiaFormInputs {
  _id?: string
  titulo: string
  descripcion: string
  descripcion_corta: string
  imagen: string
}
