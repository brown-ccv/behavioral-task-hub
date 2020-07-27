<template>
  <b-modal v-bind="$attrs" v-if="content" :hide-footer="true" class="modal">
    <template slot="modal-title" id="title">
      {{ title | capitalize }}
      <a
        v-if="content.website"
        :href="content.website"
        class="mr-1"
        id="website"
      >
        <b-iconstack font-scale="1">
          <b-icon stacked icon="circle-fill" variant="russett"></b-icon>
          <b-icon stacked icon="link45deg" scale="0.8" variant="white"></b-icon>
        </b-iconstack>
      </a>
    </template>
    <div class="text-left">
      <span v-for="(value, key) in content" v-bind:key="'modal' + key"
        ><b class="text-warning"> {{ key | camelToTitle }}: </b>
        <span v-if="typeof value == 'object'">
          <span v-for="val in value" v-bind:key="val"> <br />{{ val }} </span>
        </span>
        <a v-else-if="is_url(value)" id="url" :href="value">{{ value }}</a
        ><span v-else>{{ value }}</span> <br
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
  methods: {
    is_url(str) {
      var regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
      return regexp.test(str);
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
