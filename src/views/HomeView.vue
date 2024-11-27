<template>
  <div>
    <LogoComponent/>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
    <MessageComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import HelloWorld from '@/components/HelloWorld.vue'; // @ is an alias to /src
import LogoComponent from '@/components/LogoComponent.vue';
import MessageComponent from '@/components/MessageComponent.vue';

export default defineComponent({
  name: 'HomeView',
  components: {
    HelloWorld,
    LogoComponent,
    MessageComponent,
  },
});
</script>

<style lang="scss">
  

</style>
