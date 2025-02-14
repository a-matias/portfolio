<template>
    <section class="container" id="about">
      <div class="opacity-0 transition-all duration-500 text-center" v-scroll="'fade-in'">
      
        <h2 class="sectionTitle">Proyectos realizados</h2>
        
        <CardComponent/>
        
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

  @media (max-width: 1024px) {
    
    .container{
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: flex-start;
      background-color: #1A2140;
    }

    .sectionTitle{
      font-size: 3rem;
    }
  }


  @media (max-width: 576px) {
    
    .container{
      display: flex;
      width: 100vw;
      height: 100vh;
      justify-content: center;
      align-items: flex-start;
      background-color: #1A2140;
    }

    .sectionTitle{
      font-size: 2.2rem;
    }
  }

</style>
  