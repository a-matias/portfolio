<template>
  <div class="mx w-full pt-5 ">
    <FormLoginComponent :onAuth="authUser"/>
    <div class="mt-5">
      <ButtonComponent label="Home" route="/" customClass="alternative" /> <i class="fa fa-home" aria-hidden="true"></i>

    </div>
   
  </div>
</template>

<script lang="ts" setup>
import FormLoginComponent from '@/components/login/FormLoginComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';



</script>


