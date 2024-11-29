<template>
  <div class="mx w-full pt-5 ">
    <FormLoginComponent/>
    <div class="mt-5">
      <ButtonComponent label="Home" route="/" customClass="alternative" /> <i class="fa fa-home" aria-hidden="true"></i>

    </div>
   
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    FormLoginComponent,
    ButtonComponent,
  },
});
</script>

<style lang="scss" scoped>

  
  
</style>
