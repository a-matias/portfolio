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

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Pasión": "Crear soluciones tecnológicas eficientes", <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Proyectos": "Diseño, desarrollo y mantenimiento de plataformas web", <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Stack Tecnológico": { <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Frontend": ["Vue.js", "TypeScript"], <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Backend": ["Laravel", "PHP"], <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Base de Datos": ["MySQL"], <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"DevOps": ["Docker", "Git"], <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Herramientas": ["GitLab", "cPanel", "SSH"] <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;}, <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Habilidades": { <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp"Base de Datos": "Modelado, consultas complejas y optimización", <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"APIs REST": "Diseño, consumo e integración de servicios", <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"CI/CD": "Automatización de despliegues con GitLab CI", <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"Seguridad Web": "Gestión de claves, HTTPS, buenas prácticas" <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;}, <br>')
  .pauseFor(60)

  .typeString('&nbsp;&nbsp;&nbsp;&nbsp;"Meta": "Seguir potenciando la innovación digital" <br>')
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
  background-color: #17202a ;
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
  background-color: #212c38;
}

#typewriter{
  font-family: "Cutive", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 1.2em;
 
}

@media (max-width: 1366px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50vw;
    height: 100vh;
  }

  .cardAbout {
    display: flex;
    justify-content: center;
    width: 45vw;
    background-color: #111529;
  }

  #typewriter{
    font-size: 1rem;
  }

}

@media (max-width: 1024px) {
  .container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .cardAbout {
    display: flex;
    justify-content: center;
    width: 90vw;
    background-color: #111529;
  }

  #typewriter{
    font-size: 1.5rem;
  }

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
    background-color: #111529;
  }

  #typewriter{
    font-size: 0.8rem;
  }
}

</style>
