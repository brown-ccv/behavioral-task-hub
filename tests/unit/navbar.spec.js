import { shallowMount, createLocalVue } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import CCVLogo from "@/assets/illustrations/ccv-logo.svg";
import BrownLogo from "@/assets/illustrations/brown-logo.svg";
import BootstrapVue from "bootstrap-vue";

const localVue = createLocalVue();
localVue.use(BootstrapVue);

describe("Navbar.vue", () => {
  it("renders the two clickable svg links", () => {
    const name = "nav items";
    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $t: () => {}
      },
      stubs: [CCVLogo, BrownLogo],
      propsData: { name }
    });
    const links = wrapper.findAll("b-link");
    expect(links.length).toBe(2);
    links.trigger("click");
  });

  it("renders the two clickable route links", () => {
    const name = "nav items";
    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $t: () => {}
      },
      stubs: [CCVLogo, BrownLogo],
      propsData: { name }
    });
    const menuitems = wrapper.findAll("b-nav-item");
    expect(menuitems.length).toBe(2);
    menuitems.trigger("click");
  });

  it("check for route text rendering for Home", () => {
    const name = "nav items";
    const home = "HOME";
    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $t: () => {}
      },
      stubs: [CCVLogo, BrownLogo],
      propsData: { name }
    });
    const menuitems = wrapper.findAll("b-nav-item");
    expect(menuitems.at(0).text()).toMatch(home);
  });

  it("check for route text rendering for Home", () => {
    const name = "nav items";
    const about = "ABOUT";
    const wrapper = shallowMount(Navbar, {
      localVue,
      mocks: {
        $t: () => {}
      },
      propsData: { name }
    });
    const menuitems = wrapper.findAll("b-nav-item");
    expect(menuitems.at(1).text()).toMatch(about);
  });
});
