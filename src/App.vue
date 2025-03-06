<template>
  <div id="app">
      <NavbarComponent />
      <div class="containerComponent min-h-screen flex">
        <HomeComponent id="home" />
        <AboutComponent id="about" />
      </div>
      <div class="containerComponent min-h-screen flex">
        <StackComponent id="stack" />
        <ProjectsComponent id="projects" />
      </div>
      <div class="min-h-screen flex">
        <ContactComponent />
      </div>
     <FooterComponent />
  </div>
</template>

<script lang="ts" setup>
import NavbarComponent from '@/components/NavbarComponent.vue';
import HomeComponent from '@/components/HomeComponent.vue';
import AboutComponent from '@/components/AboutComponent.vue';
import StackComponent from '@/components/StackComponent.vue';
import ProjectsComponent from '@/components/ProjectsComponent.vue';
import ContactComponent from '@/components/ContactComponent.vue';
import FooterComponent from '@/components/FooterComponent.vue';

</script>

<style lang="scss">

main {
  margin-top: 80px;
}

#app {
  display: flex;
  flex-direction: column;
  align-content: center;
  text-align: center;
}

.containerComponent {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-content: center;
}

@media (max-width: 1024px) {
  .containerComponent {
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
