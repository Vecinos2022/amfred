import { StateCreator } from "zustand";

export interface LoginFormSlice {
    isPosting: boolean,
    isPasswordVisible: boolean,
    toggleIsPosting: () => void,
    toggleIsPasswordVisible: () => void,
}
  
export const createLoginFormSlice: StateCreator<LoginFormSlice> = (set) => ({
    isPosting: false,
    isPasswordVisible: false,
    toggleIsPosting: () => set((state) => ({ isPosting: !state.isPosting })),
    toggleIsPasswordVisible: () => set((state) => ({ isPasswordVisible: !state.isPasswordVisible })),
});