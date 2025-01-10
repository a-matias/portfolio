<template>
    <section class="container flex items-center justify-center" id="stack">
        <div v-scroll="'fade-in'" class="opacity-0 transition-all duration-500 text-center justify-between">
            
            <h2 class="section-title">Mi Stack Tecnológico</h2>
            
            <div class="stackFlex">
                <div class="stack-card"
                v-for="(tech, index) in technologies"
                :key="index"
                @mouseenter="hoverIndex = index"
                @mouseleave="hoverIndex = null"
                >
                    <img :src="tech.icon" :alt="tech.name" class="tech-icon" />
                    <p class="tech-name" :class="{ visible: hoverIndex === index }">{{ tech.name }}</p>
                </div>
            </div>

        </div>
    </section>
  </template>
  
  <script lang="ts" setup>
  import { ref } from 'vue';
  
  // Lista de tecnologías
  const technologies = ref([
    { name: 'HTML', icon: require('@/assets/icons/html.svg') },
    { name: 'CSS', icon: require('@/assets/icons/css.svg') },
    { name: 'JavaScript', icon: require('@/assets/icons/javascript.svg') },
    { name: 'Vue.js', icon: require('@/assets/icons/vue.svg') },
    { name: 'Node.js', icon: require('@/assets/icons/node.svg') },
    { name: 'MySQL', icon: require('@/assets/icons/mysql.svg') },
    { name: 'Git', icon: require('@/assets/icons/git.svg') },
    { name: 'Bootstrap', icon: require('@/assets/icons/bootstrap.svg') },
    { name: 'Laravel', icon: require('@/assets/icons/laravel.svg') },
    { name: 'Sass', icon: require('@/assets/icons/sass.svg') },
    { name: 'Tailwind', icon: require('@/assets/icons/tailwind.svg') },
  ]);
  
  // Control del índice activo para animación de hover
  const hoverIndex = ref<number | null>(null);
  </script>
  
  <style scoped>
  
  .container {
    display: grid;
    justify-content: center;
    align-content: flex-start;
    width: 50vw;
    height: 100vh;
    background-image: radial-gradient(73% 147%, #EADFDF 59%, #ECE2DF 100%), radial-gradient(91% 146%, rgba(255,255,255,0.50) 47%, rgba(0,0,0,0.50) 100%) !important;
    }


  .section-title {
    font-family: "Be Vietnam Pro", serif;
    font-weight: 400;
    align-items: flex-start;
    font-style: normal;
    font-size: 2.5rem;
    margin-bottom: 30px;

  }
  
  .stackFlex {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    grid-column-gap: 10px;
    grid-row-gap: 10px;
  }
  
  .stack-card {
    width: 120px;
    height: 120px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border: 2px solid #ccc;
    border-radius: 10px;
    transition: transform 0.3s ease, border-color 0.3s ease;
    cursor: pointer;
  }
  
  .stack-card:hover {
    transform: scale(1.1);
    border-color: #b700ff;
  }
  
  .tech-icon {
    width: 50px;
    height: 50px;
  }


  .tech-name {
    margin-top: 10px;
    font-size: 1rem;
    font-weight: 500;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .tech-name.visible {
    opacity: 1;
  }


  @media  (max-width: 576px) {

    .stackFlex {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 10px;
      grid-row-gap: 10px;
    }

    .stack-card {
      width: 100px;
      height: 100px;

    }
  }

  </style>
  