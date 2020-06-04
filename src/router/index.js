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
    path: "/about",
    name: "About",
    component: About,
    meta: {
      title: "About"
    }
  }
];
const scrollBehavior = function(to) {
  if (to.hash) {
    return { selector: to.hash };
  } else {
    return { x: 0, y: 0 };
  }
};
const router = new VueRouter({
  mode: "hash",
  routes,
  scrollBehavior
});

router.beforeEach((to, from, next) => {
  document.title = to.meta.title || "Behavioral Task Hub";
  next();
});
export default router;
