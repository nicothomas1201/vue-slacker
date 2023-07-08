import { defineStore } from "pinia"



export default defineStore('messages',{
  state: () => ({
    messages: JSON.parse(localStorage.getItem('messages'))
  }),
  getters: {
    filterByChannelId: (state) => (id) => {
      return state.messages.filter( msg => {
        return msg.channelId.toString() === id.value
      })
    },    
  },
  actions: {
    addMessage(data){
      this.messages.push(data)
      localStorage.setItem('messages', JSON.stringify(this.messages))
    }
  }
})