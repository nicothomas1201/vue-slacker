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
  grid-template-rows: 100vh;
}
.sidebar{
  background: var(--primary);
}
</style>