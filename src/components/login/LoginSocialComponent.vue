<template>
    <div class="flex justify-center mt-5">
      <div class="w-1/2 text-center">
        <h3>O ingresa por:</h3>
        <button class="social-button google bg-slate-200" @click="handleGoogleLogin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="icon">
            
            <path
              d="M23.68 12.263c0-.82-.073-1.602-.205-2.352H12v4.454h6.633a5.666 5.666 0 01-2.455 3.712v3.096h3.968c2.321-2.139 3.634-5.292 3.634-8.91z"
              fill="#4285F4"
            />
            <path
              d="M12 24c3.245 0 5.972-1.073 7.964-2.91l-3.968-3.096c-1.104.737-2.52 1.169-3.996 1.169-3.076 0-5.683-2.078-6.615-4.864H2.348v3.052A12.001 12.001 0 0012 24z"
              fill="#34A853"
            />
            <path
              d="M5.385 14.299a7.213 7.213 0 010-4.594V6.653H2.348a12.001 12.001 0 000 10.694l3.037-3.048z"
              fill="#FBBC05"
            />
            <path
              d="M12 4.733c1.765 0 3.352.606 4.604 1.796l3.444-3.445C17.967 1.122 15.245 0 12 0A12.001 12.001 0 002.348 6.653l3.037 3.052C6.317 6.778 8.924 4.733 12 4.733z"
              fill="#EA4335"
            />
          </svg>
           Google
        </button>
        <button class="social-button facebook bg-slate-200" @click="handleFacebookLogin">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 24 24"
            class="icon"
          >
            <path
              d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.408.593 24 1.325 24H12.82v-9.294H9.692V10.41h3.128V7.926c0-3.1 1.893-4.785 4.657-4.785 1.325 0 2.463.099 2.794.143v3.24l-1.917.001c-1.504 0-1.796.715-1.796 1.764v2.31h3.587l-.467 3.296h-3.12V24h6.116c.732 0 1.325-.593 1.325-1.325V1.325C24 .593 23.408 0 22.675 0z"
            />
          </svg>
           Facebook
        </button>
      </div>
    </div>
  </template>
  
  <script lang="ts">
  import { defineComponent } from "vue";
  
  export default defineComponent({
    name: "LoginSocialComponent@",
    setup() {
      const handleGoogleLogin = () => {
        console.log("Google login clicked");
        // Agregar lógica para autenticación con Google
      };
  
      const handleFacebookLogin = () => {
        console.log("Facebook login clicked");
        // Agregar lógica para autenticación con Facebook
      };
  
      return {
        handleGoogleLogin,
        handleFacebookLogin,
      };
    },
  });
  </script>
  
  <style scoped lang="scss">
@import "@/assets/style.scss";
/*
  .social-login {
    text-align: center;
    margin-top: 20px;
    width: fit-content;

  }*/
  
  .social-button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    padding: 10px;
    margin: 5px 0;
    border: none;
    border-radius: 5px;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
    transition: background-color 0.3s ease;
  }
  
 
  .google:hover {
    background-color: #c33d2e;
    color: #f8fafc;
    transition: 0.3s;
  }
    
  .facebook:hover {
    background-color: #375492;
    color: #f8fafc;
    transition: 0.3s;
  }
  
  .icon {
    width: 20px;
    height: 20px;
    margin-right: 10px;
  }
  </style>
  