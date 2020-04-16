<template>
  <b-container fluid class="table-body d-flex">
    <div class="control-sidebar">
      <div class="table-controls" v-bind:class="{ collapsed: navCollapsed }">
        <div class="sidebar-control">
          <div class="sidebar-control-inner">
            <span v-show="!navCollapsed" class="control-title">{{
              $t("sidebar.title")
            }}</span>
            <button class="control-button" @click="toggleControl">
              <b-icon icon="gear" aria-hidden="true" font-scale="1.8"></b-icon>
            </button>
          </div>
        </div>
        <b-icon-search
          class="collapsed-icon"
          v-show="navCollapsed"
          aria-hidden="true"
          variant="white"
          font-scale="2"
        ></b-icon-search>
        <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label for="filterInput" class="label">{{
                $t("sidebar.filters.search")
              }}</label>
              <b-input-group size="sm">
                <b-form-input
                  v-model="filter"
                  type="search"
                  id="filterInput"
                ></b-form-input>
                <b-icon-search
                  class="search-icon-open"
                  aria-hidden="true"
                  variant="white"
                  font-scale="2"
                ></b-icon-search>
              </b-input-group>
            </div>
          </b-form-group>
        </div>
        <b-icon
          class="collapsed-icon"
          v-show="navCollapsed"
          icon="filter"
          aria-hidden="true"
          font-scale="1.8"
        ></b-icon>
        <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label class="label" for="platform">{{
                $t("sidebar.filters.platform")
              }}</label>
              <multiselect
                id="platform"
                v-model="valuePlatform"
                :options="platforms"
                :multiple="true"
                selectLabel=""
                selectGroupLabel="Select group"
                deselectGroupLabel="Remove group"
                deselectLabel="Remove"
                :option-height="40"
                group-values="options"
                group-label="platform"
                :group-select="true"
                placeholder=""
                label="name"
                track-by="name"
                :taggable="true"
                @input="updateTable"
                @remove="updateTable"
              >
              </multiselect>
            </div>
          </b-form-group>
        </div>

        <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label class="label" for="features">{{
                $t("sidebar.filters.features")
              }}</label>
              <multiselect
                id="features"
                v-model="valueFeature"
                :options="features"
                :multiple="true"
                selectLabel=""
                selectGroupLabel=""
                deselectGroupLabel="Remove group"
                deselectLabel="Remove"
                :option-height="20"
                placeholder=""
                label="name"
                track-by="name"
                :taggable="true"
                @input="updateTable"
                @remove="updateTable"
              >
              </multiselect>
            </div>
          </b-form-group>
        </div>
        <b-icon
          class="collapsed-icon"
          v-show="navCollapsed"
          icon="tag"
          aria-hidden="true"
          font-scale="1.8"
        ></b-icon>
        <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label class="label" for="tags">{{
                $t("sidebar.filters.tags")
              }}</label>
              <multiselect
                id="tags"
                v-model="valueTags"
                :options="tagsvalues"
                :multiple="true"
                selectLabel=""
                selectGroupLabel=""
                deselectGroupLabel="Remove group"
                deselectLabel="Remove"
                :option-height="20"
                placeholder=""
                label="name"
                track-by="name"
                :taggable="true"
                @input="updateTable"
                @remove="updateTable"
              >
              </multiselect>
            </div>
          </b-form-group>
        </div>
        <b-icon
          class="collapsed-icon"
          v-show="navCollapsed"
          icon="gear"
          aria-hidden="true"
          font-scale="1.8"
        ></b-icon>
        <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label for="institution" class="label">{{
                $t("sidebar.filters.institution")
              }}</label>
              <multiselect
                id="institution"
                v-model="valueInstitutions"
                :options="institutions"
                :option-height="20"
                placeholder=""
                selectLabel="Select"
                deselectLabel="Remove"
                @input="updateTable"
                @remove="updateTable"
              >
              </multiselect>
            </div>
          </b-form-group>
        </div>

        <!-- <div class="table-control-items" v-show="!navCollapsed">
          <b-form-group>
            <div class="text-left">
              <label for="perPageSelect" class="label">{{
                $t("sidebar.filters.perPage")
              }}</label>
              <b-form-select
                v-model="perPage"
                id="perPageSelect"
                size="sm"
                :options="pageOptions"
              ></b-form-select>
            </div>
          </b-form-group>
        </div> -->
      </div>
    </div>
    <b-col>
      <b-table
        show-empty
        responsive
        :items="data.filteredData"
        :small="true"
        :borderless="true"
        :striped="true"
        :hover="true"
        :fields="fields"
        :current-page="currentPage"
        :per-page="perPage"
        :filter="filter"
        :filterIncludedFields="filterOn"
        :sort-by.sync="sortBy"
        :sort-desc.sync="sortDesc"
        :sort-direction="sortDirection"
        @filtered="onFiltered"
      >
        <template v-slot:empty="">
          <h4 class="emptytext">No tasks found</h4>
        </template>
        <template v-slot:emptyfiltered="">
          <h4 class="emptytext">No tasks found</h4>
        </template>
        <template v-slot:head()="data">
          <span class="table-heading">{{ data.label }}</span>
        </template>
        <template v-slot:cell(tags)="tagsformat">
          <b-badge
            v-for="tag in tagsformat.unformatted"
            :key="tag"
            pill
            variant="info"
            >{{ tag }}</b-badge
          >
        </template>
        <template v-slot:cell(taskName)="taskName">
          <strong class="text-info font-weight-bolder">{{
            taskName.value | capitalize
          }}</strong>
        </template>

        <template v-slot:cell(platform)="platform">
          <b-badge
            v-for="tag in platform.value"
            :key="tag"
            pill
            :variant="tags[tag]"
            >{{ tag }}<br
          /></b-badge>
        </template>

        <template v-slot:cell(features)="features">
          <b-badge v-for="tag in features.value" :key="tag" pill variant="light"
            >{{ tag }}<br />
          </b-badge>
        </template>

        <template v-slot:cell(links)="links">
          <span v-for="(tag, index) in links.value" :key="index">
            <b-button
              v-if="index == 'deployment'"
              :href="tag"
              v-b-tooltip.focus
              title="Deployment"
              variant="none"
            >
              <b-iconstack font-scale="1.5">
                <b-icon
                  stacked
                  icon="circle-fill"
                  style="color: #6c757d;"
                ></b-icon>
                <b-icon
                  stacked
                  icon="link45deg"
                  scale="0.8"
                  variant="white"
                ></b-icon> </b-iconstack
            ></b-button>
            <b-button
              v-if="index == 'sourceCode'"
              :href="tag"
              v-b-tooltip.focus
              title="Source Code"
              variant="none"
              ><b-iconstack font-scale="1.5">
                <b-icon
                  stacked
                  icon="circle-fill"
                  style="color: #6c757d;"
                ></b-icon>
                <b-icon
                  stacked
                  icon="code-slash"
                  scale="0.6"
                  variant="white"
                ></b-icon> </b-iconstack
            ></b-button>
          </span>
        </template>

        <template v-slot:cell(publication)="publication">
          <span v-for="(tag, index) in publication.value" :key="index">
            <span v-if="index == 'doi'">{{ tag }}</span>
            <b-link v-if="index == 'url'" :href="tag"
              ><b-icon-box-arrow-up-right
                font-scale="1"
              ></b-icon-box-arrow-up-right
            ></b-link>
          </span>
        </template>

        <template v-slot:cell(framework)="framework">
          <!-- {{ publication }} -->
          <span v-for="(tag, index) in framework.value" :key="index">
            <span v-if="index == 'library'">Library: {{ tag }}</span
            ><br />
            <span v-if="index == 'language'">Language: {{ tag }}</span>
          </span>
        </template>

        <template v-slot:cell(lab)="labs">
          <!-- {{ publication }} -->
          {{ labs.value | capitalize }}
          <b-button
            size="sm"
            variant="white"
            @click="info(labs.item, labs.index, $event.target)"
            class="mr-1"
          >
            <b-icon-info-circle-fill
              font-scale="1.5"
              style="color: #6c757d;"
            ></b-icon-info-circle-fill>
          </b-button>
        </template>

        <template v-slot:row-details="row">
          <b-card>
            <ul>
              <li v-for="(value, key) in row.item.lab" :key="key">
                {{ key }}: {{ value }}
              </li>
            </ul>
          </b-card>
        </template>
      </b-table>
      <b-modal
        :id="infoModal.id"
        v-if="infoModal"
        :title="infoModal.title | capitalize"
        ok-only
        @hide="resetInfoModal"
      >
        <div class="text-left">
          <span
            ><b class="text-warning">Institution: </b
            >{{ infoModal.institution }}</span
          >
          <br />
          <span
            ><b class="text-warning">Principal Investigator: </b
            >{{ infoModal.principalInvestigator }}</span
          >
          <br />
          <b class="text-warning">Developers: </b
          ><span v-for="(tag, index) in infoModal.developers" :key="index"
            >{{ tag }}<br />
          </span>
          <b-link :href="infoModal.website"
            ><b-icon-box-arrow-up-right
              font-scale="1.5"
            ></b-icon-box-arrow-up-right
          ></b-link>
        </div>
      </b-modal>
      <b-pagination
        class="pagination"
        v-model="currentPage"
        :total-rows="data.totalRows"
        :per-page="perPage"
        align="center"
        pills
        size="md"
      ></b-pagination>
    </b-col>
  </b-container>
