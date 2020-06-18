import { shallowMount } from "@vue/test-utils";
import BModal from "@/components/BModal.vue";

describe("BModal.vue", () => {
  it("check for the website href attribute", () => {
    const title = "Lab Info";
    const content = { wesite: "www.example.com" };
    const wrapper = shallowMount(BModal, {
      propsData: { title, content }
    });
    // const title_results =
    console.log(wrapper.find("#title").attributes());
    // expect(title_results).toMatch(title_expected);
  });
});
