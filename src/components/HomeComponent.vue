<template>
    <section class="container" id="home">
      <div class="containerHome opacity-0 transition-all duration-500 text-center" v-scroll="'fade-in'">
        <div class="containerPic">
          <img :src="logoUrl" alt="logo" />
        </div>

        <h1 class="nombre typewrite">{{ displayedMessage }}<span class="blinking-cursor"></span></h1>
        
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
  const speed = 0; // Velocidad en milisegundos entre cada letra
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

.container{
  display: flex;
  width: 50vw;
  justify-content: center;
  align-items: center;
  background-color: #FBAB7E;
  background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
}

.containerHome{
  display: flex;
  width: 40vw;
  flex-direction: column;
  justify-content: center;
  background-color:#fff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  padding: 30px;
  border-radius: 20px; 
}

.nombre{
  font-family: "Be Vietnam Pro", serif;
  font-size: 2.5rem;
  font-style:normal;
  font-weight: 900;
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

@media (max-width: 1366px) {

.container{
  width: 50vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
}

.containerHome {
  justify-content: center;
  align-content: center;
  margin: 1rem;
  width: 40vw;
  height: 70vh;
  padding: 5px;
}

img{
  width: 18vw;
}

.nombre{
  font-size: 2rem;
}
}


@media (max-width: 1024px) {

  .container{
    display: flex;
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  }

  .containerHome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 1rem;
    background-color:#fff;
    width: 80vw;
    height: 60vh;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    padding: 5px;
    border-radius: 20px; 
  }

  img{
    width: 45vw;
  }

  .nombre{
    font-size: 3rem;
  }
}

@media (max-width: 576px) {

  .container{
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    background-color: #FBAB7E;
    background-image: linear-gradient(62deg, #FBAB7E 0%, #F7CE68 100%);
  }

  .containerHome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
    margin: 1rem;
    background-color:#fff;
    width: 85vw;
    height: 55vh;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    padding: 5px;
    border-radius: 20px; 
  }

  .nombre{
    font-size: 1.5rem;
  }

  img{
    width: 70vw;
  }

}

</style>
  