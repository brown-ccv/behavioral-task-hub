import { shallowMount } from "@vue/test-utils";
import Home from "@/views/Home.vue";

describe("Home.vue", () => {
  it("renders title for home", () => {
    const wrapper = shallowMount(Home, {
      mocks: {
        $t: () => {}
      }
    });
    const title = wrapper.find(".hero-left-title");
    console.log(title.attributes());
  });
});
