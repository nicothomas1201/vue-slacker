<template>
  <div class="messages-container">
    <MessageItem
      v-for="msg in filteredMessages" 
      :key="msg.id"
      :message="msg.text"
    />
  </div>
</template>

<script setup>
  import { defineProps, toRefs, computed } from 'vue';
  import useMessagesStore from '@/stores/messages.store.js'
  import { storeToRefs } from 'pinia';
  import MessageItem from '../components/MessageItem.vue';

  const messagesStore = useMessagesStore()

  const props = defineProps({
    id: String
  })

  const { id } = toRefs(props)
  const { messages } = storeToRefs(messagesStore)

  const filteredMessages = computed(() => {
    return messagesStore.filterByChannelId(id)
  })
</script>

<style scoped>
  .messages-container{
    grid-area: main;
    box-sizing: border-box;
    max-block-size: calc(100vh - 37px - 55px );
    overflow: auto;
    padding-inline: 16px;
  }
</style>
    


