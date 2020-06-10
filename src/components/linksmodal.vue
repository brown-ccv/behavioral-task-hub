<template>
  <b-modal
    :id="linksModal.id"
    v-if="linksModal"
    :title="linksModal.title | capitalize"
    :hide-footer="true"
    @hide="resetLinksModal"
  >
    <div class="text-left">
      <span v-if="linksModal.deployment"
        ><b class="text-warning">Website: </b
        ><b-link :href="linksModal.deployment">{{
          linksModal.deployment
        }}</b-link></span
      >
      <br v-if="linksModal.deployment" />
      <span
        ><b class="text-warning">Source Code: </b
        ><b-link :href="linksModal.code">{{ linksModal.code }}</b-link></span
      >
      <br v-if="linksModal.publication" />
      <span v-if="linksModal.publication"
        ><b class="text-warning">Publication: </b
        ><b-link :href="linksModal.publication">{{
          linksModal.publication
        }}</b-link></span
      >
    </div>
  </b-modal>
</template>

<script>
import "@/styles/themes/default/components/_table.sass";
export default {
  data() {
    return {
      linksModal: {
        id: "links-modal",
        title: "",
        deployment: "",
        code: "",
        publication: ""
      }
    };
  },
  methods: {
    links(item, index, button) {
      this.linksModal.title = item == null ? undefined : item.taskName;
      this.linksModal.deployment =
        item == null ? undefined : item.links.deployment;
      this.linksModal.code = item == null ? undefined : item.links.sourceCode;
      this.linksModal.publication = item == null ? undefined : item.publication;
      this.$root.$emit("bv::show::modal", this.linksModal.id, button);
    },
    resetLinksModal() {
      this.linksModal.title = "";
      this.linksModal.deployment = "";
      this.linksModal.code = "";
      this.linksModal.publication = "";
    }
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    }
  }
};
</script>
