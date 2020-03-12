import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Navbar from "@/components/Navbar";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.component("Navbar", Navbar);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
