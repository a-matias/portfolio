<template>
  <div id="app">
    <!-- Navbar -->
      <NavbarComponent />

    <HomeComponent id="home" />

    <div class="containerStackAbout min-h-screen flex items-center">

      <StackComponent id="stack" />

      <AboutComponent id="about" />

    </div>
    
    <ProjectsComponent id="projects" />

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

@media  (max-width: 576px) {
  .containerStackAbout{
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
