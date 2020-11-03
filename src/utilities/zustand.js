import create from 'zustand'

const useAppStore = create((set) => ({
  isLoaded: false,
  loaded: () => {
    set((state) => ({
      isLoaded: true,
    }))
  },
}))

const useLayoutStore = create((set) => ({
  isNavigationOpen: false,
  toggleNavigation: (toggle) => {
    set((state) => ({
      isNavigationOpen: toggle === undefined ? !state.isNavigationOpen : toggle,
    }))
  },
}))

export { useAppStore, useLayoutStore }
