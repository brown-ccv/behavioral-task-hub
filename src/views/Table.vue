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
                <label for="lab" class="label">{{
                  $t("sidebar.filters.lab")
                }}</label>
                <multiselect
                  id="lab"
                  v-model="valueLabs"
                  v-on:change="updateTable()"
                  :options="labs"
                  :multiple="true"
                  selectLabel=""
                  selectGroupLabel=""
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
                      v-if="valueLabs.length"
                      @mousedown.prevent.stop="clearLabs(props.search)"
                    ></div>
                  </template>
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
              title="Task Info"
              :content="sendInfo(row.item.about)"
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

          <template v-slot:cell(framework)="framework">
            <span v-for="(tag, index) in framework.value" :key="index">
              <b-badge :href="tag.link" pill class="pills" variant="info">{{
                tag.name
              }}</b-badge>
            </span>
          </template>

          <template v-slot:cell(language)="language">
            <span v-for="(tag, index) in language.value" :key="index">
              <b-badge pill class="pills" variant="warning">{{ tag }}</b-badge>
            </span>
          </template>

          <template v-slot:cell(lab)="labs">
            <span v-for="(tag, index) in labs.item.lab" :key="index">
              {{ tag.name | capitalize }}
              <b-button
                v-b-modal="tag.name + labs.item.taskName + index"
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
                :id="tag.name + labs.item.taskName + index"
                title="Lab Info"
                :content="sendInfo(tag)"
              />
            </span>
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
      valueLabs: [],
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
          class: "text-left align-middle pl-3",
          formatter: value => {
            return _.map(value, val =>
              _.mapValues(val, _.method("toLowerCase"))
            );
          }
        },
        {
          key: "language",
          label: this.$t("fields.language"),
          class: "text-left align-middle pl-3",
          formatter: value => {
            return _.mapValues(value, _.method("toLowerCase"));
          }
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
          this.data.data.map(function(item) {
            return _.map(item.tags, _.method("toLowerCase"));
          }),
          ","
        )
      ).map(function(name) {
        return { name: name };
      });
    },
    labs() {
      return _.uniq(
        _.flatten(this.data.data.map(item => item.lab)).map(lab => lab.name)
      ).map(function(name) {
        return { name: name };
      });
    }
  },
  mounted() {
    this.fetchData();
  },
  methods: {
    ...mapActions("data", ["fetchData"]),
    sendInfo(item) {
      item = _.pickBy(item);
      if (item.sourceCode && item.sourceCode.access == "private") {
        delete item.sourceCode;
        item["sourceCode"] = `<span class='fa fa-lock'></span>`;
      } else if (item.sourceCode && item.sourceCode.access == "public") {
        let link = item.sourceCode.link;
        delete item.sourceCode;
        item["sourceCode"] = link;
      }
      return item;
    },
    toggleControl() {
      this.navCollapsed = !this.navCollapsed;
    },
    onFiltered() {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.currentPage = 1;
    },
    updateTable() {
      let filterData = [];

      if (
        this.valuePlatform.length > 0 ||
        this.valueTags.length > 0 ||
        this.valueFeature.length > 0 ||
        this.valueLabs != ""
      ) {
        var dataTags = this.data.data.map(item => item.tags);
        var dataLabs = this.data.data.map(function(item) {
          return item.lab.map(lab => lab.name);
        });
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
        var filterlab = this.valueLabs.map(item => item.name);
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
          dataLabs.map(function(item) {
            return filterlab.length === _.intersection(item, filterlab).length;
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
    clearLabs() {
      (this.valueLabs = []), this.updateTable();
    },
    clearAll() {
      (this.valuePlatform = []),
        (this.valueFeature = []),
        (this.valueTags = []),
        (this.valueLabs = ""),
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
