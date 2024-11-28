import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'animate.css';
import "@/assets/tailwind.css"; // Importar el archivo de Tailwind CSS
import "@/assets/style.scss";  // Si también estás usando SCSS
createApp(App).use(router).mount('#app')
