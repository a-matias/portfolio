<template>
    <section class="min-h-screen flex items-center justify-center" id="home">
      <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-500 text-center">
        <div class="flex justify-center items-center">
            <img :src="logoUrl" alt="logo" />
        </div>
       
        <div class="w-full">
          <h1 class="text-4xl font-bold mb-4">{{ displayedMessage }}<span class="blinking-cursor">|</span></h1>
          <p class="text-lg text-gray-700">{{ description }}</p>
        </div>
        
        <div class="pt-5 inline-block">
          <SocialNetworkComponent />
        </div>

      </div>
    </section>
  </template>
  
<script lang="ts" setup>
import { Ref, ref } from 'vue'
import logo from '@/assets/foto.svg'
import SocialNetworkComponent from './SocialNetworkComponent.vue'


const message: Ref<string> = ref('¡Hola! Soy Matías Andrés..');
const displayedMessage: Ref<string> = ref('');
//const description: Ref<string> = ref('Analista en Sistemas');
const logoUrl: Ref<string> = ref(logo);

  const typewriterEffect = () => {
  let index = 0;
  const speed = 100; // Velocidad en milisegundos entre cada letra
  const type = () => {
    if (index < message.value.length) {
      displayedMessage.value += message.value[index];
      index++;
      setTimeout(type, speed);
    }
  };
  type();
};

typewriterEffect();
   
</script>

  
<style scoped>
  .blinking-cursor {
  display: inline-block;
  width: 10x;
  animation: blink 1s steps(2, start) infinite;
  }

    @keyframes blink {
    to {
      visibility: hidden;
    }
  }
</style>
  