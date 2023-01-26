import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/LoginView.vue";
import Main from "../views/MainView.vue";
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "login",
      component: Login,
    },
    {
      path: "/main",
      name: "main",
      component: Main,
    },
  ],
});

export default router;
