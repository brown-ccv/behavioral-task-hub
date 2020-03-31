<template>
  <div class="">
    <div style="width:100%;height:500px;"></div>
    <item-card />
  </div>
</template>
<script>
// import Data from "./Data";
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
