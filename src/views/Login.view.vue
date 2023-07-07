<template>
  <div>
    <form @submit.prevent="submit" class="form">
      <h2 class="form-title">Inicia Sesión</h2>
      <button class="button-google">Continuar con google</button>
      <div class="form-field">
        <label for="email">Correo electronico</label>
        <input v-model="email" id="email" type="email" placeholder="Ingresa tu correo" />
      </div>
      <div class="form-field">
        <label for="password">Ingresa tu contraseña</label>
        <input v-model="password" id="password" type="password" placeholder="Ingresa tu contraseña" />
      </div>
      <button class="button-submit">inicia sesion</button>
    </form>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useLoginStore from '@/stores/Login.stores.js'
  import { storeToRefs } from 'pinia';
  import { watch } from 'vue';

  const router = useRouter()
  const loginStore = useLoginStore()

  const { email, password } = storeToRefs(loginStore)


  watch(email, 
    (value) => {
    console.log(value)
  })

  const submit = () => {
    router.push({ name: 'home' })
  }

</script>

<style scoped>
  .container-form{
    display: flex;
  }

</style>