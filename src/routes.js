import { createRouter, createWebHistory } from "vue-router";
import LoginPage from "./Views/LoginPage.vue";
import RegistrationPage from "./Views/Registration.vue";
import HomePage from "./Views/Site/Home.vue";
import DashboardPage from "./Views/Admin/Dashboard.vue";
import AgendarConsultaView from "./Views/Admin/AgendarConsulta.vue";
import AgendarVacinaView from "./Views/Admin/AgendarVacina.vue";
import ConsultasAgendadasView from "./Views/Admin/ConsultasAgendadas.vue";
import AgendarExame from "./Views/Admin/AgendarExame.vue";
import BuscarFarmacias from "./Views/Admin/BuscarFarmacias.vue";
import BuscarHospitais from "./Views/Admin/BuscarHospitais.vue";

const routes = [
  { path: "/", component: HomePage, name: "homePage" },
  { path: "/acesso", component: LoginPage, name: "loginPage" },
  { path: "/registro", component: RegistrationPage, name: "registrationPage" },
  { path: "/painel", component: DashboardPage, name: "DashboardPage" },
  { path: "/agendar-exame", component: AgendarExame, name: "AgendarExamePage" },
  {
    path: "/buscar-hospitais",
    component: BuscarHospitais,
    name: "BuscarHospitaisPage",
  },
  {
    path: "/buscar-farmacias",
    component: BuscarFarmacias,
    name: "BuscarFarmaciasPage",
  },
  {
    path: "/agendar-consulta",
    component: AgendarConsultaView,
    name: "AgendarConsulta",
  },
  {
    path: "/agendar-vacina",
    component: AgendarVacinaView,
    name: "AgendarVacina",
  },
  {
    path: "/consultas-agendadas",
    component: ConsultasAgendadasView,
    name: "ConsultasAgendadas",
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
