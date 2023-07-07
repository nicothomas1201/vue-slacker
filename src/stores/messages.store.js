import { defineStore } from "pinia"

export default defineStore('messages',{
  state: () => ({
    messages: [
      {id: 1, text: "Hola Nicolas desde canal 1", channelId: 1, author: 2},
      {id: 2, text: "Hola Nicolas desde canal 2", channelId: 2, author: 2},
      {id: 3, text: "Hola Nicolas desde canal 3", channelId: 3, author: 2},
      {id: 4, text: "Hola Nicolas desde canal 4", channelId: 4, author: 2},
      {id: 5, text: "Hola Nicolas desde canal 4", channelId: 4, author: 2},
      {id: 6, text: "Hola Nicolas desde canal 4", channelId: 4, author: 2},
      {id: 7, text: "Hola Nicolas desde canal 4", channelId: 4, author: 2},
      {id: 8, text: "Hola Nicolas desde canal 4", channelId: 4, author: 2},
    ]
  }),
  getters: {
    filterByChannelId: (state) => (id) => {
      return state.messages.filter( msg => {
        return msg.channelId.toString() === id.value
      })
    }
  }
})