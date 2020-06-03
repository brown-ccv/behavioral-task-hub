import Vue from "vue";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
import {
  shallowMount as testShallow,
  mount as testMount
} from "@vue/test-utils";
import { i18n } from "@/i18n";

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

export function shallowMount(component, options) {
  return testShallow(component, { ...options, i18n });
}

export function mount(component, options) {
  return testMount(component, { ...options, i18n });
}
