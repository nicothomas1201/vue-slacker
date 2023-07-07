<template>
  <div>
    <form @submit.prevent="submit" class="form">
      <div class="header-form">
        <h2 class="form-title">Inicia Sesión</h2>
        <button class="button-google">Continuar con google</button>
      </div>
      <div class="form-field">
        <label for="email">Correo electronico</label>
        <input required v-model="email" id="email" type="email" placeholder="Ingresa tu correo" />
      </div>
      <div class="form-field">
        <label for="password">Ingresa tu contraseña</label>
        <input required v-model="password" id="password" type="password" placeholder="Ingresa tu contraseña" />
      </div>
      <button class="button-submit">inicia sesion</button>
    </form>
  </div>
</template>

<script setup>
  import { useRouter } from 'vue-router';
  import useLoginStore from '@/stores/login.store.js'
  import { storeToRefs } from 'pinia';

  const router = useRouter()
  const loginStore = useLoginStore()

  const { email, password } = storeToRefs(loginStore)

  

  const submit = () => {
    const user = {
      email: email.value, 
      password: password.value
    }
    
    localStorage.setItem('user', JSON.stringify(user))
    router.push({ name: 'home' })
  }

</script>

<style scoped>
  .form{
    max-inline-size: 398px;
    inline-size: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    transform: translateY(50%);
  }

  .header-form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    border-block-end: 1px solid var(--grey);
    padding-block-end: 1rem;
  }

  .form-title{
    font: var(--headline1);
    margin: 0;
  }

  .button-google{
    background: var(--white);
    color: var(--black);
    font: var(--body1-bold);
    padding-block: 12px;
    text-align: center;
    border: none;
    border-radius: 4px; 
  }

  .form-field{
    display: flex;
    flex-direction: column;
    gap: 4px;
    font: var(--body1-regular);
  }

  .form-field input{
    background: #1F1F3A;
    border: 1px solid var(--grey);
    border-radius: 4px;
    padding: 12px 8px;
    color: var(--white);
  }

  .button-submit{
    background: var(--pink);
    color: var(--white);
    padding-block: 12px;
    font: var(--body1-bold);
    border: none;
    border-radius: 4px;
  }

  .form button{
    cursor: pointer;
  }
</style>