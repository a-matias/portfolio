<template>
    <section class="min-h-screen flex items-center justify-center bg-slate-100" id="about">
      <div
        v-scroll="'fade-in'"
        class="opacity-0 transition-all duration-500 text-center justify-between"
      >
      <h2 class="text-3xl font-semibold mb-4">Mis proyectos</h2>
      
      <div class="flex items-center justify-around space-x-4">
   
        
          <CardComponent/>
      </div>
       
      </div>
    </section>
</template>
  
<script lang="ts" setup>
import CardComponent from './CardComponent.vue'
  
</script>
  
<style scoped>

</style>
  