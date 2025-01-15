<template>
  <section class="container bg-slate-100" id="about">
    <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-60 text-center justify-between">
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
      delay: 30,
      
      
    });

    typewriter
    .typeString('{ <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Profesión": "Analista en Sistemas - Desarrollador Web", <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Pasión": "Desarrollo tecnológico", <br>')
    .pauseFor(60)
   
    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Proyectos": "Gestiono plataformas web", <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Tecnologías": [ <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"JavaScript": "Desarrollo Web"}, <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Vue.js": "Frontend"}, <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{"Laravel": "Backend"}, <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;], <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Habilidades": "Bases de datos, APIs REST", <br>')
    .pauseFor(60)

    .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Meta": "Innovación digital", <br>')
    .pauseFor(60)

    .typeString('}')
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
  width: 50vw;
  justify-content: center;
  align-items: center;  
  background-color: #1A2140;
}

.cardAbout {
  display: flex;
  width: 45vw;
  align-items: center;
  justify-content: center;
  border-radius: 20px;
  padding: 30px;
  font-weight: 400;
  text-align: left;
  color: #ffffff;
  background-color: #111529;
}

#typewriter{
  font-family: "Cutive", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.3em;
 
}


@media (max-width: 576px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100vw;
    height: 100vh;
  }

  .cardAbout {
    display: flex;
    justify-content: center;
    width: 90vw;
    /*background-color: #1f274b;*/
    background-color: #111529;
  }

  #typewriter{
    font-size: 0.8em;

  }

}
</style>
