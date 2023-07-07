import { defineStore } from 'pinia'

export default defineStore('channels', {
  state: () => ({
    channels: [
      {id: 1, name: 'development'},
      {id: 2, name: 'design'},
      {id: 3, name: 'production'},
      {id: 4, name: 'proyectos'},
    ]
  }),
  getters: {
    getChannelNameById: (state) => (channelId) => {
      return state.channels.filter( channel => {
        return channel.id === channelId.value
      }).map(channel => channel.name)[0]
    }
  }
})