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
      show-empty
      small
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
        <span
          v-for="tag in tagsformat.unformatted"
          :key="tag"
          :class="`badge badge-${tags[index]}`"
          >{{ tag }}</span
        >
      </template>
      <template v-slot:cell(platform)="platform">
        <span
          v-for="(tag, index) in platform.value.desktop"
          :key="index"
          :class="`badge badge-${tags[index]}`"
          ><span v-if="tag">{{ index }}<br /></span></span
        ><br />
        <span
          v-for="(tag, index) in platform.value.mobile"
          :key="index"
          :class="`badge badge-${tags[index]}`"
          ><span v-if="tag">{{ index }}<br /></span
        ></span>
      </template>
      <template v-slot:cell(features)="features">
        <span
          v-for="(tag, index) in features.value"
          :key="index"
          :class="`badge badge-${tags[index]}`"
          ><span v-if="tag">{{ index }}</span></span
        >
      </template>
    </b-table>
  </b-container>
</template>

<script>
import GithubServices, { query, serialize } from "@/GithubServices";
export default {
  data() {
    return {
      tags: {
        windows: "light",
        linux: "dark",
        mac: "success",
        ios: "danger",
        android: "warning",
        browser: "secondary",
        eegTrigger: "info",
        mturk: "danger",
        docker: "success",
        electron: "warning"
      },
      data: [],
      fields: [
        {
          key: "taskName",
          label: "Task name",
          sortable: true,
          sortDirection: "desc"
        },
        { key: "links", label: "Links", sortable: true, class: "text-center" },
        {
          key: "framework",
          label: "Framework",
          sortable: true,
          class: "text-center"
        },
        { key: "lab", label: "Labs", sortable: true, class: "text-center" },
        {
          key: "publication",
          label: "Publication",
          sortable: true,
          class: "text-center"
        },
        {
          key: "platform",
          label: "Platform",
          sortable: true,
          class: "text-center"
        },
        {
          key: "features",
          label: "Features",
          sortable: true,
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
          sortable: true,
          sortByFormatted: true,
          filterByFormatted: true
        }
        //   { key: 'actions', label: 'Actions' }
      ],
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: "",
      sortDesc: false,
      sortDirection: "asc",
      filter: null,
      filterOn: [],
      infoModal: {
        id: "info-modal",
        title: "",
        content: ""
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
      this.infoModal.title = `Row index: ${index}`;
      this.infoModal.content = JSON.stringify(item, null, 2);
      this.$root.$emit("bv::show::modal", this.infoModal.id, button);
    },
    resetInfoModal() {
      this.infoModal.title = "";
      this.infoModal.content = "";
    },
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    }
  }
};
</script>
