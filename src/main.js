import { createApp } from "vue";
import App from "./App.vue";
import PrimeVue from "primevue/config";
import Aura from "@primevue/themes/aura";
import { createRouter, createWebHashHistory } from "vue-router";
import MainComponent from "./components/MainComponent.vue";
import AboutPage from "./components/AboutPage.vue";
import ProjectPage from "./components/ProjectPage.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: MainComponent,
  },
  {
    path: "/about",
    name: "About",
    component: AboutPage,
  },
  {
    path: "/projects",
    name: "Projects",
    component: ProjectPage
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

createApp(App)
  .use(router)
  .use(PrimeVue, {
    theme: {
      preset: Aura,
      options: {
        darkModeSelector: false,
      },
    },
  })
  .mount("#app");
