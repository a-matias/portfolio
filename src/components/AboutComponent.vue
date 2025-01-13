<template>
  <section class="container bg-slate-100" id="about">
    <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-50 text-center justify-between">
      <div class="cardAbout">
        <p id="typewriter"></p>
      </div>
    
    </div>
  </section>
</template>

<script lang="ts" setup>
import { onMounted } from 'vue';
import Typewriter from 'typewriter-effect/dist/core';

// Inicialización del typewriter
const initializeTypewriter = () => {
  const element = document.getElementById('typewriter');
  if (element) {
    const typewriter = new Typewriter(element, {
      loop: false,
      delay: 25,
      
    });

    typewriter
    .typeString('{ <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Profesión": "Analista en Sistemas - Desarrollador", <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Pasión": "Desarrollo tecnológico", <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Habilidades": "Bases de datos, APIs REST, Full Stack", <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Proyectos": "Gestiono plataformas web", <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Tecnologías": [ <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"JavaScript": "Desarrollo Web"}, <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Vue.js": "Frontend"}, <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Laravel": "Backend"}, <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;], <br>')
    .pauseFor(50)
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Meta": "Innovación digital", <br>')
    .pauseFor(2000)
    .typeString('} <br>')
    .start();




  }
};

// Asegúrate de que el DOM esté montado antes de ejecutar Typewriter
onMounted(() => {
  initializeTypewriter();
});
</script>

<style scoped>

.container {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50vw;
  background-color: #1A2140 ;
  
}

.cardAbout {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45vw;
  border-radius: 20px;
  padding: 30px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
}

#typewriter{
  font-family: "Cutive", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2em;
}

@media (max-width: 576px) {
  .container {
    display: flex;
    justify-content: center;
    width: 100vw;
    height: 100vh;
  }

  .cardAbout {
    width: 100vw;
    border-radius: 15px;
  }

  #typewriter{
    font-size: 1em;
  }
}
</style>
