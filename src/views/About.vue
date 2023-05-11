<script>
import About1 from "@/assets/illustrations/about-1.vue";
import TextContainer from "@/components/TextContainer.vue";

export default {
  name: "About",
  components: {
    TextContainer,
    About1,
  },
  computed: {},
  methods: {}
};
</script>

<template>
  <div class="about columns is-multiline">
    <section id="explanation" class="has-background-primary column is-12 hero is-fullheight is-justify-content-center is-align-items-center">
      <div class="hero-body is-block-touch has-text-centered-touch">
        <article>
          <About1 />
        </article>
        <article class="container">
          <TextContainer title="What is Behavioral Task Hub" text-color=""
                         subtext="<p class='py-2'>The Behavioral Task Hub serves as a central and open registry of behavioral tasks, their provenance
                         and deployment details. This website was built by members and interns of CCV to support discovery, sharing,
                         reproducibility and collaboration across different labs at Brown and beyond. Adding the information about your
                         tasks is a simple process, see <a href='#steps'>steps.</a></p>
                          <p class='py-2'>All behavioral tasks are welcome! If you would like to see additional information on this site,
                          <a href='https://github.com/brown-ccv/task-registry-data/issues/new/choose'>let us know.</a></p>" />
        </article>
      </div>
    </section>
    <section id="steps" class="has-background-link column is-12 hero is-fullheight is-justify-content-center is-align-items-center">
      <div class="hero-body is-block-touch has-text-centered-touch">
        <article class="container">
          <TextContainer title="How to register your task" text-color="has-text-light"
                         subtext="<p class='py-2'>The task registry data is hosted at <a href='https://github.com/brown-ccv/task-registry-data'
                         class='has-text-link-light'>CCV GitHub</a>.  To add a new task or request a fix to an existing one,
                         navigate to the issues tab in the <a href='https://github.com/brown-ccv/task-registry-data'
                         class='has-text-link-light'>github repository</a>, select <i>new issue</i> and choose the template
                         to open a new task for adding a new task to the hub, or <i>file a bug report</i> for any other issue/request.</p>
                         <p class='py-2'>When you complete the new task request, your issue will be automatically processed and a pull
                         request to the repository created.  You can review it if you’d like! If there is a problem processing
                         your request, a bot will comment on your issue and someone at CCV will help resolve the issue.</p>" />
        </article>
        <article>
          <About1 />
        </article>
      </div>
    </section>
    <section id="registration" class="has-background-primary column is-12 hero is-fullheight is-justify-content-center is-align-items-center">
      <div class="hero-body is-block-touch has-text-centered-touch">
        <article>
          <About1 />
        </article>
        <article class="container">
          <TextContainer title="Honeycomb" text-color=""
                         subtext="Looking to create a new task? Or migrate a task so that it can be deployed on any desktop platform
                         or the browser? Check out CCV’s <a href='https://github.com/brown-ccv/honeycomb'> honeycomb</a>,
                         a sample task that includes all of the build steps to create an electron app for Windows, Mac, and Linux,
                         or to deploy to the web. Additionally, it can connect to EEG trigger boxes." />
          <a href="https://github.com/brown-ccv/" class="subtitle"><span class="fab fs-24 fa-github"></span> CCV GitHub</a>
        </article>
      </div>
    </section>
  </div>
</template>
