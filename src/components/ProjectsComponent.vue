<template>
    <section class="container" id="about">
      <div
        v-scroll="'fade-in'"
        class="opacity-0 transition-all duration-500 text-center"
      >
      <h2 class="tittleProject">Trabajos realizados</h2>
      
      <div class="flex items-center">
          <CardComponent/>
      </div>
       
      </div>
    </section>
</template>
  
<script lang="ts" setup>

import CardComponent from './CardComponent.vue'
  
</script>
  
<style scoped>

  .container{
    display: flex;
    width: 50vw;
    justify-content: center;
    align-items: center;
    background-color: #1A2140;
  }

  .tittleProject{
    font-family: "Be Vietnam Pro", serif;
    font-size: 2.5rem;
    font-style:normal;
    font-weight: 1000;
    color: #ffffff;
  }

  @media (max-width: 576px) {

    .tittleProject{
      font-family: "Be Vietnam Pro", serif;
      text-transform: uppercase;
      font-size: 1.5rem;
      padding-bottom: 20px;
      text-align: center;

    }
  }

</style>
  