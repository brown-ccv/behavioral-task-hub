<template>
  <div class="section">
    <!-- <h1>{{ $t('main.data') }}</h1> -->
    <h1>Home</h1>
    <div>{{ data }}</div>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";

export default {
  computed: {
    ...mapState(["data"])
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"])
  }
};
</script>
