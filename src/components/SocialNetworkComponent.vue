<template>
    <div class="ContainerIcons">
      <ul class="iconSocial">
        <FontAwesomeIcon :icon="['fab', 'linkedin']" />
      </ul>
      <ul class="iconSocial">
        <font-awesome-icon :icon="['fab', 'whatsapp']" />
      </ul>
      <ul class="iconSocial">
        <FontAwesomeIcon :icon="['fas', 'envelope']" />
      </ul>
    </div>
  </template>
  
  <script lang="ts" setup>

    import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
    import { library } from '@fortawesome/fontawesome-svg-core';
    import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';
    import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

    
    library.add(faWhatsapp, faLinkedin, faEnvelope);

  </script>
  
  <style scoped>
    
  .ContainerIcons{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 20vw;   
    height: 10vh;
    align-items:flex-end;
  }

  .iconSocial {
      display: flex;
      width: 3vw;
      height: 3vw;
      font-size: 20px;
      display: flex;
      justify-content: center;
      align-items: center;
      border-radius: 50%;
      border: 2px solid rgb(27, 27, 26);
      margin-left: 5px;
      margin-right: 5px;
  }

  .iconSocial:hover{
      background-color:rgb(27, 27, 26);
      color:aliceblue;
      transition: 0.4s;
  }


  </style>
  