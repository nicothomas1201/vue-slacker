<template>
  <div class="messages-container">
    <MessageItem
      v-for="msg in messagesView" 
      :key="msg.id"
      :message="msg.text"
      :username="msg.author.username"
      :avatar="msg.author.avatar"
      :time="msg.time"
      :authorId="msg.author.id"
    />
  </div>
</template>

<script setup>
  import { defineProps, toRefs, computed } from 'vue';
  import useMessagesStore from '@/stores/messages.store.js'
  import useContactsStore from '@/stores/contacts.store.js'
  import MessageItem from '../components/MessageItem.vue';

  const messagesStore = useMessagesStore()
  const contactsStore = useContactsStore()

  const props = defineProps({
    id: String
  })

  const { id } = toRefs(props)

  const messagesView = computed(() => messagesStore.filterByChannelId(id)
    .map( msg => {
      const author = contactsStore.getContactById(msg.author)
      return {
        ...msg,
        author
      }
    })
  )
</script>

<style scoped>
  .messages-container{
    grid-area: main;
    box-sizing: border-box;
    block-size: calc(100vh - 37px - 55px );
    overflow: auto;
    padding: 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
</style>
    


