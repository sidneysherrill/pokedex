import { createRouter, createWebHashHistory } from "vue-router";
import Index from "../pages/Index.vue";
import Single from "../pages/Single.vue";
import Favorites from "../pages/Favorites.vue";
import About from "../pages/About.vue";
import Game from "../pages/Game.vue";

const routes = [
  { path: "/", component: Index },
  { path: "/pokemon/:id", component: Single, props: true },
  { path: "/favorites", component: Favorites },
  { path: "/about", component: About },
  { path: "/game", component: Game },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
