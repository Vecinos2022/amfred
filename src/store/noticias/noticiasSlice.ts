import { AxiosError } from 'axios'
import { StateCreator, create } from 'zustand'

import { toastAlert } from '@/services/alerts'
import axiosInstance from '@/services/axiosInstance'
import { NoticiaModel, NoticiaResponse, NoticiasSlice } from '@/types/Noticia'

export const createNoticiasSlice: StateCreator<NoticiasSlice> = (set, get) => ({
  noticias: [],
  noticiaActive: null,
  isLoading: false,
  getNoticias: async () => {
    set({
      isLoading: true
    })
    try {
      const { data } = await axiosInstance.get('noticias')

      set({
        noticias: data.message
      })
    } catch (error: any) {
      const err: AxiosError = error

      toastAlert({ title: `Error: ${err.message}`, icon: 'error' })

      set({
        noticias: []
      })
    }
    set({
      isLoading: false
    })
  },

  saveNewNoticia: async (
    noticia: NoticiaModel
  ): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const formData = new FormData()
      formData.append('titulo', noticia.titulo)
      formData.append('descripcion_corta', noticia.descripcion_corta)
      formData.append('descripcion', noticia.descripcion)
      formData.append('imagen', noticia.imagen[0])

      const { status, data } = await axiosInstance.post(`noticias`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      console.log(status, data)

      if (status == 200) {
        toastAlert({
          title: 'Operación realizada'
        })

        set({
          noticias: [...data.data],
          isLoading: false
        })

        return true
      } else {
        toastAlert({
          title: data.msg
        })

        return false
      }
    } catch (error) {
      console.log(error)

      set({
        isLoading: false
      })
      return false
    }
  },

  editNoticia: async (noticia, id: string): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const formData = new FormData()
      formData.append('titulo', noticia.titulo)
      formData.append('descripcion_corta', noticia.descripcion_corta)
      formData.append('descripcion', noticia.descripcion)
      noticia.imagen.length && formData.append('imagen', noticia.imagen[0])
      const { status, data } = await axiosInstance.put(
        `noticias/${id}`,
        formData,
        {
          headers: { 'Content-Type': 'multipart/form-data' }
        }
      )

      if (status == 200) {
        toastAlert({
          title: 'Noticia actualizado'
        })

        set({
          noticias: [...data.data],
          isLoading: false
        })

        return true
      } else {
        toastAlert({
          title: data.msg
        })

        return false
      }
    } catch (error) {
      console.log(error)

      set({
        isLoading: false
      })
      return false
    }
  },

  changeStatusNoticia: async (id: string): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const { status, data } = await axiosInstance.delete(`/noticias/${id}`)

      if (status == 200) {
        toastAlert({
          title: 'Estatus Actualizado'
        })

        set((state) => ({
          noticias: state.noticias.map((noticia) => {
            if (noticia._id == id) {
              return { ...noticia, estatus: !noticia.estatus }
            } else {
              return noticia
            }
          })
        }))

        set({
          isLoading: false
        })

        return true
      } else {
        toastAlert({
          title: data.msg
        })

        return false
      }
    } catch (error) {
      console.log(error)

      set({
        isLoading: false
      })
      return false
    }
  },

  setActive: async (noticia: NoticiaResponse) => {
    set({
      noticiaActive: noticia
    })
  },

  clearActive: async () => {
    set(() => ({
      noticiaActive: null
    }))
  }
})

export const useNoticiasStore = create<NoticiasSlice>()((...a) => ({
  ...createNoticiasSlice(...a)
}))
