import { shallowMount } from "@vue/test-utils";
import About from "@/views/About.vue";
import { i18n } from "@/i18n-test";

describe("About.vue", () => {
  it("renders title for about explanation section", () => {
    const title_expected = "What is Behavioral Task Hub";
    const wrapper = shallowMount(About, {
      i18n
    });
    const title_results = wrapper.find(".about-right-title").text();
    expect(title_results).toMatch(title_expected);
  });

  it("renders description for about", () => {
    const description_expected =
      "The Behavioral Task Hub serves as a central and open registry of behavioral tasks, their provenance and deployment details. This website was built by members and interns of CCV to support discovery, sharing, reproducibility and collaboration across different labs at Brown and beyond. Adding the information about your tasks is a simple process, see ";
    const wrapper = shallowMount(About, {
      i18n
    });
    const description_results = wrapper.find(".about-right-subtext").text();
    expect(description_results).toMatch(description_expected);
  });

  // it("renders link for steps on task registration to section below in About", () => {
  //   const wrapper = shallowMount(About, {
  //     i18n
  //   });
  //   const result = wrapper.find("#about-steps");
  //   // expect(result.attributes("to")).toBe("/about/#steps");
  // });

  it("renders subtext for explanation on About", () => {
    const subtext =
      "All behavioral tasks are welcome! If you would like to see additional information on this site, \n          let us know.";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find(".subtext");
    expect(result.text()).toBe(subtext);
  });

  it("renders link to issues for let us know", () => {
    const href =
      "https://github.com/brown-ccv/task-registry-data/issues/new/choose";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find("#issues-link");
    expect(result.attributes("href")).toBe(href);
  });

  it("renders svg for explanation - first about section", () => {
    const wrapper = shallowMount(About, {
      i18n
    });
    expect(wrapper.find("#explanation").exists()).toBe(true);
  });

  it("renders title for registration", () => {
    const title = "How to register your task";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find(".about-left-title");
    expect(result.text()).toBe(title);
  });

  it("renders description for registration as html", () => {
    const description =
      '<div class="about-left-subtext">The task registry data is hosted at <a href="https://github.com/brown-ccv/task-registry-data" style="color: #ffffff; text-decoration: underline;">CCV GitHub</a>. To add a new task or request a fix to an existing one, navigate to the issues tab in the <a href="https://github.com/brown-ccv/task-registry-data" style="color: #ffffff; text-decoration: underline;">github repository</a>, select <i>new issue</i> and choose the template to open a new task for adding a new task to the hub, or <i>file a bug report</i> for any other issue/request.</div>';
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find(".about-left-subtext");
    expect(result.html()).toBe(description);
  });

  it("renders second paragraph description for registration", () => {
    const description =
      "When you complete the new task request, your issue will be automatically processed and a pull request to the repository created.  You can review it if you’d like! If there is a problem processing your request, a bot will comment on your issue and someone at CCV will help resolve the issue.";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.findAll(".about-left-subtext").at(1);
    expect(result.text()).toBe(description);
  });

  it("renders svg for registration - second about section", () => {
    const wrapper = shallowMount(About, {
      i18n
    });
    expect(wrapper.find("#explanation").exists()).toBe(true);
  });

  it("renders title for task starter", () => {
    const title = "Task Starter";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.findAll(".about-right-title").at(1);
    expect(result.text()).toBe(title);
  });

  it("renders description for task starter as html", () => {
    const description =
      '<div id="task-starter-description" class="about-right-subtext">Looking to create a new task? Or migrate a task so that it can be deployed on any desktop platform or the browser? Check out CCV’s <a href="https://github.com/brown-ccv/neuro-task-starter" style="color: #000000; text-decoration: underline;">Neuro Task Starter</a> It is a sample task that includes all of the build steps to create an electron app for Windows, Mac, and Linux, or to deploy to the web. Additionally, it can connect to EEG trigger boxes.</div>';
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find("#task-starter-description");
    expect(result.html()).toBe(description);
  });

  it("renders ccv github link", () => {
    const ccv_github = "https://github.com/brown-ccv/";
    const wrapper = shallowMount(About, {
      i18n
    });
    const result = wrapper.find("#ccv-github");
    expect(result.attributes("href")).toBe(ccv_github);
  });

  it("renders svg for task starter - third about section", () => {
    const wrapper = shallowMount(About, {
      i18n
    });
    expect(wrapper.find("#taskStarter").exists()).toBe(true);
  });
});
