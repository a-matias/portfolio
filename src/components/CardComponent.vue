<template>
  <div>
    <!-- Vista en desktop -->
    <div class="containerCard hidden sm:flex">
      <div class="capsuleCard justify-center" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <img class="rounded-t-lg object-cover w-full" :src="card.image" alt="Card image" />
          </a>
          <div class="p-5">
            <a :href="card.link" target="_blank" rel="noopener noreferrer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ card.title }}</h5>
            </a>
            <div class="tech-icons bg-violet-100 p-1">
              <img v-for="(icon, iconIndex) in card.technologies" :key="iconIndex" :src="icon" alt="Technology icon" class="tech-icon" />
            </div>
            <p class="text-justify mt-2">{{ card.description }}</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Vista en móvil con slide -->
    <swiper v-show="$isMobile" class="swiper-container" :space-between="20" :slides-per-view="1">
      <swiper-slide class="flex justify-center pt-12" v-for="(card, index) in cards" :key="index">
        <div class="card">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <img class="rounded-t-lg object-cover w-full" :src="card.image" alt="Card image" />
          </a>
          <div class="w-full p-5">
            <a :href="card.link" target="_blank" rel="noopener noreferrer">
              <h5 class="mb-2 text-2xl font-bold tracking-tight">{{ card.title }}</h5>
            </a>
            <div class="tech-icons bg-indigo-300 p-1">
              <img v-for="(icon, iconIndex) in card.technologies" :key="iconIndex" :src="icon" alt="Technology icon" class="tech-icon" />
            </div>
            <p class="text-justify mt-2">{{ card.description }}</p>
          </div>
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed } from 'vue';
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';

const cards = ref([
  {
    title: 'Guia Digital',
    description: 'Un sitio web moderno y eficiente .',
    image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
    link: 'http://www.guiadigital.com.ar',
    technologies: [
      require('@/assets/icons/laravel.svg'),
      require('@/assets/icons/javascript.svg'),
      require('@/assets/icons/mysql.svg'),
      require('@/assets/icons/css.svg'),
      require('@/assets/icons/bootstrap.svg'),
    ],
  },
  {
    title: 'J-Cordero',
    description: 'Desarrollo de aplicaciones robustas.',
    image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
    link: 'https://www.j-cordero.com.ar',
    technologies: [
      require('@/assets/icons/laravel.svg'),
      require('@/assets/icons/css.svg'),
      require('@/assets/icons/bootstrap.svg'),
      require('@/assets/icons/mysql.svg'),
    ],
  },
]);

const $isMobile = computed(() => window.innerWidth <= 576);
</script>

<style scoped>
.containerCard {
  display: flex;
  justify-content: space-around;
  width: 45vw;
  padding: 1.5rem;
  height: 60vh;
}

.capsuleCard {
  display: flex;
  background-color: #ffffff;
  border-radius: 10px;
  width: 20vw;
  padding: 2vw;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 25rem;
  width: 18vw;
  background-color: #ffffff;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border-radius: 10px;
  transition: 0.3s;
  overflow: hidden;
}

.card:hover {
  transform: scale(1.1);
  transition: 0.4s;
  cursor: pointer;
}

.tech-icons {
  display: flex;
  justify-content: space-around;
  gap: 0.5rem;
  margin-top: 1rem;
  border-radius: 5px;
}

.tech-icon {
  width: 24px;
  height: 24px;
}

.swiper-container {
  width: 100vw;
  height: 80vh;
}

@media (max-width: 576px) {
  .containerCard {
    display: none;
  }

  .swiper-container {
    display: block;

  }

  .card {
    width: 80vw;
    height: 50vh;
    
  }
}
</style>
