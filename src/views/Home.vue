<template>
  <div>
    <div class="hero-body d-flex">
      <div class="hero-left-text">
        <div class="hero-left-title">
          {{ $t("hero.title") }}
        </div>
        <div class="hero-left-subtext">
          {{ $t("hero.description") }}
        </div>
        <b-button size="lg" href="#Table" pill class="button">{{
          $t("hero.button-text")
        }}</b-button>
      </div>
      <div class="hero-image">
        <HeroImage />
      </div>
    </div>
    <item-card id="Table" />
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
    "item-card": Table,
    HeroImage
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
