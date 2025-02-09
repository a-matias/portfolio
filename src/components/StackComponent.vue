<template>
    <section class="container" id="stack">
        <div class="opacity-0 transition-all duration-500 text-center justify-between" v-scroll="'fade-in'">
            
            <h2 class="sectionTitle">Stack tecnológico</h2>
            
            <div class="stackGrid">
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

    
    {name: 'Python', icon: require('@/assets/icons/python.svg') },
    { name: 'TypeScript', icon: require('@/assets/icons/typescript.svg') },
    { name: 'JavaScript', icon: require('@/assets/icons/javascript.svg') },
    { name: 'PHP', icon: require('@/assets/icons/php.svg') },
    
    { name: 'flask', icon: require('@/assets/icons/flask.svg') },
    { name: 'Vue.js', icon: require('@/assets/icons/vue.svg') },
    { name: 'Laravel', icon: require('@/assets/icons/laravel.svg') },
    { name: 'Symfony', icon: require('@/assets/icons/symfony.svg') },
    
    
    { name: 'Firebase', icon: require('@/assets/icons/firebase.svg') },
    { name: 'MySQL', icon: require('@/assets/icons/mysql.svg') },
    { name: 'Git', icon: require('@/assets/icons/git.svg') },
    { name: 'Postman', icon: require('@/assets/icons/postman.svg') },

    { name: 'Sass', icon: require('@/assets/icons/sass.svg') },
    { name: 'CSS', icon: require('@/assets/icons/css.svg') },
    { name: 'Bootstrap', icon: require('@/assets/icons/bootstrap.svg') },
    { name: 'Tailwind', icon: require('@/assets/icons/tailwind.svg') },
   
  ]);
  
  // Control del índice activo para animación de hover
  const hoverIndex = ref<number | null>(null);
  </script>
  
  <style scoped>
  
  .container {
    display: grid;
    width: 50vw;
    align-items: center;
    justify-content: center;
    background-color: #ffffff;
  }

  .stackGrid {
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(4, 1fr);
    height: 60vh;
  }

  .sectionTitle {
    font-family: "Be Vietnam Pro", serif;
    font-weight: 1000;
    text-align: center;
    font-style: normal;
    font-size: 3rem;
    margin-bottom: 30px;
  }
    
  .stack-card {
    width: 100px;
    height: 100px;
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
    border-color: #fe9999ef;
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

    .container {
        display: grid;
        width: 100vw;
        height: 100vh;
        align-items: center;
        justify-content: center;
        background-color: #ffffff;
      }

    .stackGrid {
      display: grid;
      justify-items: center;
      align-items: center;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
    }

    .stack-card{
      width: 85px !important;
      height: 85px !important;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      border: 2px solid #ccc;
      border-radius: 10px;
      transition: transform 0.3s ease, border-color 0.3s ease;
      cursor: pointer;
    }

    .tech-icon {
      width: 25px;
      height: 25px;
    }

    .tech-name {
      margin-top: 10px;
      font-size: 1rem;
      font-weight: 500;
      opacity: 0;
      transition: opacity 0.3s ease;
    }


    .sectionTitle {
      font-family: "Be Vietnam Pro", serif;
      font-weight: 1000;
      text-align: center;
      font-style: normal;
      font-size: 2.5rem;
      margin-bottom: 30px;
    }

    .stack-card {
      width: 100px;
      height: 100px;

    }
  }

  </style>
  