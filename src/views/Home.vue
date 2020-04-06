<template>
  <div>
    <div class="hero-body">
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
    </div>
    <item-card id="Table" />
  </div>
</template>
<script>
// import Data from "./Data";
import "@/styles/themes/default/components/_hero.sass";
import Table from "./Table";
export default {
  name: "Home",
  components: {
    "item-card": Table
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
