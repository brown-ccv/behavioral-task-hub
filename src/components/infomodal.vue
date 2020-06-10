<template>
  <b-modal
    :id="infoModal.id"
    v-if="infoModal"
    :hide-footer="true"
    @hide="resetInfoModal"
  >
    <template v-slot:modal-title>
      {{ infoModal.title | capitalize }}
      <b-button
        v-if="infoModal.website"
        size="sm"
        variant="white"
        :href="infoModal.website"
        class="mr-1"
      >
        <b-iconstack font-scale="1.5">
          <b-icon stacked icon="circle-fill" style="color: #6c757d;"></b-icon>
          <b-icon stacked icon="link45deg" scale="0.8" variant="white"></b-icon>
        </b-iconstack>
      </b-button>
    </template>
    <div class="text-left">
      <span
        ><b class="text-warning">Institution: </b
        >{{ infoModal.institution }}</span
      >
      <br v-if="infoModal.principalInvestigator" />
      <span v-if="infoModal.principalInvestigator"
        ><b class="text-warning">Principal Investigator: </b
        >{{ infoModal.principalInvestigator }}</span
      >
      <br v-if="infoModal.developers" />
      <b v-if="infoModal.developers" class="text-warning">Developers: </b
      ><span v-for="(tag, index) in infoModal.developers" :key="index"
        ><br />{{ tag }}
      </span>
    </div>
  </b-modal>
</template>

<script>
import "@/styles/themes/default/components/_table.sass";
export default {
  data() {
    return {
      infoModal: {
        id: "info-modal",
        title: "",
        institution: "",
        principalInvestigator: "",
        developers: "",
        website: ""
      }
    };
  },
  methods: {
    info(item, index, button) {
      this.infoModal.title = item == null ? undefined : item.lab.name;
      this.infoModal.institution =
        item == null ? undefined : item.lab.institution;
      this.infoModal.principalInvestigator =
        item == null ? undefined : item.lab.principalInvestigator;
      this.infoModal.developers =
        item == null ? undefined : item.lab.developers;
      this.infoModal.website = item == null ? undefined : item.lab.website;
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.institution = "";
      this.infoModal.principalInvestigator = "";
      this.infoModal.developers = "";
      this.infoModal.website = "";
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
