<template>
    <section class="container" id="about">
      <div class="opacity-0 transition-all duration-500 text-center" v-scroll="'fade-in'">
      
        <h2 class="sectionTitle">Proyectos realizados</h2>
      
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

  .sectionTitle {
    font-family: "Be Vietnam Pro", serif;
    font-weight: 1000;
    color: #ffffff;
    text-align: center;
    font-style: normal;
    font-size: 3rem;
    margin-bottom: 30px;
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
  