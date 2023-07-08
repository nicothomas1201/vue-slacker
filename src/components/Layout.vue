<template>
  <div class="layout">
    <aside class="sidebar">
      <div class="channel-header">
        <h2>
          {{ profileStore.username }}
        </h2>
      </div>
      <slot name="sidebar"></slot>
    </aside>
    <main class="messages">
      <slot name="messages"></slot>
    </main>
  </div>
</template>

<script setup>
  import useProfileStore from "@/stores/profile.store.js"

  const profileStore = useProfileStore()

  
  
</script>

<style scoped>
.layout{
  display: grid;
  grid-template-columns: 260px 1fr;
  grid-template-rows: min-content 1fr min-content;
  grid-template-areas: "sidebar header" "sidebar messages" "sidebar footer";
}
.sidebar{
  background: var(--primary);
  grid-area: sidebar;
}

.channel-header{
  padding: 16px;
  /* border-block-end: .02px solid var(--pink); */
}

.channel-header input{
  background: transparent;
  color: var(--white);
  border: none;
  font: var(--body1-bold);
}

.messages{
  position: relative;
  /* overflow: auto; */
}
</style>