<template>
  <div class="container min-w-full" id="contact">
    
    <!-- Logo -->
    <div class="logo">
      <img src="@/assets/email.svg" alt="Email" />

    </div>

    <!-- Formulario -->
    <div class="form">
      <h2 class="sectionTitle">Contactame</h2>  
      <form @submit.prevent="handleSubmit">
        <div class="mb-4">
          <label for="name" class="flex text-sm font-medium text-zinc-800 pl-1">Nombre y apellido</label>
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
          <label for="email" class="flex text-sm font-medium text-zinc-800 pl-1">Email</label>
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
          <label for="message" class="flex text-sm font-medium text-zinc-800 pl-1">Mensaje</label>
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

.sectionTitle {
  font-family: "Be Vietnam Pro", serif;
  font-weight: 500;
  text-align: center;
  font-style: normal;
  font-size: 2.5rem;
  margin-bottom: 20px;
}

input, textarea {
  width: 100%;
  max-height: 250px;
  min-height: 50px;
  padding: 0.8rem;
  border-radius: 4px;
  border: 1px solid #ccc;
}

button {
  background-image: linear-gradient(120deg, #fdfbfb 0%, #ebedee 100%);
  color: #000;
  padding: 12px 20px;
  border: none;
  cursor: pointer;
  border-radius: 10px;

}

button:hover {
  background-image: linear-gradient(135deg, #fdfcfb 0%, #e2d1c3 100%);
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
