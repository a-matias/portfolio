<template>
  <div class="bg-gray-300 p-2 w-1/2 mx-auto rounded-lg">
    <form @submit.prevent="onAuth(email, password)">
      <h1 class="text-3xl">Iniciar Sesión</h1>

      <div class="w-1/2 mx-auto">
        <div class="form-group mt-2 mb-2">
        <label for="email" class="text-left block font-medium text-gray-700">Email</label>
        <input 
          type="email" 
          id="email" 
          v-model="email" 
          placeholder="Ingresa tu Email" 
          class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
      </div>

      <div class="form-group">
        <label for="password" class="text-left block font-medium text-gray-700 ">Password</label>
        <input 
          type="password" 
          id="password" 
          v-model="password" 
          placeholder="Ingresa tu contraseña" 
          class="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500" />
      </div>


      <div class="social-login">
        <LoginSocialComponent />
      </div>

      <button 
        type="submit" 
        class="w-full px-4 py-2 mt-4 bg-indigo-600 text-white font-semibold rounded-md shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
        Login
      </button>
      </div>


    </form>
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue";
import LoginSocialComponent from "@/components/login/LoginSocialComponent.vue";

// Referencias para email y password
const email = ref("");
const password = ref("");

// Recibe la función de autenticación como prop
const props = defineProps({
  onAuth: {
    type: Function,
    required: true,
  },
});
</script>
