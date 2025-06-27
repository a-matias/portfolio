// src/plugins/vuetify.ts
import 'vuetify/styles';
import { createVuetify } from 'vuetify';
import { aliases, mdi } from 'vuetify/iconsets/mdi';

// Si usás Material Design Icons (necesitás instalar @mdi/font)
import '@mdi/font/css/materialdesignicons.css';


const vuetify = createVuetify({
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  }
});

export default vuetify;
