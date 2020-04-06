<template>
  <div>
    <div class="about-body">
      <div class="about-right-text">
        <div class="about-right-title">
          {{ $t("about.explanation.title") }}
        </div>
        <div class="about-right-subtext">
          {{ $t("about.explanation.description") }}
        </div>
      </div>
    </div>

    <div class="about-body">
      <div class="about-left-text">
        <div class="about-left-title">
          {{ $t("about.register.title") }}
        </div>
        <div class="about-left-subtext">
          {{ $t("about.register.description") }}
        </div>
      </div>
    </div>

    <div class="about-body">
      <div class="about-right-text">
        <div class="about-right-title">
          {{ $t("about.task-starter-description.title") }}
        </div>
        <div class="about-right-subtext">
          {{ $t("about.task-starter-description.description") }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import "@/styles/themes/default/components/_about.sass";
export default {
  name: "About",
  components: {},
  computed: {},
  methods: {},
  mounted() {}
};
</script>
