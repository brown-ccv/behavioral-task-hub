import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";

describe("Navbar.vue", () => {
  it("renders clickable link for ccv", () => {
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    const blinkccv = wrapper.find("#ccv");
    expect(blinkccv.attributes("event")).toBe("click");
  });

  it("renders clickable link for brown", () => {
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    const blinkbrown = wrapper.find("#brown");
    expect(blinkbrown.attributes("event")).toBe("click");
  });

  it("renders ccv logo", () => {
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    expect(wrapper.find(".ccv-logo").exists()).toBe(true);
  });

  it("renders brown logo", () => {
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    expect(wrapper.find(".brown-logo").exists()).toBe(true);
  });

  it("check for route text rendering for Home", () => {
    const home = "HOME";
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(0).text()).toMatch(home);
  });

  it("check for route text rendering for Home", () => {
    const about = "ABOUT";
    const wrapper = shallowMount(Navbar, {
      mocks: {
        $t: () => {}
      }
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(1).text()).toMatch(about);
  });
});
