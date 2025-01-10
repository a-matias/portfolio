<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="shadow-md z-10">
      <NavbarComponent />
    </nav>

    <!-- Home Section -->
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

html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  width: 100%;
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
