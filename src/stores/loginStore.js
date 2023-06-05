import { defineStore } from 'pinia'
export const useLoginStore = defineStore('useLoginStore', {
  state: () => ({
    title: 'Title',
  }),

  actions: {
    increment() {
      this.count++
    },
  },
})
