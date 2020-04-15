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
    component: Home,
    meta: {
      title: "Behavioral Task Hub"
    }
  },
  {
    path: "/About",
    name: "About",
    component: About,
    meta: {
      title: "Behavioral Task Hub"
    }
  },
  {
    path: "/Table",
    name: "Table",
    component: Table,
    meta: {
      title: "Behavioral Task Hub"
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Default Website Title";
  next();
});
export default router;
