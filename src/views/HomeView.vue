<template>
  <div>
    <div class="logo">
      <LogoComponent/>
    </div>
   
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
   
    <ButtonComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue';
//import MessageComponent from '@/components/MessageComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    LogoComponent,
    /*MessageComponent,*/
    ButtonComponent,
  },
});
</script>


<style lang="scss" scoped>

.logo{
  width: auto;
  display: flexbox;
}
  
</style>
