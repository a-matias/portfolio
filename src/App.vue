<template>
  <div id="app">
    <!-- Navbar -->
      <NavbarComponent />

      <div class="containerStackProject min-h-screen flex">

        <HomeComponent id="home" />

        <AboutComponent id="about" />

      </div>

    <div class="containerStackProject min-h-screen flex items-center">

      <StackComponent id="stack" />

      <ProjectsComponent id="projects" />

    </div>


    
    

    <FooterComponent />
   
  </div>
</template>

<script lang="ts" setup>
import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue' ;
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import StackComponent from '@/components/StackComponent.vue';

</script>

<style lang="scss">

main {
  margin-top: 80px; /* Ajusta este valor según la altura de la barra de navegación */
}


#app {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}

.containerStackProject{
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

@media  (max-width: 576px) {
  .containerStackProject{
    display: flex;
    flex-direction: column;
  }
}

section {
  padding: 50px 0; 
}

footer {
  margin-top: 50px;
}


</style>
