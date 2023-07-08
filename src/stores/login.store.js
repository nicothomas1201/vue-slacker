import { defineStore } from "pinia";

export default defineStore('login', {
  state: () => ({
    username: '',
    password: ''
  }),
  getters: {
    getStates: () => ({email: this.email, password: this.password})
  }
})