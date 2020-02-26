<template>
  <div class="section">
    <!-- <b-table striped hover :items="data"></b-table> -->
    {{ data }}
  </div>
</template>
<script>
import GithubServices, { query, serialize } from "@/GithubServices";

export default {
  data() {
    return {
      data: []
    };
  },
  mounted() {
    GithubServices.getData(query("data"))
      .then(response => {
        this.data = serialize(response);
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>
