import useMessagesStore from "../stores/messages.store.js"

export function save(){

  const now = new Date()
  const hour = now.getHours()
  const minutes = now.getMinutes()
  const time = `${hour}:${minutes}`

  if(!localStorage.getItem('messages')){
    localStorage.setItem('messages', JSON.stringify([
      {id:1, text: "Hola Nicolas desde canal 1", channelId: 1, time, author: 2},
      {id: 2, text: "Hola Nicolas desde canal 2", channelId: 2, time, author: 2},
      {id: 3, text: "Hola Nicolas desde canal 3", channelId: 3, time, author: 2},
      {id: 4, text: "Hola Nicolas desde canal 4", channelId: 4, time, author: 2},
      {id: 5, text: "Hola Nicolas desde canal 4", channelId: 4, time, author: 2},
      {id: 6, text: "Hola Nicolas desde canal 4", channelId: 4, time, author: 2},
      {id: 7, text: "Hola Nicolas desde canal 4", channelId: 4, time, author: 2},
      {id: 8, text: "Hola Nicolas desde canal 4", channelId: 4, time, author: 2},      
    ]))
  }


}