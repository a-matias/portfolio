<template>
  <div class="form">
    <FormLoginComponent/>
    <LoginSocialComponent/>
  </div>
  
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';
import LoginSocialComponent from '@/components/login/LoginSocialComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    FormLoginComponent,
    LoginSocialComponent,
  },
});
</script>

<style lang="scss" scoped>
.form{
  margin-top: 20px;
}
  
</style>
