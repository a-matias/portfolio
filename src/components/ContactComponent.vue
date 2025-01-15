<template>
  <div class="container min-w-full" id="contact">
    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/email.svg" alt="Email" />

    </div>

    <!-- Formulario -->
    <div class="form">
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="block text-sm font-medium">Nombre</label>
          <input 
            id="name" 
            v-model="form.name" 
            type="text" 
            placeholder="Tu nombre" 
            required 
            class="w-full p-2 mt-2 border rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="email" class="block text-sm font-medium">Email</label>
          <input 
            id="email" 
            v-model="form.email" 
            type="email" 
            placeholder="Tu correo electrónico" 
            required 
            class="w-full p-2 mt-2 border rounded-md"
          />
        </div>
        <div class="mb-4">
          <label for="message" class="block text-sm font-medium">Mensaje</label>
          <textarea 
            id="message" 
            v-model="form.message" 
            placeholder="Escribe tu mensaje" 
            required 
            class="w-full p-2 mt-2 border rounded-md"
          ></textarea>
        </div>
        <button 
          type="submit" 
          class="px-6 py-2 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700 transition"
        >
          Enviar
        </button>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue';
import storyset from '../assets/email.svg';

export default {
  setup() {
    const form = ref({
      name: '',
      email: '',
      message: ''
    });

    const handleSubmit = () => {
      console.log('Formulario enviado:', form.value);
      form.value.name = '';
      form.value.email = '';
      form.value.message = '';
    };

    return { form, handleSubmit };
  }
};

</script>

<style scoped>

.container {
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-image: linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%);
  }


.logo {
  width: 45vw;
  height: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 20px;
  color: white;
}

.form {
  width: 45vw;
  height: auto;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 20px;
  border-radius: 8px;
}

input, textarea {
  width: 100%;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #45a049;
}

@media (max-width: 576px) {

  .container {
    width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .logo {
    width: 100vw;
    height: auto;
    display: none;
    justify-content: center;
    align-content: center;
    text-align: center;
  }

  .form {
    width: 100vw;
    height: auto;
    display: flex;
    justify-content: center;
    padding: 20px;
    
  }

  .form form{
    width: 90vw;
    
  }

}

</style>
