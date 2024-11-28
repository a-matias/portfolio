<template>
    
    <button @click="redirectToLogin">Ingresar</button>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "RedirectButton",
  setup() {
    const router = useRouter();

    const redirectToLogin = () => {
      router.push("/login");
    };

    return {
      redirectToLogin,
    };
  },
});
</script>



<style lang="scss" scoped>
@import "@/assets/style.scss"; // Importa tus variables globales aquí

button{
    background-color: $secondary-color; 
    width: auto;
    padding: 10px;
    border-radius: 15px;
    font-size: larger;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 600;
}

button:hover{
  background-color: $secondary-color-alt;
  color: $text-color;
}


</style>