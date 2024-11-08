import { defineStore } from 'pinia'

const useAuthStore = defineStore('auth', {
  state: () => {
    return {
      profile: null
    }
  },
  getters: {
    getProfile: (state) => state.profile
  },
  actions: {
    setProfile(payload: any) {
      this.profile = payload
    }
  }
})

export { useAuthStore }