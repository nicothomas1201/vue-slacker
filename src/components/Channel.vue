<template>
  <li @click="handleClick" :class="classActive">{{ name }}</li>  
</template>

<script setup>
  import { defineProps, toRefs, computed, defineEmits } from 'vue';

  const emits = defineEmits()
  const props = defineProps({
    id: {
      type: Number
    },
    name: {
      type: String
    },
    selectId: {
      type: Number
    }
  })

  const classActive = computed(() => {
    
    return id.value === selectId.value ? 'active' : null
  })

  const { id, name, selectId } = toRefs(props)

  const handleClick = () => {
    emits('select', id.value)
  }
</script>

<style scoped>
li{
  padding: 4px 16px;
  cursor: pointer;  
}

li.active{
  background: var(--pink);
}
</style>
