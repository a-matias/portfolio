<template>
  <button @click="handleClick" :class="['base-button', customClass]">{{ label }}</button>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ButtonComponent',
  props: {
    label: {
      type: String,
      default: 'Button',
    },
    customClass: {
      type: String,
      default: '', // Permite personalizar la clase desde el padre
    },
    route: {
      type: String,
      required: true, // Debe especificarse
    },
  },
  setup(props) {
    const handleClick = () => {
      window.location.href = props.route;
    };

    return {
      handleClick,
    };
  },
});
</script>


<style lang="scss" scoped>
@import "@/assets/style.scss"; // Importa tus variables globales aquí

.base-button{
  background-color: #d74d63; 
  width: 200px;
  padding: 10px;
  border-radius: 10px;
  color: #fff;
  font-size: larger;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: 600;
}

.base-button:hover{
  background-color: #d6ba84;
  color: #333;
  transition: 0.3s;
}

.base-button.alternative {
  background-color: aliceblue;
  color: $text-color;
  width: 150px;
  padding: 10px;
}

.base-button.alternative:hover {
  background-color: #333;
  color: aliceblue;
  transition: 0.3s;
}


</style>