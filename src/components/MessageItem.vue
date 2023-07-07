<template>
  <div>
    {{ message }}
  </div>  
</template>

<script setup>
  import { defineProps, toRefs } from 'vue';
  const props = defineProps({
    message: String
  })

  const { message } = toRefs(props)
</script>