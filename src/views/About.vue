<template>
  <div>
    <div class="about-body">
      <div class="about-image1" id="explanation">
        <About1 />
      </div>
      <div class="about-right-text">
        <h1 class="about-right-title">
          {{ $t("about.explanation.title") }}
        </h1>
        <div class="about-right-subtext">
          {{ $t("about.explanation.description") }}
          <b-link
            id="about-steps"
            to="/about/#steps"
            v-scroll-to="'#steps'"
            class="link"
            >steps</b-link
          >.
          <div class="subtext">
            {{ $t("about.explanation.description2") }}
            <b-link
              id="issues-link"
              class="link"
              href="https://github.com/brown-ccv/task-registry-data/issues/new/choose"
              >let us know</b-link
            >.
          </div>
        </div>
      </div>
    </div>

    <div class="about-left-body" id="steps">
      <div class="about-left-text">
        <h1 class="about-left-title">
          {{ $t("about.register.title") }}
        </h1>
        <div
          class="about-left-subtext"
          v-html="$t('about.register.description')"
        ></div>
        <div class="about-left-subtext">
          {{ $t("about.register.description2") }}
        </div>
      </div>
      <div class="about-image1" id="registration">
        <About1 />
      </div>
    </div>

    <div class="about-body">
      <div class="about-image1" id="taskStarter">
        <About1 />
      </div>
      <div class="about-right-text">
        <h1 class="about-right-title">
          {{ $t("about.task-starter-description.title") }}
        </h1>
        <div
          class="about-right-subtext"
          id="task-starter-description"
          v-html="$t('about.task-starter-description.description')"
        ></div>
        <b-link
          href="https://github.com/brown-ccv/"
          id="ccv-github"
          class="link about-right-subtext"
          ><span class="fab fs-24 fa-github"></span> CCV GitHub</b-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import About1 from "@/assets/illustrations/about-1.vue";
export default {
  name: "About",
  components: {
    About1
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
