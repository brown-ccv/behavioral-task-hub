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
  mode: "hash",
  base: "",
  routes
});

export default router;
