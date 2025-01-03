<template>
    <section class="min-h-screen flex items-center justify-center bg-white pt-20" id="home">
      <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-500 text-center">
        <div class="flex justify-center items-center">
            <img :src="logoUrl" alt="logo" />
        </div>
       
        <h1 class="text-4xl font-bold mb-4">{{ message }}</h1>
        <p class="text-lg text-gray-700">{{ description }}</p>
      </div>
    </section>
  </template>
  
<script lang="ts">
import { defineComponent, ref } from 'vue';
import logo from '@/assets/foto.svg';


export default defineComponent({
  name: 'HomeComponent',
  setup() {
    // Usando Composition API para definir el estado
    const message = ref('¡Hola! Soy Matías Andrés');
    const description = ref('Explora mi trabajo y proyectos.');
    const logoUrl = ref(logo); // Usando `ref` para la imagen

    return { message, description, logoUrl }; // Retornamos lo que será accesible en el template
  }
});
</script>

  
  <style scoped>
  /* Puedes agregar estilos específicos para este componente */
  </style>
  