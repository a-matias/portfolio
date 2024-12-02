import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import "@/assets/tailwind.css"; // Importar el archivo de Tailwind CSS
import "@/assets/style.scss";  // Si también estás usando SCSS
import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyCYK9d38-ZTFrP9NvCCXyz2vSSoRUd_-zY",
    authDomain: "auth-vue-286be.firebaseapp.com",
    projectId: "auth-vue-286be",
    storageBucket: "auth-vue-286be.firebasestorage.app",
    messagingSenderId: "599641540434",
    appId: "1:599641540434:web:8172c9c31a3e3c107fdc8b",
    measurementId: "G-TJH8ZT32L7"
  };
  
  // Initialize Firebase
initializeApp(firebaseConfig);
createApp(App).use(router).mount('#app')
