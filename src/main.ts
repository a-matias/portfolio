import { createApp } from 'vue';
import App from './App.vue';

import 'animate.css';
import "@/assets/tailwind.css";
import "@/assets/style.scss";  
import scroll from '@/directives/scroll';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCode, faEnvelope } from '@fortawesome/free-solid-svg-icons';


// Agrega los íconos a la librería
library.add(faCode, faEnvelope);

const app = createApp(App); // Crear la instancia de la aplicación

app.component('font-awesome-icon', FontAwesomeIcon);

app.directive('scroll', scroll); // Registrar la directiva
app.mount('#app'); // Montar la aplicación