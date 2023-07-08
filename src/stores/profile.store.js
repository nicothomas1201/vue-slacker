import { defineStore } from "pinia";
import useLoginSore from "./login.store.js"

// const loginStore = useLoginSore()

export default defineStore('profile', {
  state: () => ({
    id: 1, 
    username: JSON.parse(localStorage.getItem('user')).username || 'nico',
    avatar: '/avatars/miguel.png'
  }),
  actions: {
    changeUsername(newUsername){
      this.username = newUsername
    }
  }
})