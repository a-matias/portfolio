<template>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-5">
      <div 
        v-for="(card, index) in cards" 
        :key="index" 
        class="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
      >
        <a :href="card.link">
          <img class="rounded-t-lg" :src="card.image" alt="Card image" />
        </a>
        <div class="p-5">
          <a :href="card.link">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {{ card.title }}
            </h5>
          </a>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {{ card.description }}
          </p>
          <a 
            :href="card.link" 
            class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Ver más
            <svg 
              class="rtl:rotate-180 w-3.5 h-3.5 ms-2" 
              aria-hidden="true" 
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 14 10"
            >
              <path 
                stroke="currentColor" 
                stroke-linecap="round" 
                stroke-linejoin="round" 
                stroke-width="2" 
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Array de tarjetas
  const cards = ref([
    {
      title: 'Guia Digital',
      description: 'Sitio web para promocionar tu negocio o servicio creado con Laravel',
      image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
      link: 'http://www.guiadigital.com.ar',
    },
    {
      title: 'Proyecto 2',
      description: 'Descripción breve del segundo proyecto.',
      image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
      link: 'http://www.proyecto2.com',
    },
    {
      title: 'Proyecto 3',
      description: 'Descripción breve del tercer proyecto.',
      image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
      link: 'http://www.proyecto3.com',
    },
  ]);
  </script>
  
  <style scoped>
  /* Personaliza el diseño aquí si es necesario */
  </style>
  