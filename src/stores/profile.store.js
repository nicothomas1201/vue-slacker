import { defineStore } from "pinia";

export default defineStore('profile', {
  state: () => ({
    id: 1, 
    username: 'nicolas',
    avatar: '/avatars/miguel.png'
  })
})