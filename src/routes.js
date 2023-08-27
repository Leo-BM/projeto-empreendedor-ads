import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./Views/LoginPage.vue";
import RegistrationPage from "./Views/Registration.vue";
import HomeView from "./Views/Site/Home.vue";
import DashboardView from "./Views/Admin/Dashboard.vue";

const routes = [
  { path: "/", component: HomeView, name: "homePage" },
  { path: "/acesso", component: LoginPage, name: "loginPage" },
  { path: "/registro", component: RegistrationPage, name: "registrationPage" },
  { path: "/painel", component: DashboardView, name: "DashboardView" },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
