import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

import i18n from "./i18n";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import Navbar from "@/components/Navbar";

var VueScrollTo = require("vue-scrollto");

Vue.use(VueScrollTo);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.config.productionTip = false;
Vue.component("Navbar", Navbar);

Vue.use(VueScrollTo, {
  container: "body",
  duration: 500,
  easing: "ease",
  offset: 0,
  force: true,
  cancelable: true,
  onStart: false,
  onDone: false,
  onCancel: false,
  x: false,
  y: true
});
new Vue({
  router,
  store,
  i18n,
  render: h => h(App)
}).$mount("#app");
