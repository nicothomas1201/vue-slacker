import { defineStore } from "pinia"
import useProfileStore from "./profile.store.js"

const profileStore = useProfileStore()

export default defineStore('contacts', {
  state: () => ({
    contacts: [
      {
        id: profileStore.id,
        username: profileStore.username,
        avatar: profileStore.avatar
      },
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