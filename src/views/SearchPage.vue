<template>
  <div class="">
    <div style="width:100%;height:500px;">
      <!-- <h1>Search Page</h1> -->
    </div>
    <item-card />
  </div>
</template>
<script>
// import Data from "./Data";
import Table from "./Table";
export default {
  name: "SearchPage",
  components: {
    "item-card": Table
  },
  computed: {},
  methods: {},
  mounted() {}
};
</script>
