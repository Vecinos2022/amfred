import { create, StateCreator } from 'zustand'

import { AuthSlice, createAuthSlice } from './authSlice'
import { createLoginFormSlice, LoginFormSlice } from './loginFormSlice'

export interface AuthSharedSlice {
  submitLoginForm: (email: string, password: string) => void
}

export const createAuthSharedSlice: StateCreator<
  AuthSlice & LoginFormSlice,
  [],
  [],
  AuthSharedSlice
> = (_, get) => ({
  submitLoginForm: async (email: string, password: string) => {
    get().toggleIsPosting()
    await get().login(email, password)
    get().toggleIsPosting()
  }
})

export const useAuthBoundStore = create<
  AuthSlice & LoginFormSlice & AuthSharedSlice
>()((...a) => ({
  ...createAuthSlice(...a),
  ...createLoginFormSlice(...a),
  ...createAuthSharedSlice(...a)
}))
