import { defineStore } from 'pinia'

export default defineStore('channels', {
  state: () => ({
    channels: [
      {id: 1, name: 'development'},
      {id: 2, name: 'design'},
      {id: 3, name: 'production'},
      {id: 4, name: 'proyectos'},
    ]
  })
})