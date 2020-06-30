import { shallowMount } from "@vue/test-utils";
import BModal from "@/components/BModal.vue";

describe("BModal.vue", () => {
  it("check for content rendering", () => {
    const expected = "Website:  www.example.com";
    const title = "Lab Info";
    const content = { website: "www.example.com" };
    const wrapper = shallowMount(BModal, {
      propsData: { title, content }
    });
    const results = wrapper.find(".modal").text();
    expect(results).toMatch(expected);
  });

  it("check for links in content rendering as a tag with href", () => {
    const title = "Lab Info";
    const content = { website: "www.example.com" };
    const wrapper = shallowMount(BModal, {
      propsData: { title, content }
    });
    const results = wrapper.find("#url").attributes("href");
    expect(results).toMatch(content.website);
  });

  it("check for website href rendering in title", () => {
    const title = "Lab Info";
    const content = { website: "www.example.com" };
    const wrapper = shallowMount(BModal, {
      propsData: { title, content }
    });
    const results = wrapper.find("#website").attributes("href");
    expect(results).toMatch(content.website);
  });

  it("check for the rendering of title text", () => {
    const title = "Lab Info";
    const content = { website: "www.example.com" };
    const wrapper = shallowMount(BModal, {
      propsData: { title, content }
    });
    const results = wrapper.find("#title").text();
    expect(results).toMatch(title);
  });
});
