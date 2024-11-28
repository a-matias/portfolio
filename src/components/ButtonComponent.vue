<template>
    
    <button type="submit">Ingresar</button>

</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonComponent",
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


</style>