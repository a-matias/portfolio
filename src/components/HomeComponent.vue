<template>
    <section class="bg-gradient-to-b from-[#858585]  to-[#ffffff]  h-screen min-h-screen flex justify-center z-40" id="home">
      <div v-scroll="'fade-in'" class="containerHome opacity-0 transition-all duration-500 text-center">
        <div class="containerPic">
          <img :src="logoUrl" alt="logo" />
        </div>

        <h1 class="nombre typewrite">{{ displayedMessage }}<span class="blinking-cursor">|</span></h1>
        
        <div class="containerSocialNetwork">
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

.containerHome{
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 5rem;
  background-color:#fff;
  width: 40vw;
  height: 65vh;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 30px;
  border-radius: 50px; 
  
}

.nombre{
  font-family: "Be Vietnam Pro", serif;
  font-size: 2.5em;
  font-style: normal;
  font-weight: bolder;
}

img{
  width: 18vw;
}

.containerSocialNetwork{
  display: flex;
  justify-content: center;
}

.containerPic{
  display: flex;
  justify-content: center;
}


.blinking-cursor {
display: inline-block;
animation: blink 1s steps(2, start) infinite;
}

  @keyframes blink {
  to {
    visibility: hidden;
  }
}

@media (max-width: 1024) {
  .containerHome {
    width: 80vw;
    padding: 25px; 
    border-radius: 0;
    box-shadow: none;    
  }
}

@media (max-width: 768px) {
  .containerHome {
    width: 100vw; 
    padding: 20px; 
    border-radius: 0;
    box-shadow: none;
    background-color:inherit;
  }

}

@media (max-width: 576px) {
  .containerHome {
    width: 85vw; 
    border-radius: 0;
    align-content:flex-start;
    box-shadow: none;
    background-color: none;

  }

  .nombre{
  font-size: 25px;
  }

  img{
    width: 70vw;
  }

}




</style>
  