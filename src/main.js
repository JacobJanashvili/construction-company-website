import { createApp } from "vue";
import App from "./App.vue";
import { router } from "./router";
import { createVuetify } from 'vuetify';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';

import 'vuetify/styles';
import { aliases, mdi } from 'vuetify/iconsets/mdi'; // optional
import * as components from 'vuetify/components'; // Vuetify 3 tree-shaking
import * as directives from 'vuetify/directives';

const vuetify = createVuetify({
  components,
  directives,
  icons: {
    defaultSet: 'mdi',
    aliases,
    sets: {
      mdi,
    },
  },
});


createApp(App)
  .use(router)
  .use(vuetify)
  .use(PrimeVue,{
    theme: {
      preset: Aura,
      options :{
        darkModeSelector: 'light'
      }
    },

  })
  .mount("#app");
