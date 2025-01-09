<template>
    <section class="container" id="about">
      <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-500 text-center justify-between">
        <h2 class="text-3xl font-semibold mb-4">Acerca de mí</h2>
      
        <div class="flex items-center justify-around ">
          <!-- Párrafo 1 -->
          <p class="cardAbout p-5 bg-sky-200 shadow-md text-justify border">
          {{ description }}
          </p>
          
        </div>
       
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
    justify-content: center;
    align-content: center;
    width: 50vw;
    height: 100vh;
  }


  @media (max-width: 576px) {
    .cardAbout{
    width: 90vw;
    border-radius: 15px;

    }
  }

  </style>
  