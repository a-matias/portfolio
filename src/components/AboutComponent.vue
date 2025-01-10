<template>
    <section class="container" id="about">
      <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-500 text-center justify-between">
        
        <h2 class="section-title">Acerca de mí</h2>
        <p class="cardAbout shadow-md text-justify border">{{ description }}</p>
              
      </div>
    </section>
</template>
  
<script lang="ts" setup>
import { Ref, ref } from 'vue'
  
    const description :Ref<string> = ref(`
      ¡Hola! Soy Matías Andrés, un analista en sistemas apasionado por el desarrollo de software.
      Actualmente, me desempeño como analista funcional en CNRT (Comisión Nacional de Regulación del Transporte), donde desempeño un papel integral en el ciclo de vida del desarrollo de software.
      Algunas de mis actividades en la organización son:
        Testing y aseguramiento de calidad de aplicaciones y servicios web.
        Desarrollo de documentación para APIs REST.
        Optimización de consultas en bases de datos relacionales para mejorar eficiencia e integridad de datos.
        Captura y análisis de requisitos de proyectos de software mediante entrevistas con stakeholders, análisis de documentación y colaboración estrecha con el equipo de desarrollo.
        Diseño de interfaces web intuitivas y centradas en la experiencia del usuario.
      
    `);
  
      

  </script>
  
  <style scoped>
  /* Estilos para la sección de About */

  .container{
    display: flex;
    align-items: flex-start;
    justify-content: center;
    width: 50vw;
    height: 100vh;
  }

  .section-title{
    font-family: "Be Vietnam Pro", serif;
    font-weight: 400;
    align-items: flex-start;
    font-style: normal;
    font-size: 2.5rem;
    margin-bottom: 30px;
  }

  .cardAbout{
    width: 30vw;
    border-radius: 20px;
    padding: 20px;
    background-color: antiquewhite;

  }

  @media (max-width: 576px) {
    .container{
      display: flex;
      justify-content: center;
      width: 100vw;
      height: 100vh;
    }

    .cardAbout{
      width: 90vw;
      border-radius: 15px;

    }
  }

  </style>
  