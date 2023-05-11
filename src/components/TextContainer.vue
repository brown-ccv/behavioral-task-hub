<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  subtext: {
    type: String,
    required: true
  },
  textColor: {
    type: String,
    required: true
  },
})
</script>

<template>
        <h1 :class="['is-size-3 has-text-weight-medium  ', textColor]">{{title}}
        </h1>
        <h2 :class="['subtitle', textColor]"><span v-html="subtext"></span>
        </h2>
</template>