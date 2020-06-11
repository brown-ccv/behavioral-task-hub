import { shallowMount } from "@vue/test-utils";
import Navbar from "@/components/Navbar.vue";
import { i18n } from "@/i18n-test";

describe("Navbar.vue", () => {
  it("renders clickable link for ccv", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const blinkccv = wrapper.find("#ccv");
    expect(blinkccv.attributes("event")).toBe("click");
  });

  it("renders clickable link for brown", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const blinkbrown = wrapper.find("#brown");
    expect(blinkbrown.attributes("event")).toBe("click");
  });

  it("renders ccv logo", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    expect(wrapper.find(".ccv-logo").exists()).toBe(true);
  });

  it("renders brown logo", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    expect(wrapper.find(".brown-logo").exists()).toBe(true);
  });

  it("check for ccv link", () => {
    const ccv = "https://ccv.brown.edu/";
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    expect(wrapper.find("#ccv").attributes("href")).toBe(ccv);
  });

  it("check for brown link", () => {
    const brown = "https://www.brown.edu/";
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    expect(wrapper.find("#brown").attributes("href")).toBe(brown);
  });

  it("check for route text rendering for Home", () => {
    const home = "HOME";
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(0).text()).toMatch(home);
  });

  it("check for route text rendering for About", () => {
    const about = "ABOUT";
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(1).text()).toMatch(about);
  });

  it("check for Home route", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(0).attributes("to")).toMatch("/");
  });

  it("check for About route", () => {
    const wrapper = shallowMount(Navbar, {
      i18n
    });
    const menuitems = wrapper.findAll(".nav-link");
    expect(menuitems.at(1).attributes("to")).toMatch("/about");
  });
});
