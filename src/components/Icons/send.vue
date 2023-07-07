<template>
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.64 13.3C1.816 13.3 1.992 13.276 2.176 13.18L12.752 7.78C13.112 7.596 13.4 7.308 13.4 6.9C13.4 6.492 13.112 6.204 12.752 6.02L2.176 0.627999C1.992 0.532 1.808 0.499999 1.64 0.499999C1.064 0.499999 0.6 0.955999 0.6 1.636V5.18C0.6 5.588 0.904 5.876 1.304 5.884L7.2 6.3C7.528 6.308 7.8 6.572 7.8 6.9C7.8 7.228 7.528 7.492 7.2 7.5L1.304 7.916C0.904 7.924 0.6 8.212 0.6 8.62V12.172C0.6 12.852 1.064 13.3 1.64 13.3Z" :fill="color" />
  </svg>
</template>

<script setup>
  import { defineProps, toRefs } from 'vue';
  
  const props = defineProps({
    color: String
  })

  const { color } = toRefs(props)
</script>