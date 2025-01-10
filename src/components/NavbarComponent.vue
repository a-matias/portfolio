<template>

  <div class="navBar">
    <div class="containerLogo">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <div class="containerLinks">
      <a class="links" href="#projects" @click.prevent="scrollToSection('about')">About</a>
      <a class="links" href="#projects" @click.prevent="scrollToSection('projects')">Mis proyectos</a>
      <a class="links" href="#stack" @click.prevent="scrollToSection('stack')">Stack</a>
    </div>

    
  </div>

</template>

<script lang="ts" setup>
import logo from '@/assets/logo.svg'; // Importa el archivo SVG

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

.navBar{
  display: flex; 
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%);
}

.containerLogo{
  display: flex;
  width: 15vw;
  justify-content: center;
}

.containerLinks{
  display: flex;
  width: 75vw;
  justify-content:flex-end;
}

.links{
  font-family: "Be Vietnam Pro", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #17202a;
  padding: 10px;
  margin-right: 10px;
}

.links:hover{
 color: #a61add;
 transition: 0.2s;
}


.logo {
  width: 120px; /* Ajusta el tamaño según sea necesario */
  height: auto;
}

</style>

