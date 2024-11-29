<template>
  <div>
    <div class="h-full flex justify-around items-center">
      <LogoComponent/>
      <ButtonComponent label="Iniciar Sesión" route="/login"/>
    </div>
   
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import LogoComponent from '@/components/LogoComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    LogoComponent,
    ButtonComponent,
  },
});

</script>


<style lang="scss" scoped>

  
</style>
