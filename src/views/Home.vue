<script>
import TextContainer from "@/components/TextContainer.vue";
import BeehiveLogo from "@/assets/illustrations/beehive-logo.vue";

export default {
  name: "Home",
  components: {
    TextContainer,
    BeehiveLogo,
  },
  computed: {},
  methods: {}
}
</script>

<template>
  <main class="columns is-multiline">
    <section id="steps" class="has-background-primary column is-12 hero is-fullheight is-justify-content-center is-align-items-center">
      <div class="hero-body is-block-touch has-text-centered-touch columns">
        <article class="is-hidden-desktop pb-5">
          <BeehiveLogo />
        </article>
        <article class="column">
          <h1 class="is-size-1 has-text-weight-bold has-text-blue">Behavioral Task Hub</h1>
          <TextContainer title="A hub for researchers to share and find behavioral tasks" text-color=""
                         subtext="<p class='py-2'>The Behavioral Task Hub serves as a central and open registry of behavioral tasks, their provenance
                         and deployment details. This website was built by members and interns of CCV to support discovery, sharing,
                         reproducibility and collaboration across different labs at Brown and beyond. Adding the information about your
                         tasks is a simple process, see <a href='https://beehive.ccv.brown.edu/#/about/#steps'>steps</a> in the About page.</p>
                          <p class='py-2'>All behavioral tasks are welcome! If you would like to see additional information on this site,
                          <a href='https://github.com/brown-ccv/task-registry-data/issues/new/choose'>let us know.</a></p>" />
          <button class="button is-rounded is-link">Explore Below</button>
          <button class="button is-rounded is-link ml-3">Register Your Task</button>
        </article>
        <article class="is-hidden-touch column pl-6 ">
          <BeehiveLogo />
        </article>
      </div>
    </section>
    <section class="has-background-primary column is-12 hero is-fullheight is-justify-content-center is-align-items-center">

    </section>
  </main>
</template>
