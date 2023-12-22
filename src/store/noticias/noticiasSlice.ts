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
      const { data } = await axiosInstance.get('noticia')

      set({
        noticias: data.data
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
      const { status, data } = await axiosInstance.post(`noticias/`, noticia)

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
      const { status, data } = await axiosInstance.put(
        `noticias/${id}`,
        noticia
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

  deleteNoticia: async (id: string): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const { status, data } = await axiosInstance.delete(`noticias/${id}`)

      if (status == 200) {
        toastAlert({
          title: 'Noticia eliminado'
        })

        set((state) => ({
          noticias: state.noticias.filter((noticia) => noticia._id !== id)
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
