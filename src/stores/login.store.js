import { defineStore } from "pinia";

export default defineStore('login', {
  state: () => ({
    email: '',
    password: ''
  }),
  getters: {
    getStates: () => ({email: this.email, password: this.password})
  }
})