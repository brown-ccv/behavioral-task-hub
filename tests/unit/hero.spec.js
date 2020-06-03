import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";
import { i18n } from "@/i18n-test";

describe("Home.vue", () => {
  it("renders title for home", () => {
    const title_expected = "Behavioral Task Hub";
    const wrapper = shallowMount(Home, {
      i18n
    });
    const title_results = wrapper.find(".hero-left-title").text();
    expect(title_results).toMatch(title_expected);
  });

  it("renders heading for home", () => {
    const heading_expected =
      "A hub for researchers to share and find behavioral tasks";
    const wrapper = shallowMount(Home, {
      i18n
    });
    const heading_results = wrapper.find(".hero-left-heading").text();
    expect(heading_results).toMatch(heading_expected);
  });

  it("renders description for home", () => {
    const description_expected =
      "The Behavioral Task Hub serves as a central and open registry of behavioral tasks, their provenance and deployment details. This website was built by members and interns of CCV to support discovery, sharing, reproducibility and collaboration across different labs at Brown and beyond. Adding the information about your tasks is a simple process, see ";
    const wrapper = shallowMount(Home, {
      i18n
    });
    const description_results = wrapper.find(".hero-left-subtext").text();
    expect(description_results).toMatch(description_expected);
  });

  it("renders link for steps on task registration to About", () => {
    const wrapper = shallowMount(Home, {
      i18n
    });
    const result = wrapper.find("#steps");
    expect(result.attributes("to")).toBe("/About");
  });

  it("renders subtext as html", () => {
    const subtext =
      "All behavioral tasks are welcome! If you would like to see additional information on this site, \n          let us know.";
    const wrapper = shallowMount(Home, {
      i18n
    });
    const result = wrapper.find(".subtext");
    expect(result.text()).toBe(subtext);
  });

  it("renders link to issues", () => {
    const href =
      "https://github.com/brown-ccv/task-registry-data/issues/new/choose";
    const wrapper = shallowMount(Home, {
      i18n
    });
    const result = wrapper.find("#issues-link");
    expect(result.attributes("href")).toBe(href);
  });

  it("renders svg for hero", () => {
    const wrapper = shallowMount(Home, {
      i18n
    });
    expect(wrapper.find("#hero-image").exists()).toBe(true);
  });

  it("renders text for button", () => {
    const button_text = "Explore below!";
    const wrapper = shallowMount(Home, {
      i18n
    });
    expect(wrapper.find(".button").text()).toBe(button_text);
  });
});
