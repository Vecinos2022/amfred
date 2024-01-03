import { Roles } from '@/constants/roles'
import { signIn } from 'next-auth/react'
import { StateCreator } from 'zustand'

export interface User {
  uid: string
  name: string
  email: string
  rol: Roles
}


export interface AuthSlice {
  user?: any
  isAuthenticated: Boolean
  error: string | null
  login: (email: string, password: string) => Promise<void>
  logout: () => void
  setUser: (user: any) => void
}

export const createAuthSlice: StateCreator<AuthSlice> = (set) => ({
  user: null,
  isAuthenticated: false,
  loginForm: { isPosting: false },
  error: null,
  login: async (email: string, password: string) => {
    await signIn('credentials', {
      email: email,
      password: password,
      redirect: false
    })
      .then(async (data) => {
        console.log(data)
        if (data?.ok) {
          set({
            isAuthenticated: true
          })
        } else {
          set({
            isAuthenticated: false,
            error: data?.error
          })
        }
      })
      .catch(async (error) => {
        console.log(error)
      })
  },
  logout: () => {
    localStorage.removeItem('token')

    set({
      isAuthenticated: false,
      user: null
    })
  },
  setUser: (data: any) => {
    set({ user: data })
  }
})
