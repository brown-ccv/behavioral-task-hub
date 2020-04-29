import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";

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
      title: "About"
    }
  }
];

const router = new VueRouter({
  mode: "hash",
  routes
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Behavioral Task Hub";
  next();
});
export default router;
