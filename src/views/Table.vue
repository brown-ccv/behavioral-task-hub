<template>
  <b-container fluid>
    <b-row>
      <b-col lg="10" class="my-1">
        <b-form-group
          label=""
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="filterInput"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-input
              v-model="filter"
              type="search"
              id="filterInput"
              placeholder="Type to Search"
            ></b-form-input>
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''"
                >Clear</b-button
              >
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
      <b-col lg="12" class="my-1">
        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          class="mb-0"
        >
          <b-row>
            <b-col lg="2" class="my-1">
              <label class="typo__label">Platforms</label>
            </b-col>
            <b-col lg="4" class="my-1">
              <div class="text-left">
                <multiselect
                  v-model="valuePlatform"
                  :options="platforms"
                  :multiple="true"
                  selectLabel=""
                  selectGroupLabel="Click to select group"
                  deselectGroupLabel="Click to remove group"
                  deselectLabel="Click to remove"
                  :option-height="20"
                  group-values="options"
                  group-label="platform"
                  :group-select="true"
                  placeholder="Platform"
                  label="name"
                  track-by="name"
                  :taggable="true"
                  @input="updateTablePlatform"
                  @remove="updatedata"
                >
                </multiselect>
              </div>
            </b-col>
            <b-col lg="4">
              <multiselect
                v-model="valueFeature"
                :options="features"
                :multiple="true"
                selectLabel=""
                selectGroupLabel=""
                deselectGroupLabel="Click to remove group"
                deselectLabel="Click to remove"
                :option-height="20"
                placeholder="Features"
                label="name"
                track-by="name"
                :taggable="true"
                @input="updateTableFeatures"
                @remove="updatedata"
              >
              </multiselect>
            </b-col>
            <b-col lg="4">
              <multiselect
                v-model="valueTags"
                :options="tagsvalues"
                :multiple="true"
                selectLabel=""
                selectGroupLabel=""
                deselectGroupLabel="Click to remove group"
                deselectLabel="Click to remove"
                :option-height="20"
                placeholder="Tags"
                label="name"
                track-by="name"
                :taggable="true"
                @input="updateTableTags"
                @remove="updatedata"
              >
              </multiselect>
            </b-col>
          </b-row>
          <!-- <b-form-checkbox-group v-model="filterOn" class="mt-1">
          <b-form-checkbox value="taskName">Task Name</b-form-checkbox>
          <b-form-checkbox value="lab">Labs</b-form-checkbox>
          <b-form-checkbox value="framework">Framework</b-form-checkbox>
          <b-form-checkbox value="platform">Platform</b-form-checkbox>
          <b-form-checkbox value="features">Features</b-form-checkbox>
          <b-form-checkbox value="tags">Tags</b-form-checkbox>
        </b-form-checkbox-group> -->
        </b-form-group>
      </b-col>

      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>

    <b-table
      striped
      hover
      stacked="md"
      :items="filteredData"
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
      <template v-slot:cell(tags)="tagsformat">
        <!-- <span v-for="tag in tagsformat.unformatted" :key="tag" :class="`badge badge-${tags[tag]}`">{{ tag }}</span> -->
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
            href="${tag}"
            v-b-tooltip.focus
            title="Deployment"
            variant="none"
            ><b-iconstack font-scale="2">
              <b-icon stacked icon="circle-fill" variant="dark"></b-icon>
              <b-icon
                stacked
                icon="cloud-upload"
                scale="0.6"
                variant="white"
              ></b-icon> </b-iconstack
          ></b-button>
          <!-- <b-tooltip target="icon-deploy" title="Deployment" placement="topright" variant="light"></b-tooltip> -->
          <b-button
            v-if="index == 'sourceCode'"
            href="${tag}"
            v-b-tooltip.focus
            title="Source Code"
            variant="none"
            ><b-iconstack font-scale="2">
              <b-icon stacked icon="circle-fill" variant="dark"></b-icon>
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
          <b-link v-if="index == 'url'" href="${tag}"
            ><b-icon-box-arrow-up-right
              font-scale="1.5"
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
        <span v-for="(tag, index) in labs.value" :key="index">
          <span v-if="index == 'name'">{{ tag | capitalize }}</span>
        </span>
        <b-button
          size="sm"
          variant="white"
          @click="info(labs.item, labs.index, $event.target)"
          class="mr-1"
        >
          <b-icon-info-fill font-scale="2"></b-icon-info-fill>
        </b-button>
        <!-- <b-button size="sm" @click="labs.toggleDetails">
          {{ labs.detailsShowing ? 'Hide' : 'Show' }} Details
        </b-button> -->
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
      <div class="text-center">
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
        <b-link href="infoModal.website"
          ><b-icon-box-arrow-up-right
            font-scale="1.5"
          ></b-icon-box-arrow-up-right
        ></b-link>
        <!-- <span><b class="text-warning">website:</b>{{ infoModal.website }}</span> <br /> -->
      </div>
    </b-modal>
    <b-row>
      <b-col sm="5" md="6" class="my-1">
        <b-form-group
          label="Per page"
          label-cols-sm="6"
          label-cols-md="4"
          label-cols-lg="3"
          label-align-sm="right"
          label-size="sm"
          label-for="perPageSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="perPage"
            id="perPageSelect"
            size="sm"
            :options="pageOptions"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col sm="7" md="6" class="my-1">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          align="fill"
          size="sm"
          class="my-0"
        ></b-pagination>
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
import GithubServices, { query, serialize } from "@/GithubServices";
import Multiselect from "vue-multiselect";
export default {
  components: {
    Multiselect
  },
  data() {
    return {
      valuePlatform: [],
      valueFeature: [],
      valueTags: [],
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
      data: [],
      filteredData: [],
      fields: [
        {
          key: "taskName",
          label: "Task name",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "links", label: "Links", class: "text-center" },
        {
          key: "framework",
          label: "Framework",
          class: "text-center"
        },
        { key: "lab", label: "Labs", sortable: true, class: "text-center" },
        {
          key: "publication",
          label: "Publication",
          class: "text-center"
        },
        {
          key: "platform",
          label: "Platform",
          class: "text-center",
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
          label: "Features",
          class: "text-center",
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
          label: "Tags",
          formatter: value => {
            var formatted = "";
            for (var i = 0; i < value.length; i++) {
              formatted += String(value[i]) + `\n`;
            }
            return formatted;
          },
          sortByFormatted: true,
          filterByFormatted: true
        }
        //   { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15, 20],
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
    tagsvalues() {
      let unique = new Set();
      for (var d in this.data) {
        for (var tag in this.data[d]["tags"]) {
          unique.add(this.data[d]["tags"][tag]);
        }
      }
      console.log(Array.from(unique));
      let tagvalues = [];
      var uni = Array.from(unique);
      for (var t in uni) {
        tagvalues.push({ name: uni[t] });
      }
      console.log(tagvalues);
      return tagvalues;
    }
  },
  mounted() {
    // Set the initial number of items
    GithubServices.getData(query("data"))
      .then(response => {
        this.data = serialize(response);
        this.filteredData = serialize(response);
        this.totalRows = this.data.length;
      })
      .catch(error => {
        console.log(error);
      });
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
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    updateTableTags() {
      let filterData = [];

      if (this.valueTags.length > 0) {
        for (var d in this.filteredData) {
          var obj = this.filteredData[d];
          let tagss = [];
          let subset = [];
          for (var k in this.valueTags) {
            subset.push(this.valueTags[k]["name"]);
          }
          var value = obj.tags;
          for (var i in value) {
            tagss.push(value[i]);
          }
          console.log(subset, tagss);
          var flag = true;
          for (var plt in subset) {
            if (!(tagss.indexOf(subset[plt]) >= 0)) {
              flag = false;
              // console.log("not")
              break;
            }
          }
          if (flag) filterData.push(obj);
        }
        this.filteredData = filterData;
      } else this.filteredData = this.data;
    },
    updateTablePlatform() {
      let filterData = [];

      if (this.valuePlatform.length > 0) {
        for (var d in this.filteredData) {
          var obj = this.filteredData[d];
          let platformss = [];
          let subset = [];
          for (var k in this.valuePlatform) {
            subset.push(this.valuePlatform[k]["name"]);
          }
          var value = obj.platform;
          for (var i in value) {
            for (var j in value[i]) {
              if (value[i][j] == true) platformss.push(j);
            }
          }
          // console.log(subset, platformss)
          var flag = true;
          for (var plt in subset) {
            if (!(platformss.indexOf(subset[plt]) >= 0)) {
              flag = false;
              // console.log("not")
              break;
            }
          }
          if (flag) filterData.push(obj);
        }
        this.filteredData = filterData;
      } else this.filteredData = this.data;
    },
    updatedata() {
      this.filteredData = this.data;
    },
    updateTableFeatures() {
      let filterData = [];

      if (this.valueFeature.length > 0) {
        for (var d in this.filteredData) {
          var obj = this.filteredData[d];
          let featuress = [];
          let subset = [];
          for (var k in this.valueFeature) {
            subset.push(this.valueFeature[k]["name"]);
          }
          var value = obj.features;
          for (var i in value) {
            if (value[i] == true) featuress.push(i);
          }
          // console.log(subset, featuress)
          var flag = true;
          for (var plt in subset) {
            if (!(featuress.indexOf(subset[plt]) >= 0)) {
              flag = false;
              // console.log("not")
              break;
            }
          }
          if (flag) filterData.push(obj);
        }
        this.filteredData = filterData;
      } else this.filteredData = this.data;
      // console.log(filterData)
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
<style scoped>
.multiselect {
  width: fit-content;
  font-size: 0.8rem;
}
</style>
