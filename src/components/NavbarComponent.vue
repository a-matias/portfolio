<template>
  <div :class="['navBar', isScrolled ? 'scrolled' : '']">
    <div class="containerLogo">
      <img :src="logo" href="#home" @click.prevent="scrollToSection('home')" alt="Logo" class="logo" />
    </div>
    <button class="menuToggle" @click="toggleMenu">
      <span class="material-icons" :class="{ 'open': isMenuOpen }">
        {{ isMenuOpen ? 'close' : 'menu' }}  <!-- Cambiar entre 'close' y 'menu' -->
      </span>
    </button>
    <div :class="['containerLinks', isMenuOpen ? 'open' : '']">
      <a class="links" href="#home" @click.prevent="scrollToSection('home')">Home / About</a>
      <a class="links" href="#stack" @click.prevent="scrollToSection('stack')">Stack / Projects</a>
      <a class="links" href="#contact" @click.prevent="scrollToSection('contact')">Contact</a>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from 'vue';
import logo from '@/assets/logo.svg';

const isScrolled = ref(false);
const isMenuOpen = ref(false);

function handleScroll(): void {
  isScrolled.value = window.scrollY > 50; // Cambia a true si se scrollea más de 50px
}

function toggleMenu(): void {
  isMenuOpen.value = !isMenuOpen.value; // Cambia el estado del menú
}

function scrollToSection(sectionId: string): void {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
    isMenuOpen.value = false; // Cierra el menú después de hacer clic en una opción
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
  transition: font-size 0.3s ease-in-out, padding 0.3s ease-in-out, color 0.2s;
}

.links:hover {
  color: #a61add;
}

.menuToggle{
  display: none;
}

.logo {
  width: 240px;
  height: auto;
  transition: width 0.3s ease-in-out; /* También puedes reducir el tamaño del logo */
}

/* Vista móvil - Cambios solo aquí */
@media (max-width: 768px ) {
  .navBar {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .containerLogo {
    display: flex;
    width: 50vw;
    padding: 0;

  }

  .logo {
    margin-right: 80px;
    width: auto;
    transition: width 0.3s ease-in-out; /* También puedes reducir el tamaño del logo */
  }

  .containerLinks {
    display: none; /* Esconde los enlaces por defecto */
    position: absolute;
    top: 50px;
    right: 0;
    background-color: #ffffff;
    width: 100%;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
    flex-direction: column;
    align-items: center;
    padding: 10px 0;
    z-index: 1000;
  }

  .containerLinks.open {
    display: flex; /* Muestra los enlaces cuando se activa el menú hamburguesa */
  }

  .links {
    font-size: 16px; /* Ajuste de tamaño solo para móviles */
    padding: 15px 20px;
  }

  /* Estilos para el ícono hamburguesa */
  .menuToggle {
    display: block;
    background: none;
    border: none;
    cursor: pointer;
    z-index: 1100;
    margin-right: 5px;
  }

  .material-icons {
    font-size: 30px; /* Ajusta el tamaño del ícono */
    color: #000;
    transition: color 0.3s ease, transform 0.3s ease; 
  }
  .material-icons.open {
    color: #a61add; /* Color cuando el menú está abierto */
    transform: rotate(90deg); /* Gira el ícono cuando está abierto */
  }


}


</style>
