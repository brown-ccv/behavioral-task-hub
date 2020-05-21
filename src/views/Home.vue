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
          <b-link
            to="/About"
            style="color: #000000; text-decoration: underline;"
            >steps</b-link
          >.
          {{ $t("hero.description2") }}
        </div>
        <b-button
          size="lg"
          href="#"
          v-scroll-to="'#Table'"
          pill
          class="button"
          >{{ $t("hero.button-text") }}</b-button
        >
      </div>
      <div class="hero-image">
        <HeroImage />
      </div>
    </div>
    <div>
      <Table id="Table" />
    </div>
  </div>
</template>
<script>
// import Data from "./Data";
import "@/styles/themes/default/components/_hero.sass";
import HeroImage from "@/assets/illustrations/hero-image.svg";
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
