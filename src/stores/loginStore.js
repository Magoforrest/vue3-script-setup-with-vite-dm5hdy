import { defineStore } from 'pinia'
export const useLoginStore = defineStore('useLoginStore', {
  state: () => ({
    title: 'Title',
    name: '',
    lastName: '',
  }),

  actions: {
    login(name, lastName) {
      ;(this.name = name), (this.lastName = lastName)
      console.log(name)
    },
  },
})
