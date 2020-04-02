import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Table from "../views/Table.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/About",
    name: "About",
    component: About
  },
  {
    path: "/Table",
    name: "Table",
    component: Table
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

export default router;
