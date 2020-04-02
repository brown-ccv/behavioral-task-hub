<template>
  <div>
    <div class="hero-body">
      <div class="hero-left-text">
        <div class="hero-left-title">
          Search, Filter on tags.
        </div>
        <div class="hero-left-subtext">
          Every behavioral task repository comes with a search bar and advanced
          filter management.
        </div>
        <b-button size="lg" href="#Table" pill class="button"
          >Begin Search</b-button
        >
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
