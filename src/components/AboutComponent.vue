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
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae, commodi impedit dolores amet officiis veritatis 
        dolorum voluptate, itaque nisi officia vero deserunt totam architecto suscipit rem dolorem fugit porro! Autem unde at maiores.
        Ut fugiat illo quas odio quo officia, nesciunt in ipsum culpa quod.
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
  