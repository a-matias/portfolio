<template>
    <div class="login-container">
      <form @submit.prevent="handleLogin">
        <h2>Iniciar Sesión</h2>
  
        <div class="form-group">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Enter your email"
            required
          />
        </div>
  
        <div class="form-group">
          <label for="password">Password</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Enter your password"
            required
          />
        </div>
  
        <button type="submit">Login</button>
      </form>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent, ref } from "vue";
  
  export default defineComponent({
    name: "LoginComponent",
    setup() {
      const email = ref("");
      const password = ref("");
  
      const handleLogin = () => {
        console.log("Email:", email.value);
        console.log("Password:", password.value);
        // Aquí puedes agregar la lógica de autenticación, como enviar los datos al backend.
      };
  
      return {
        email,
        password,
        handleLogin,
      };
    },
  });
  </script>
  
  <style  lang="scss" scoped>
 @import "@/assets/style.scss"; 

  .login-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    font-family: Arial, sans-serif;
  }
  
  h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
    font-weight: bold;
  }
  
  input {
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
    font-size: 16px;
  }
  
  button {
    width: 100%;
    padding: 10px;
    background-color: $secondary-color;
    color: #fff;
    border: none;
    border-radius: 4px;
    font-size: 16px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: $secondary-color-alt;
    
  }
  </style>
  