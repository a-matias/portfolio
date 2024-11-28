<template>
  <div class="mx w-full mt-5 pt-5">
    <FormLoginComponent/>
    <LoginSocialComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';
import LoginSocialComponent from '@/components/login/LoginSocialComponent.vue';
//import LogoComponent from '@/components/LogoComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    FormLoginComponent,
    LoginSocialComponent,
    
  },
});
</script>

<style lang="scss" scoped>

  
</style>
