<template>

  <div class="navBar">
    <div class="nombre flex-shrink-0 text-2xl font-bold text-gray-700">
      <font-awesome-icon :icon="['fas', 'code']" />
    </div>
    <div class="containerLinks">
      <a class="links" href="#projects" @click.prevent="scrollToSection('about')">About</a>
      <a class="links" href="#projects" @click.prevent="scrollToSection('projects')">Mis proyectos</a>
      <a class="links" href="#stack" @click.prevent="scrollToSection('stack')">Stack</a>
    </div>

    
  </div>

</template>

<script lang="ts" setup>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Cairo+Play&family=Diphylleia&family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

html {
  scroll-behavior: smooth; /* Suaviza el scroll en navegadores compatibles */
}

*{
  margin: 0;
  padding: 0;
}

.nombre{
  font-family: "Cairo Play", serif;
  font-size: 30px;
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  font-variation-settings:
    "slnt" 0;
}

.navBar{
  display: flex; 
  align-items: center;


}
.containerLinks{
  display: flex;
  width: 80vw;
  justify-content:flex-end;
}
.links{
  font-family: "Cairo Play", serif;
  font-size: 22px;
  color: #17202a;
  padding: 10px;
  margin-right: 10px;
}

.links:hover{
 color: #b700ff;
}

</style>

