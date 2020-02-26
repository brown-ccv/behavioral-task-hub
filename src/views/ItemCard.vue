<template>
  <b-container fluid>
    <b-row>
      <b-col lg="6" class="my-1">
        <b-form-group
          label="Sort"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="sortBySelect"
          class="mb-0"
        >
          <b-input-group size="sm">
            <b-form-select
              v-model="sortBy"
              id="sortBySelect"
              :options="sortOptions"
              class="w-75"
            >
              <template v-slot:first>
                <option value="">-- none --</option>
              </template>
            </b-form-select>
            <b-form-select
              v-model="sortDesc"
              size="sm"
              :disabled="!sortBy"
              class="w-25"
            >
              <option :value="false">Asc</option>
              <option :value="true">Desc</option>
            </b-form-select>
          </b-input-group>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Initial sort"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          label-for="initialSortSelect"
          class="mb-0"
        >
          <b-form-select
            v-model="sortDirection"
            id="initialSortSelect"
            size="sm"
            :options="['asc', 'desc', 'last']"
          ></b-form-select>
        </b-form-group>
      </b-col>

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter"
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

      <b-col lg="6" class="my-1">
        <b-form-group
          label="Filter On"
          label-cols-sm="3"
          label-align-sm="right"
          label-size="sm"
          description="Leave all unchecked to filter on all data"
          class="mb-0"
        >
          <b-form-checkbox-group v-model="filterOn" class="mt-1">
            <b-form-checkbox value="taskName">Task Name</b-form-checkbox>
            <b-form-checkbox value="lab">Labs</b-form-checkbox>
            <b-form-checkbox value="framework">Framework</b-form-checkbox>
            <b-form-checkbox value="platform">Platform</b-form-checkbox>
            <b-form-checkbox value="features">Features</b-form-checkbox>
            <b-form-checkbox value="tags">Tags</b-form-checkbox>
          </b-form-checkbox-group>
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
      :items="data"
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
          v-for="(tag, index) in platform.value.desktop"
          :key="index"
          pill
          variant="success"
          ><span v-if="tag">{{ index }}<br /></span
        ></b-badge>
        <br />
        <b-badge
          v-for="(tag, index) in platform.value.mobile"
          :key="index"
          pill
          variant="primary"
          ><span v-if="tag">{{ index }}<br /></span
        ></b-badge>
      </template>

      <template v-slot:cell(features)="features">
        <b-badge
          v-for="(tag, index) in features.value"
          :key="index"
          pill
          variant="light"
          ><span v-if="tag">{{ index }}<br /></span
        ></b-badge>
      </template>

      <template v-slot:cell(links)="links">
        <span v-for="(tag, index) in links.value" :key="index">
          <b-link class="text-dark" v-if="index == 'deployment'" href="${tag}">
            <b-iconstack font-scale="2">
              <b-icon stacked icon="circle-fill" variant="dark"></b-icon>
              <b-icon
                stacked
                icon="cloud-upload"
                scale="0.6"
                variant="white"
              ></b-icon>
            </b-iconstack>
            <!-- <span class="text-dark">Deployment</span> -->
          </b-link>
          <b-link v-if="index == 'sourceCode'" href="${tag}">
            <b-iconstack font-scale="2">
              <b-icon stacked icon="circle-fill" variant="dark"></b-icon>
              <b-icon
                stacked
                icon="code-slash"
                scale="0.6"
                variant="white"
              ></b-icon>
            </b-iconstack>
            <!-- <span class="text-dark">Source Code</span> -->
          </b-link>
        </span>
      </template>

      <template v-slot:cell(publication)="publication">
        <!-- {{ publication }} -->
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
  </b-container>
</template>

<script>
import GithubServices, { query, serialize } from "@/GithubServices";
export default {
  data() {
    return {
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
          sortable: true,
          class: "text-center"
        },
        { key: "lab", label: "Labs", sortable: true, class: "text-center" },
        { key: "lab", label: "d", class: "text-center" },
        {
          key: "publication",
          label: "Publication",
          class: "text-center"
        },
        {
          key: "platform",
          label: "Platform",
          class: "text-center"
        },
        {
          key: "features",
          label: "Features",
          class: "text-center"
        },
        // { key: 'tags', label: 'Tags', sortable: true, class: 'text-center' },
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
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return { text: f.label, value: f.key };
        });
    }
  },
  mounted() {
    // Set the initial number of items
    GithubServices.getData(query("data"))
      .then(response => {
        this.data = serialize(response);
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
