<template>
  <div v-for="msg in filteredMessages" :key="msg.id">
    <MessageItem
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