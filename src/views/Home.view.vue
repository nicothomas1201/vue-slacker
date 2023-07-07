<template>
  <Layout>
    <template #sidebar>
      <div class="channels">
        <h2 class="channels-title">Canales</h2>
        <ul class="channels-list">
          <Channel
            @select="select"
            v-for="channel in channels"
            :key="channel" 
            :id="channel.id"
            :name="channel.name"
            :selectId="selectId"
          />
        </ul>
      </div>
    </template>

    <template #messages>
      <router-view></router-view>
    </template>

  </Layout>
  
</template>

<script setup>
  import Channel from "@/components/Channel.vue"
  import Layout from "../components/Layout.vue";
  import useChannelsStore from "@/stores/channels.store.js"
  import { storeToRefs } from "pinia";
  import { useRouter, useRoute } from "vue-router"
  import { ref } from "vue";

  const router = useRouter()
  const route = useRoute()

  const channelsStore = useChannelsStore()
  const { channels } = storeToRefs(channelsStore)
  const id = parseInt(route.params.id)
  const selectId = ref(id)

  const select = (id) => {
    selectId.value = id
    router.push(`/${id}`)    
  }
</script>

<style scoped>

.channels-title{
  margin: 0;
  font: var(--body1-bold);
  margin-block-start: 20px;
  margin-block-end: 4px;
  padding-inline: 16px;
}

.channels-list{
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
}
</style>
