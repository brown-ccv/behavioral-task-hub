import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "../views/SearchPage.vue";
import About from "../views/About.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "About",
    component: About
  },
  {
    path: "/Search",
    name: "SearchPage",
    component: SearchPage
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
