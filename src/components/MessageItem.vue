<template>
  <div class="message-item">
    <img :src="avatar" :alt="username" >
    <div class="message-content">
      <div class="username-time">
        <span class="username">{{ username }}</span>
        <span class="time">{{ time }}</span>
      </div>
      <p class="text">{{ message }}</p>
    </div>
  </div>  
</template>

<script setup>
  import { defineProps, toRefs, } from 'vue';

  const props = defineProps({
    message: String,
    username: String,
    avatar: String,
    time: String
  })

  const { message, username, avatar, time } = toRefs(props)

</script>

<style scoped>
.message-item{
  display: flex;
  align-items: start;
  gap: 16px;
}

.message-item .username{
  font: var(--body2-bold)
}

.username-time{
  display: inline-flex;
  align-items: center;
  gap: 8px;
}

.username-time .time{
  font: var(--caption-regular);
  color: var(--grey);
}

.message-item .text{
  margin: 0;
  font: var(--body2-regular);
}
</style>