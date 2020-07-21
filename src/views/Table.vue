<template>
  <b-container fluid class="table-body">
    <div class="d-flex">
      <div class="control-sidebar">
        <div class="table-controls" v-bind:class="{ collapsed: navCollapsed }">
          <div class="sidebar-control">
            <div class="sidebar-control-inner">
              <button class="control-button" @click="toggleControl">
                <b-icon
                  icon="search"
                  aria-hidden="true"
                  font-scale="1.8"
                ></b-icon>
              </button>
            </div>
          </div>
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
                </b-input-group>
              </div>
            </b-form-group>
          </div>
          <div class="table-control-items" v-show="!navCollapsed">
            <b-form-group>
              <div class="text-left">
                <label class="label" for="platform">{{
                  $t("sidebar.filters.platform")
                }}</label>
                <multiselect
                  id="ajax"
                  v-model="valuePlatform"
                  v-on:change="updateTable()"
                  :options="platforms"
                  :multiple="true"
                  :close-on-select="false"
                  :clear-on-select="false"
                  :preserve-search="true"
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
                  :hide-selected="true"
                >
                  <template slot="clear" slot-scope="props">
                    <div
                      class="multiselect__clear"
                      v-if="valuePlatform.length"
                      @mousedown.prevent.stop="clearPlatform(props.search)"
                    ></div>
                  </template>
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
                  v-on:change="updateTable()"
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
                  :hide-selected="true"
                >
                  <template slot="clear" slot-scope="props">
                    <div
                      class="multiselect__clear"
                      v-if="valueFeature.length"
                      @mousedown.prevent.stop="clearFeatures(props.search)"
                    ></div>
                  </template>
                </multiselect>
              </div>
            </b-form-group>
          </div>
          <div class="table-control-items" v-show="!navCollapsed">
            <b-form-group>
              <div class="text-left">
                <label class="label" for="tags">{{
                  $t("sidebar.filters.tags")
                }}</label>
                <multiselect
                  id="tags"
                  v-model="valueTags"
                  v-on:change="updateTable()"
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
                  :hide-selected="true"
                >
                  <template slot="clear" slot-scope="props">
                    <div
                      class="multiselect__clear"
                      v-if="valueTags.length"
                      @mousedown.prevent.stop="clearTags(props.search)"
                    ></div>
                  </template>
                </multiselect>
              </div>
            </b-form-group>
          </div>
          <div class="table-control-items" v-show="!navCollapsed">
            <b-form-group>
              <div class="text-left">
                <label for="institution" class="label">{{
                  $t("sidebar.filters.institution")
                }}</label>
                <multiselect
                  id="institution"
                  v-model="valueInstitutions"
                  v-on:change="updateTable()"
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
          <div class="table-control-items" v-show="!navCollapsed">
            <b-button
              @click="clearAll()"
              class="btn shadow-none"
              variant="russett"
              size="lg"
            >
              <span class="button"> Reset filters</span>
            </b-button>
          </div>
        </div>
      </div>
      <div class="table-display">
        <b-table
          show-empty
          responsive
          stacked="md"
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
          :no-sort-reset="true"
          thead-class="table-heading"
          @filtered="onFiltered"
        >
          <template v-slot:empty="">
            <h4 class="emptytext">No tasks found</h4>
          </template>
          <template v-slot:emptyfiltered="">
            <h4 class="emptytext">No tasks found</h4>
          </template>
          <template v-slot:head()="data">
            <span class="text">{{ data.label }}</span>
          </template>
          <template v-slot:cell(tags)="tagsformat">
            <b-badge
              v-for="tag in tagsformat.unformatted"
              :key="tag"
              pill
              class="pills"
              variant="light"
              >{{ tag }}</b-badge
            >
          </template>
          <template v-slot:cell(taskName)="row">
            <strong class="font-weight-bold pl-1">{{
              row.value | capitalize
            }}</strong>
            <b-button
              v-b-modal="row.item.taskName"
              size="sm"
              variant="white"
              class="mr-1"
            >
              <b-iconstack font-scale="1.5">
                <b-icon stacked icon="circle-fill" class="icon-color"></b-icon>
                <b-icon
                  stacked
                  icon="link45deg"
                  scale="0.8"
                  variant="white"
                ></b-icon>
              </b-iconstack>
            </b-button>
            <BModal
              :id="row.item.taskName"
              title="Task Links"
              :content="sendInfo(row.item.links)"
            />
          </template>

          <template v-slot:head(platform)="platform">
            <span class="text">{{ platform.label }}</span
            ><br />
            <b-badge pill class="pills" variant="primary"> Desktop </b-badge>
            <b-badge pill class="pills" variant="success"> Mobile </b-badge>
          </template>

          <template v-slot:cell(platform)="platform">
            <b-badge
              v-for="tag in platform.value"
              :key="tag"
              pill
              class="pills"
              :variant="tags[tag]"
              >{{ tag }}<br
            /></b-badge>
          </template>

          <template v-slot:cell(features)="features">
            <b-badge
              v-for="tag in features.value"
              :key="tag"
              pill
              class="pills"
              variant="light"
              >{{ tag }}<br />
            </b-badge>
          </template>

          <template v-slot:head(framework)="framework">
            <span class="text">{{ framework.label }}</span
            ><br />
            <b-badge pill class="pills" variant="info"> Library </b-badge>
            <b-badge pill class="pills" variant="warning"> Language </b-badge>
          </template>

          <template v-slot:cell(framework)="framework">
            <span v-for="(tag, index) in framework.value" :key="index">
              <span v-if="index == 'library'">
                <b-badge
                  v-for="each in tag"
                  :key="each"
                  pill
                  class="pills"
                  variant="info"
                  >{{ each }}</b-badge
                >
              </span>
              <span v-if="index == 'language'">
                <b-badge
                  v-for="each in tag"
                  :key="each"
                  pill
                  class="pills"
                  variant="warning"
                  >{{ each }}</b-badge
                >
              </span>
            </span>
          </template>

          <template v-slot:cell(lab)="labs">
            {{ labs.value | capitalize }}
            <b-button
              v-b-modal="labs.item.lab.name"
              size="sm"
              variant="white"
              class="mr-1"
            >
              <b-icon-info-circle-fill
                font-scale="1.3"
                class="icon-color"
              ></b-icon-info-circle-fill>
            </b-button>
            <BModal
              :id="labs.item.lab.name"
              title="Lab Info"
              :content="sendInfo(labs.item.lab)"
            />
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
        <b-pagination
          class="pagination"
          v-model="currentPage"
          :total-rows="data.totalRows"
          :per-page="perPage"
          align="center"
          pills
          size="md"
        ></b-pagination>
      </div>
    </div>
  </b-container>
