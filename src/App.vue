<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="fixed top-0 w-full bg-white shadow-md z-10">
      <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <div class="relative flex items-center justify-between h-16">
          <NavbarComponent />
        </div>
      </div>
    </nav>

    <!-- Home Section -->
    <HomeComponent id="about" />

    <!-- About Section -->
    <ProjectsComponent id="projects" />

    <!-- About Section -->
    <AboutComponent id="stack" />

    <!-- Footer Section -->
    <FooterComponent />
   
  </div>
</template>

<script lang="ts" setup>
import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';
import NavbarComponent from '@/components/NavbarComponent.vue' ;
import ProjectsComponent from './components/ProjectsComponent.vue';

</script>

<style lang="scss">
/* Estilos globales */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
}

html, body {
  margin: 0;
  height: 100%;
}

section {
  padding: 50px 0; /* Espaciado para las secciones */
}

footer {
  margin-top: 50px;
}
</style>
