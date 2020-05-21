<template>
  <div>
    <div class="about-body">
      <div class="about-image1">
        <About1 />
      </div>
      <div class="about-right-text">
        <div class="about-right-title">
          {{ $t("about.explanation.title") }}
        </div>
        <div class="about-right-subtext">
          {{ $t("about.explanation.description") }}
          <b-link
            v-scroll-to="'#steps'"
            style="color: #000000; text-decoration: underline;"
            >steps</b-link
          >.
          {{ $t("about.explanation.description2") }}
        </div>
      </div>
    </div>

    <div class="about-left-body" id="steps">
      <div class="about-left-text">
        <div class="about-left-title">
          {{ $t("about.register.title") }}
        </div>
        <div
          class="about-left-subtext"
          v-html="$t('about.register.description')"
        ></div>
        <div class="about-left-subtext">
          {{ $t("about.register.description2") }}
        </div>
      </div>
      <div class="about-image1">
        <About1 />
      </div>
    </div>

    <div class="about-body">
      <div class="about-image1">
        <About1 />
      </div>
      <div class="about-right-text">
        <div class="about-right-title">
          {{ $t("about.task-starter-description.title") }}
        </div>
        <div
          class="about-right-subtext"
          v-html="$t('about.task-starter-description.description')"
        ></div>
        <b-link
          :href="$t('about.task-starter-description.ccvGithub')"
          class="link about-right-subtext"
          ><span class="fab fs-24 fa-github"></span> CCV GitHub</b-link
        >
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/themes/default/components/_about.sass";
import About1 from "@/assets/illustrations/about-1.svg";
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
