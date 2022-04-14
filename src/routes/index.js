import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Single from "../pages/Single.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/pokemon/:name", component: Single },
];

//TO DO: make routes dynamic based on pokemon ID or name

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
