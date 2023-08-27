import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./Views/LoginPage.vue";
import HomeView from "./Views/Site/Home.vue";

const routes = [
  { path: "/", component: HomeView, name:"homePage" },
  { path: "/acesso", component: LoginPage, name: "loginPage" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
