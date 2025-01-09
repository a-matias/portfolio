<template>
    <section class="min-h-screen flex items-center justify-center" id="home">
      <div v-scroll="'fade-in'" class="containerHome opacity-0 transition-all duration-500 text-center">
        <div class="containerPic">
          <img :src="logoUrl" alt="logo" />
        </div>

          <h1 class="nombre">{{ displayedMessage }}<span class="blinking-cursor">|</span></h1>

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

@import url('https://fonts.googleapis.com/css2?family=Cairo+Play&family=Diphylleia&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

.containerHome{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  width: 40vw;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 30px;
  border-radius: 50px;
  
}

.nombre{
  font-family: "Poppins", serif;
  font-weight: 400;
  font-size: 30px;
  font-style: normal;
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
  