import { AxiosError } from 'axios'
import { StateCreator, create } from 'zustand'

import { toastAlert } from '@/services/alerts'
import axiosInstance from '@/services/axiosInstance'
import {
  PatrocinadorModel,
  PatrocinadorResponse,
  PatrocinadoresSlice
} from '@/types/Patrocinador'

export const createPatrocinadoresSlice: StateCreator<PatrocinadoresSlice> = (
  set,
  get
) => ({
  patrocinadores: [],
  patrocinadorActive: null,
  isLoading: false,
  getPatrocinadores: async () => {
    set({
      isLoading: true
    })
    try {
      const { data } = await axiosInstance.get('patrocinadores')

      set({
        patrocinadores: data.message
      })
    } catch (error: any) {
      const err: AxiosError = error

      toastAlert({ title: `Error: ${err.message}`, icon: 'error' })

      set({
        patrocinadores: []
      })
    }
    set({
      isLoading: false
    })
  },

  saveNewPatrocinador: async (
    patrocinador: PatrocinadorModel
  ): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const formData = new FormData()
      formData.append('nombre_patrocinador', patrocinador.nombre_patrocinador)
      formData.append('descripcion', patrocinador.descripcion)
      formData.append('sitio_web', patrocinador.sitio_web)
      formData.append('direccion', patrocinador.direccion)
      formData.append('telefono', patrocinador.telefono)
      formData.append('imagen', patrocinador.imagen[0])

      const { status, data } = await axiosInstance.post(`noticias`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      })

      console.log(status, data)

      if (status == 200) {
        toastAlert({
          title: 'Operación realizada'
        })

        set({
          patrocinadores: [...data.data],
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

  editPatrocinador: async (
    patrocinador,
    id: string
  ): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const formData = new FormData()
      formData.append('nombre_patrocinador', patrocinador.nombre_patrocinador)
      formData.append('descripcion', patrocinador.descripcion)
      formData.append('sitio_web', patrocinador.sitio_web)
      formData.append('direccion', patrocinador.direccion)
      formData.append('telefono', patrocinador.telefono)
      patrocinador.imagen.length &&
        formData.append('imagen', patrocinador.imagen[0])
      const { status, data } = await axiosInstance.put(
        `patrocinadores/${id}`,
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
          patrocinadores: [...data.data],
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

  changeStatusPatrocinador: async (
    id: string
  ): Promise<boolean | undefined> => {
    set({ isLoading: true })

    try {
      const { status, data } = await axiosInstance.delete(
        `/patrocinadores/${id}`
      )

      if (status == 200) {
        toastAlert({
          title: 'Estatus Actualizado'
        })

        set((state) => ({
          patrocinadores: state.patrocinadores.map((patrocinador) => {
            if (patrocinador._id == id) {
              return { ...patrocinador, estatus: !patrocinador.estatus }
            } else {
              return patrocinador
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

  setActive: async (patrocinador: PatrocinadorResponse) => {
    set({
      patrocinadorActive: patrocinador
    })
  },

  clearActive: async () => {
    set(() => ({
      patrocinadorActive: null
    }))
  }
})

export const usePatrocinadoresStore = create<PatrocinadoresSlice>()((...a) => ({
  ...createPatrocinadoresSlice(...a)
}))
