<template>
  <div class="containerCard">
    <div class="capsuleCard justify-center" v-for="(card, index) in cards" :key="index">
      <div class="card">
        <a :href="card.link" target="_blank" rel="noopener noreferrer">
          <img class="rounded-t-lg" :src="card.image" alt="Card image" />
        </a>
        <div class="p-5">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ card.title }}
            </h5>
          </a>
          <!-- Renderiza los íconos SVG -->
          <div class="tech-icons bg-violet-100 p-1">
            <img
              v-for="(icon, iconIndex) in card.technologies"
              :key="iconIndex"
              :src="icon"
              alt="Technology icon"
              class="tech-icon"
            />
          </div>
          <p class="text-justify mt-2">
            {{ card.description }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

// Array de tarjetas con tecnologías representadas por íconos SVG
const cards = ref([
  {
    title: 'Guia Digital',
    description: 'Un sitio web moderno y eficiente.',
    image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
    link: 'http://www.guiadigital.com.ar',
    technologies: [
      require('@/assets/icons/laravel.svg'),
      require('@/assets/icons/javascript.svg'),
      require('@/assets/icons/mysql.svg'),
      require('@/assets/icons/css.svg'),
      require('@/assets/icons/bootstrap.svg'),
      
    ],
  },
  {
    title: 'J-Cordero',
    description: 'Desarrollo de aplicaciones robustas.',
    image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
    link: 'https://www.j-cordero.com.ar',
    technologies: [
      require('@/assets/icons/laravel.svg'),
      require('@/assets/icons/css.svg'),
      require('@/assets/icons/bootstrap.svg'),
      require('@/assets/icons/mysql.svg'),
    ],
  },
]);
</script>

<style scoped>

  .containerCard{
    display: flex;
    align-content: center;
    justify-content:space-around;
    width: 45vw;
    padding: 1.5rem;
    height: 60vh;

  }

  .capsuleCard{
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    width: 20vw;
    padding: 2vw;
  }

  .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 10px;
    transition: scale(0);
    transition: 0.3s;

  }

  .card:hover{
    transform: scale(1.1);
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    cursor: pointer;
  }

  .tech-icons {
    display: flex;
    justify-content: space-around;
    gap: 0.5rem;
    margin-top: 1rem;
    border-radius: 5px;
  }

  .tech-icon {
    width: 24px;
    height: 24px;

  }

  @media (max-width: 576px) {
    .containerCard {
        display: flex;
        flex-direction: column; /* Coloca los elementos en columna */
        justify-content: center;
        align-items: center; /* Centra los elementos horizontalmente */
        width: 100vw;
        height: auto; /* Ajusta la altura automáticamente */
        gap: 1rem; /* Espaciado entre elementos */
    }

    .capsuleCard {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; /* Centra las tarjetas */
        width: 80vw;
        height: auto; /* Ajusta la altura automáticamente */
        margin-bottom: 5px;
        order: 2; /* Asegura que el capsuleCard quede al final */
    }

    .card {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center; /* Centra el contenido dentro de las tarjetas */
        background-color: aliceblue;
        box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
        border-radius: 10px;
        width: 65vw; /* Ajusta el tamaño de las tarjetas */
        height: auto; /* Ajusta la altura automáticamente */
    }

    .card:hover {
      transform: scale(1.05); /* Escala más sutil */
      transition: transform 0.3s ease-in-out; /* Transición suave */
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      cursor: pointer;
    }


    .title {
        font-size: medium;
    }
}


  
</style>
  