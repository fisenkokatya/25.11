import {create} from 'zustand'

export const useSession = create((set) => ({
    isAuthenticated: Boolean(localStorage.getItem('accessToken')),
    setAuthenticated: () => set({isAuthenticated: true}),
    reset: () => set({isAuthenticated: false}),
}))
