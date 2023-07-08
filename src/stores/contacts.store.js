import { defineStore } from "pinia"

export default defineStore('contacts', {
  state: () => ({
    contacts: [
      {
        id: 2,
        username: 'cristopher',
        avatar: "/avatars/cristopher.png"
      },
      {
        id: 3,
        username: 'miguel',
        avatar: "/avatars/miguel.png"
      }
    ]
  }),
  getters: {
    getContactById: (state) => (authorId) => {
      return state.contacts.find( author => {
        return author.id === authorId
      })
    }
  }
})