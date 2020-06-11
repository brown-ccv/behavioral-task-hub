<template>
  <div class="hero-body d-flex flex-column">
    <div class="hero-content">
      <div class="hero-left-text">
        <div class="hero-left-title">
          {{ $t("hero.title") }}
        </div>
        <div class="hero-left-heading">
          {{ $t("hero.heading") }}
        </div>
        <div class="hero-left-subtext">
          {{ $t("hero.description") }}
          <b-link id="about-steps" to="/about/#steps" class="link">steps</b-link
          >.
          <div class="subtext">
            {{ $t("hero.description2") }}
            <b-link
              id="issues-link"
              class="link"
              href="https://github.com/brown-ccv/task-registry-data/issues/new/choose"
              >let us know</b-link
            >.
          </div>
        </div>
        <b-button
          size="lg"
          href="#"
          v-scroll-to="'#Table'"
          pill
          class="button btn shadow-none"
          variant="russett"
          >{{ $t("hero.button-text") }}</b-button
        >
      </div>
      <div class="hero-image">
        <HeroImage id="hero-image" />
      </div>
    </div>
    <div>
      <Table id="Table" />
    </div>
  </div>
</template>
<script>
import "@/styles/themes/default/components/_hero.sass";
import HeroImage from "@/assets/illustrations/beehive-logo.vue";
import Table from "./Table";
export default {
  name: "Home",
  components: {
    Table,
    HeroImage
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
