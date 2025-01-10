<template>
  <div :class="['navBar', isScrolled ? 'scrolled' : '']">
    <div class="containerLogo">
      <img :src="logo" alt="Logo" class="logo" />
    </div>
    <div class="containerLinks">
      <a class="links" href="#home" @click.prevent="scrollToSection('home')">Home</a>
      <a class="links" href="#about" @click.prevent="scrollToSection('about')">About</a>
      <a class="links" href="#stack" @click.prevent="scrollToSection('stack')">Stack</a>
      <a class="links" href="#projects" @click.prevent="scrollToSection('projects')">Projects</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/logo.svg';

const isScrolled = ref(false);

function handleScroll(): void {
  isScrolled.value = window.scrollY > 50; // Cambia a true si se scrollea más de 50px
}

function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
</script>

<style lang="scss" scoped>
.navBar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  padding-left: 5vw;
  padding-right: 5vw;
  background-color: #fff;
  z-index: 1000;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
  height: 80px; /* Altura inicial */
  transition: height 0.3s ease-in-out; /* Transición suave para cambios de altura */
}

.navBar.scrolled {
  height: 50px; /* Altura reducida al hacer scroll */
}

.containerLogo {
  display: flex;
  width: 15vw;
  justify-content: center;
}

.containerLinks {
  display: flex;
  width: 75vw;
  justify-content: flex-end;
}

.links {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 400;
  font-style: normal;
  font-size: 20px;
  color: #17202a;
  padding: 10px;
  margin-right: 10px;
}

.links:hover {
  color: #a61add;
  transition: 0.2s;
}

.logo {
  width: 100px;
  height: auto;
  transition: width 0.3s ease-in-out; /* También puedes reducir el tamaño del logo */
}

.navBar.scrolled .logo {
  width: 60px; /* Tamaño reducido del logo */
}
</style>
