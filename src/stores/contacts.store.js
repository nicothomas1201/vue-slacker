import { defineStore } from "pinia"

export default defineStore('contacts', {
  state: {
    contacts: () => (
      {
        id: 2,
        username: 'cristopher',
        avatar: '@/assets/avatars/cristopher.png'
      },
      {
        id: 3,
        username: 'miguel',
        avatar: '@/assets/avatars/miguel.png'
      }
    )
  }
})