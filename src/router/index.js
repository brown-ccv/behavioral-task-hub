import Vue from "vue";
import VueRouter from "vue-router";
import SearchPage from "../views/SearchPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
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
