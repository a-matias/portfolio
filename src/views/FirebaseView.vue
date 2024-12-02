<template>
    <div class="pt-5">
        <h3 class="text-3xl">Firebase</h3>
      <FormLoginComponent :onAuth="authUser" />
      <div class="mt-5">
        <ButtonComponent label="Home" route="/" customClass="alternative" /> <i class="fa fa-home" aria-hidden="true"></i>
      </div>
    </div>
  </template>
  
  <script lang="ts" setup>
  import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
  import FormLoginComponent from "@/components/login/FormLoginComponent.vue";
  import ButtonComponent from "@/components/ButtonComponent.vue";
  
  // Lógica para autenticar con Firebase
  const authUser = (email: string, password: string) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        alert("¡Inicio de sesión exitoso!");
      })
      .catch((error) => {
        alert("Error: " + error.message);
      });
  };
  </script>
  