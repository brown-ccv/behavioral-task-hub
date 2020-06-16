<template>
  <b-modal v-bind="$attrs" v-if="content" :hide-footer="true">
    <template v-slot:modal-title>
      {{ title | capitalize }}
      <b-button
        v-if="content.website"
        size="sm"
        variant="white"
        :href="content.website"
        class="mr-1"
      >
        <b-iconstack font-scale="1.5">
          <b-icon stacked icon="circle-fill" style="color: #6c757d;"></b-icon>
          <b-icon stacked icon="link45deg" scale="0.8" variant="white"></b-icon>
        </b-iconstack>
      </b-button>
    </template>
    <div class="text-left">
      <span v-for="(value, key) in content" v-bind:key="'modal' + key"
        ><b v-if="value" class="text-warning"> {{ key | camelToTitle }}: </b
        >{{ value }} <br
      /></span>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    },
    content: {
      type: Object,
      required: true
    }
  },
  filters: {
    // this filter will can be used to capitalize a word
    capitalize: item => {
      return item.charAt(0).toUpperCase() + item.slice(1);
    },
    camelToTitle: item => {
      return item
        .replace(/([A-Z])/g, " $1")
        .replace(/^./, str => str.toUpperCase());
    }
  }
};
</script>
