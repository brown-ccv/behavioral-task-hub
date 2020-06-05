import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
var VueScrollTo = require("vue-scrollto");

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
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
