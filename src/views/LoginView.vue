<template>
  <div class="mx w-full">
    <LogoComponent/>
    <FormLoginComponent/>
    <LoginSocialComponent/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';
import LoginSocialComponent from '@/components/login/LoginSocialComponent.vue';
import LogoComponent from '@/components/LogoComponent.vue'

export default defineComponent({
  name: 'HomeView',
  components: {
    FormLoginComponent,
    LoginSocialComponent,
    LogoComponent,
  },
});
</script>

<style lang="scss" scoped>

  
</style>
