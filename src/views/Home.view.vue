<template>
  <Layout>
    <template #sidebar>
      <div class="channels">
        <h2 class="channels-title">Canales</h2>
        <ul class="channels-list">
          <Channel
            @select="select"
            v-for="channel in channels"
            :key="channel" 
            :id="channel.id"
            :name="channel.name"
            :selectId="selectId"
          />
        </ul>
      </div>
    </template>

    
      

    <template #messages>
      <header class="header-messages">
        <h2 class="title">
          # {{ titleChannel }}
        </h2>
      </header>

      <router-view></router-view>
      
      <form @submit.prevent="addMessage" class="footer ">
        <input 
          type="text" 
          :placeholder="`Enviar un mensaje a #${titleChannel}`" 
          v-model="inputText"
        />
        <button class="button-submit">
          <Send :color="iconColor" />
        </button>
      </form>
    </template>
  

  </Layout>
  
</template>

<script setup>
  import Channel from "@/components/Channel.vue"
  import Layout from "../components/Layout.vue";
  import Send from "../components/Icons/send.vue";
  import useChannelsStore from "@/stores/channels.store.js"
  import useMessagesStore from "@/stores/messages.store.js"
  import { storeToRefs } from "pinia";
  import { useRouter, useRoute } from "vue-router"
  import { ref, watch } from "vue";

  const router = useRouter()
  const route = useRoute()

  const channelsStore = useChannelsStore()
  const messagesStore = useMessagesStore()
  const { channels } = storeToRefs(channelsStore)

  const id = parseInt(route.params.id)
  const selectId = ref(id)
  const titleChannel = ref('')
  const inputText = ref('')
  const iconColor = ref('white')


  const select = (id) => {
    selectId.value = id
    router.push(`/${id}`)    
  }

  const addMessage = () => {
    const now = new Date()
    const hour = now.getHours()
    const minutes = now.getMinutes()
    const time = `${hour}:${minutes}`
    const data = {
      id: Math.random(),
      text: inputText.value,
      time,
      channelId: route.params.id,
      author: 1, // obtener el id desde el local storage

    }
    messagesStore.addMessage(data)
    inputText.value = ""

  }

  watch(
    () => route.params.id, 
    () => {
      titleChannel.value = channelsStore.getChannelNameById(selectId)
    }, 
    { immediate: true }
  )

  watch(inputText, (value) => {
    if(value !== ''){
      iconColor.value = "#2bac76"
    } else {
      iconColor.value = "white"
    }
    
  })
</script>

<style scoped>

.channels-title{
  margin: 0;
  font: var(--body1-bold);
  margin-block-start: 20px;
  margin-block-end: 4px;
  padding-inline: 16px;
}

.channels-list{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}

.header-messages{
  grid-area: header;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-block: 6px;  
  border-block-end: 1px solid #B4B4B4;
  padding-inline: 16px;
  background-color: var(--black);
}

.header-messages .title{
  margin: 0;
  font: var(--body1-bold);
}

.footer{
  border: 1px solid var(--grey);
  background: var(--black);
  display: flex;
  grid-area: footer;
  margin-inline: 16px;
}

.footer input{
  background: transparent;
  border: none;
  outline: none;
  flex: 1;
  font: var(--body2-regular);
  color: var(--white);
  padding: 14.5px 8px;
}

.button-submit{
  background: transparent;
  border: none;
  outline: none;
  cursor: pointer;
}
</style>
