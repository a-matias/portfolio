<template>
    <section class="min-h-screen flex items-center justify-center bg-gray-100" id="about">
      <div
        v-scroll="'fade-in'"
        class="opacity-0 transition-all duration-500 text-center justify-between"
      >
      <h2 class="text-3xl font-semibold mb-4">Acerca de mí</h2>
      
      <div class="flex items-center justify-around space-x-4">
        <!-- Párrafo 1 -->
        <p class="text-lg text-gray-700 p-5 bg-sky-200 shadow-md text-justify w-1/4 border">
        {{ description }}
        </p>
        
        <!-- Párrafo 2 -->
        <p class="text-lg text-gray-700 p-5 bg-amber-200 text-justify w-1/4 border">
        {{ description }}
        </p>
    </div>
       
      </div>
    </section>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  
  export default defineComponent({
    name: 'AboutComponent',
    setup() {
      const description = ref(`
        ¡Hola! Soy Matías Andrés, un analista en sistemas apasionado por el desarrollo de software.</p>
        <p>Actualmente, me desempeño como analista funcional en CNRT (Comisión Nacional de Regulación del Transporte), donde desempeño un papel integral en el ciclo de vida del desarrollo de software.</p>
        <p>Algunas de mis actividades en la organización son:</p>
        <ul class="list-disc list-inside">
          <li>Testing y aseguramiento de calidad de aplicaciones y servicios web.</li>
          <li>Desarrollo de documentación para APIs REST.</li>
          <li>Optimización de consultas en bases de datos relacionales para mejorar eficiencia e integridad de datos.</li>
          <li>Captura y análisis de requisitos de proyectos de software mediante entrevistas con stakeholders, análisis de documentación y colaboración estrecha con el equipo de desarrollo.</li>
          <li>Diseño de interfaces web intuitivas y centradas en la experiencia del usuario.</li>
        </ul>
      `);
  
      return { description };
    },
  });
  </script>
  
  <style scoped>
  /* Estilos para la sección de About */
  .text-center {
    text-align: center;
  }
  
  .list-disc {
    list-style-type: disc;
  }
  
  .list-inside {
    list-style-position: inside;
  }
  </style>
  