</template>

<script>
import "@/styles/themes/default/components/_table.sass";
import Multiselect from "vue-multiselect";
import { mapActions, mapState } from "vuex";
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      navCollapsed: true,
      valuePlatform: [],
      valueFeature: [],
      valueTags: [],
      valueInstitutions: "",
      platforms: [
        {
          platform: "Desktop",
          options: [{ name: "windows" }, { name: "linux" }, { name: "mac" }]
        },
        {
          platform: "Mobile",
          options: [{ name: "ios" }, { name: "android" }]
        }
      ],
      features: [
        { name: "browser" },
        { name: "electron" },
        { name: "docker" },
        { name: "eegTrigger" },
        { name: "mturk" }
      ],
      tags: {
        windows: "success",
        linux: "success",
        mac: "success",
        ios: "primary",
        android: "primary",
        browser: "light",
        eegTrigger: "light",
        mturk: "light",
        docker: "light",
        electron: "light"
      },
      fields: [
        {
          key: "taskName",
          label: this.$t("fields.taskName"),
          sortable: true,
          sortDirection: "desc",
          class: "text-left"
        },
        {
          key: "links",
          label: this.$t("fields.links"),
          class: "text-left"
        },
        {
          key: "framework",
          label: this.$t("fields.framework"),
          class: "text-left"
        },
        {
          key: "lab",
          label: this.$t("fields.lab"),
          sortable: true,
          formatter: value => {
            return value["name"].split(" ")[0];
          },
          sortByFormatted: true,
          class: "text-left"
        },
        {
          key: "publication",
          label: this.$t("fields.publication"),
          class: "text-left"
        },
        {
          key: "platform",
          label: this.$t("fields.platform"),
          class: "text-left",
          formatter: value => {
            var formatted = [];
            for (var i in value) {
              for (var j in value[i]) {
                if (value[i][j] == true) formatted.push(j);
              }
            }
            return formatted;
          },
          sortByFormatted: true,
          filterByFormatted: true
        },
        {
          key: "features",
          label: this.$t("fields.features"),
          class: "text-left",
          formatter: value => {
            var formatted = [];
            for (var i in value) {
              if (value[i] == true) {
                formatted.push(i);
              }
            }
            return formatted;
          },
          sortByFormatted: true,
          filterByFormatted: true
        },
        {
          key: "tags",
          label: this.$t("fields.tags"),
          formatter: value => {
            var formatted = "";
            for (var i = 0; i < value.length; i++) {
              formatted += String(value[i]) + `\n`;
            }
            return formatted;
          },
          sortByFormatted: true,
          filterByFormatted: true,
          class: "text-left"
        }
        //   { key: 'actions', label: 'Actions' }
      ],
      currentPage: 1,
      perPage: 10,
      pageOptions: [10, 15, 20],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
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
  computed: {
    ...mapState(["data"]),
    tagsvalues() {
      let unique = new Set();
      for (var d in this.data.data) {
        for (var tag in this.data.data[d]["tags"]) {
          unique.add(this.data.data[d]["tags"][tag]);
        }
      }
      let tagvalues = [];
      var uni = Array.from(unique);
      for (var t in uni) {
        tagvalues.push({ name: uni[t] });
      }
      return tagvalues;
    },
    institutions() {
      let unique = new Set();
      for (var d in this.data.data) {
        unique.add(this.data.data[d]["lab"]["institution"]);
      }
      let institutions = [];
      var uni = Array.from(unique);
      for (var t in uni) {
        institutions.push(uni[t]);
      }
      return institutions;
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"]),
    toggleControl() {
      this.navCollapsed = !this.navCollapsed;
    },
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
    },
    onFiltered() {
      // Trigger pagination to update the number of buttons/pages due to filtering
      // this.data.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    updateTable() {
      let filterData = [];

      if (
        this.valuePlatform.length > 0 ||
        this.valueTags.length > 0 ||
        this.valueFeature.length > 0 ||
        this.valueInstitutions != ""
      ) {
        for (var d in this.data.data) {
          var obj = this.data.data[d];

          let tagss = [];
          var valuetags = obj.tags;
          for (var val in valuetags) {
            tagss.push(valuetags[val]);
          }

          let institution = obj.lab.institution;

          let platformss = [];
          var valueplatform = obj.platform;
          for (var v in valueplatform) {
            for (var j in valueplatform[v]) {
              if (valueplatform[v][j] == true) platformss.push(j);
            }
          }
          let featuress = [];
          var valuefeature = obj.features;
          for (var vals in valuefeature) {
            if (valuefeature[vals] == true) featuress.push(vals);
          }
          let filtertags = [];
          for (var t in this.valueTags) {
            filtertags.push(this.valueTags[t]["name"]);
          }

          let filterinstitutions = this.valueInstitutions;

          let filterplatform = [];
          for (var p in this.valuePlatform) {
            filterplatform.push(this.valuePlatform[p]["name"]);
          }
          let filterfeature = [];
          for (var f in this.valueFeature) {
            filterfeature.push(this.valueFeature[f]["name"]);
          }
          var flag = true;
          if (filtertags.length > 0)
            for (var i_tag in filtertags) {
              if (!(tagss.indexOf(filtertags[i_tag]) >= 0)) {
                flag = false;
                break;
              }
            }
          if (
            filterinstitutions != null &&
            filterinstitutions != "" &&
            filterinstitutions.length != 0
          )
            if (!(filterinstitutions == institution)) {
              flag = false;
            }
          if (filterplatform.length > 0)
            for (var i_platform in filterplatform) {
              if (!(platformss.indexOf(filterplatform[i_platform]) >= 0)) {
                flag = false;
                break;
              }
            }
          if (filterfeature.length > 0)
            for (var i_feature in filterfeature) {
              if (!(featuress.indexOf(filterfeature[i_feature]) >= 0)) {
                flag = false;
                break;
              }
            }
          if (flag) filterData.push(obj);
        }
        this.data.filteredData = filterData;
        this.data.totalRows = filterData.length;
      } else {
        this.data.filteredData = this.data.data;
        this.data.totalRows = this.data.data.length;
      }
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
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
