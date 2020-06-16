<template>
  <b-modal v-bind="$attrs" :title="title">
    <ul>
      <li v-for="(value, key) in content" v-bind:key="'modal' + key">
        {{ key }}: {{ value }}
      </li>
    </ul>
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
  }
};
</script>
