<template>
  <div>
    <div class="h-full flex justify-around items-center">
      <LogoComponent/>
      <ButtonComponent label="Iniciar Sesión" route="/login"/>
      <ButtonComponent label="Firebase" route="/firebase" />
    </div>
   
  </div>
</template>

<script lang="ts" setup>
import LogoComponent from '@/components/LogoComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


</script>


