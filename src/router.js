import { createRouter, createWebHashHistory } from "vue-router";
const MainComponent = () => import("./components/MainComponent.vue");
const AboutPage = () => import("./components/AboutPage.vue");
const ProjectPage = () => import("./components/ProjectPage.vue");
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
    component: ProjectPage,
  },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
