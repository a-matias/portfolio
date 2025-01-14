<template>

  <div class="containerCard">
    
    <div class="capsuleCard" v-for="(card, index) in cards" :key="index">

      <div class="card">
        <a :href="card.link" target="_blank" rel="noopener noreferrer">
          <img class="rounded-t-lg" :src="card.image" alt="Card image" />
        </a>
        <div class="p-5">
          <a :href="card.link" target="_blank" rel="noopener noreferrer">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ card.title }}
            </h5>
          </a>
          <p class="mb-5 text-justify" target="_blank" rel="noopener noreferrer">
            {{ card.description }}
          </p>
        </div>
      </div>
      
    </div>
  </div>

</template>

  
<script lang="ts" setup>
  import { ref } from 'vue';

  // Array de tarjetas
  const cards = ref([
    {
      title: 'Guia Digital',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident, magnam. Itaque ut consequuntur nisi ex voluptates hic enim. Iusto, voluptatibus!',
      image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
      link: 'http://www.guiadigital.com.ar',
    },
    {
      title: 'J-Cordero',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia quo incidunt temporibus quibusdam odio! Dignissimos!',
      image: 'https://www.comparapps.com/wp-content/uploads/2020/04/que-es-una-pagina-web.png',
      link: 'https:www.j-cordero.com.ar',
    },

  ]);
</script>

<style scoped>

  .containerCard{
    display: flex;
    align-content: center;
    justify-content:space-around;
    width: 45vw;
    padding: 1.5rem;
    height: 60vh;

  }

  .capsuleCard{
    display: flex;
    background-color: #ffffff;
    border-radius: 10px;
    width: 20vw;
    padding: 2vw;
  }

  .card{
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 20vw;
    background-color: #ffffff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 10px;
    transition: scale(0);
    transition: 0.3s;

  }

  .card:hover{
    transform: scale(1.1);
    transition: 0.4s;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    cursor: pointer;
  }

  @media (max-width: 576px) {
    .containerCard{
      display: flex;
      flex-direction: column;
      justify-content: center;
      height: 100vh;
      width: 100vw;
    }

    .capsuleCard{
      display: flex;
      background-color: none !important;
      flex-direction: column;
      justify-content: center;
      width: 1px;
      height: 1px;
    }

    .card{
      display: flex;
      flex-direction: column;
      background-color: #fff;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      border-radius: 10px;
      margin-bottom: 10px;
      width: 80vw;

    }

    .card:hover{
      transform: scale(1.1);
      transition: 0.3s;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      cursor: pointer;
    }

    .title{
      font-size: medium;
    }

  }
  
</style>
  