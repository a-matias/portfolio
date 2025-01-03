import { createApp } from 'vue';
import App from './App.vue';

import 'animate.css';
import "@/assets/tailwind.css"; // Importar el archivo de Tailwind CSS
import "@/assets/style.scss";  // Si también estás usando SCSS
import scroll from '@/directives/scroll';


const app = createApp(App); // Crear la instancia de la aplicación

app.directive('scroll', scroll); // Registrar la directiva
app.mount('#app'); // Montar la aplicación