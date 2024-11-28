<template>
  <div class="mx w-full mt-5 pt-5">
    <FormLoginComponent/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';


export default defineComponent({
  name: 'HomeView',
  components: {
    FormLoginComponent,
  },
});
</script>

<style lang="scss" scoped>

  
</style>
