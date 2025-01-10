<template>

  <div class="containerCard">
    
    <div class="capsuleCard" v-for="(card, index) in cards" :key="index">

      <div  class="card">

        <a :href="card.link">
          <img class="rounded-t-lg" :src="card.image" alt="Card image" />
        </a>
        <div class="p-5">
          <a :href="card.link">
            <h5 class="mb-2 text-2xl font-bold tracking-tight">
              {{ card.title }}
            </h5>
          </a>
          <p class="mb-5 text-justify">
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
      link: 'http://www.proyecto2.com',
    },

  ]);
</script>

<style scoped>

  .containerCard{
    display: flex;
    width: 75vw;
    padding: 2rem;
    height: 65vh;
    justify-content: space-around;

  }

  .capsuleCard{
    display: flex;
    background: url('/src/assets/backgroundCard.svg') no-repeat center center fixed;
    background-size:cover;
    border-radius: 10px;
    width: 20vw;
    padding: 2vw;
    margin: 5px;
  }

  .card{
    display: flex;
    flex-direction: column;
    width: 20vw;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 10px;

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
      flex-direction: column;
      justify-content: center;
      background-image: none;
      height: 100vh;
      width: 100vw;
    }

    .card{
    display: flex;
    flex-direction: column;
    width: 80vw;
    height: 50vh;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
    border-radius: 10px;
    margin-bottom: 10px;

    }

    .card:hover{
      transform: scale(1.1);
      transition: 0.4s;
      box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
      cursor: pointer;
    }

    .title{
      font-size: medium;
    }

  }
  
</style>
  