</template>

<script>
import Multiselect from "vue-multiselect";
import { mapActions, mapState } from "vuex";
import BModal from "@/components/BModal.vue";
import _ from "lodash";
export default {
  components: {
    Multiselect,
    BModal
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
        windows: "primary",
        linux: "primary",
        mac: "primary",
        ios: "success",
        android: "success"
      },
      fields: [
        {
          key: "taskName",
          label: this.$t("fields.taskName"),
          sortable: true,
          sortDirection: "desc",
          class: "text-left align-middle pl-3"
        },
        {
          key: "framework",
          label: this.$t("fields.framework"),
          class: "text-left align-middle pl-3"
        },
        {
          key: "lab",
          label: this.$t("fields.lab"),
          sortable: true,
          formatter: value => {
            return value["name"];
          },
          sortByFormatted: true,
          class: "text-left align-middle pl-3"
        },
        {
          key: "platform",
          label: this.$t("fields.platform"),
          class: "text-left align-middle pl-3",
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
          class: "text-left align-middle pl-3",
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
            var length = value != null ? value.length : 0;
            for (var i = 0; i < length; i++) {
              formatted += String(value[i]) + `\n`;
            }
            return formatted;
          },
          sortByFormatted: true,
          filterByFormatted: true,
          class: "text-left align-middle pl-3"
        }
      ],
      currentPage: 1,
      perPage: 10,
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: []
    };
  },
  computed: {
    ...mapState(["data"]),
    tagsvalues() {
      return _.uniq(
        _.split(
          this.data.data.map(item => item.tags),
          ","
        )
      ).map(function(name) {
        return { name: name };
      });
    },
    institutions() {
      return _.uniq(
        _.split(
          this.data.data.map(item => item.lab.institution),
          ","
        )
      );
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"]),
    sendInfo(item) {
      return _.pickBy(item);
    },
    toggleControl() {
      this.navCollapsed = !this.navCollapsed;
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
        var dataTags = this.data.data.map(item => item.tags);
        var dataInstitution = this.data.data.map(item => item.lab.institution);
        var dataPlatform = this.data.data
          .map(item => item.platform)
          .map(function(key) {
            return _.union(
              _(key.desktop)
                .pickBy()
                .keys()
                .value(),
              _(key.mobile)
                .pickBy()
                .keys()
                .value()
            );
          });
        var dataFeature = this.data.data
          .map(item => item.features)
          .map(key =>
            _(key)
              .pickBy()
              .keys()
              .value()
          );
        var filtertags = this.valueTags.map(item => item.name);
        var filterplatform = this.valuePlatform.map(item => item.name);
        var filterinstitution = this.valueInstitutions;
        var filterfeature = this.valueFeature.map(item => item.name);
        var dataSelect = _.zip(
          dataTags.map(function(item) {
            return (
              filtertags.length === _.intersection(item, filtertags).length
            );
          }),
          dataPlatform.map(function(item) {
            return (
              filterplatform.length ===
              _.intersection(item, filterplatform).length
            );
          }),
          dataInstitution.map(function(item) {
            return item === filterinstitution || filterinstitution.length == 0;
          }),
          dataFeature.map(function(item) {
            return (
              filterfeature.length ===
              _.intersection(item, filterfeature).length
            );
          })
        ).map(function(item) {
          return item[0] && item[1] && item[2] && item[3];
        });
        filterData = _.values(
          _.pickBy(
            _.zip(this.data.data, dataSelect).map(function(item) {
              if (item[1]) return item[0];
            })
          )
        );
        this.data.filteredData = filterData;
        this.data.totalRows = filterData.length;
      } else {
        this.data.filteredData = this.data.data;
        this.data.totalRows = this.data.data.length;
      }
    },
    clearPlatform() {
      (this.valuePlatform = []), this.updateTable();
    },
    clearFeatures() {
      (this.valueFeature = []), this.updateTable();
    },
    clearTags() {
      (this.valueTags = []), this.updateTable();
    },
    clearInstitution() {
      (this.valueInstitutions = ""), this.updateTable();
    },
    clearAll() {
      (this.valuePlatform = []),
        (this.valueFeature = []),
        (this.valueTags = []),
        (this.valueInstitutions = ""),
        this.updateTable();
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
