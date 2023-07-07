<template>
  <div class="layout">
    <aside class="sidebar">
      <slot name="sidebar"></slot>
    </aside>
    <main class="messages">
      <slot name="messages"></slot>
    </main>
  </div>
</template>

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

.messages{
  position: relative;
  /* overflow: auto; */
}
</style>