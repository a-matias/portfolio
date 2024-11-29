<template>
  <div class="login-container bg-gradient-to-t from-slate-50 to-slate-200">
    <form @submit.prevent="handleLogin">
      <h1 class="text-3xl">Iniciar Sesión</h1>

      <div class="form-group">
        <label for="email" class="text-left">Email</label>
        <input
          type="email"
          id="email"
          v-model="email"
          placeholder="Ingresa tu Email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password" class="text-left">Password</label>
        <input
          type="password"
          id="password"
          v-model="password"
          placeholder="Ingresa tu contraseña"
          required
        />
      </div>

      <!-- Componente de login social dentro del formulario -->
      <div class="social-login">
        <LoginSocialComponent />
      </div>

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import LoginSocialComponent from "@/components/login/LoginSocialComponent.vue";

export default defineComponent({
  name: "LoginComponent",
  components: { LoginSocialComponent },
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

<style lang="scss" scoped>
@import "@/assets/style.scss";
@import url('https://fonts.googleapis.com/css2?family=Lato:ital,wght@0,100;0,300;0,400;0,700;0,900;1,100;1,300;1,400;1,700;1,900&display=swap');

.login-container {
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: "Lato", sans-serif;
  font-weight: 400;
  font-style: normal;
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

.social-login {
  text-align: center;
  margin: 15px 0;
  p {
    margin-bottom: 10px;
    font-size: 14px;
    color: #555;
  }
}
</style>
