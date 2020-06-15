<template>
  <div class="modal-backdrop">
    <div class="modal">
      <header class="modal-header">
        <slot name="header">
          default tile!

          <button type="button" class="btn-close" @click="close">
            x
          </button>
        </slot>
      </header>
      <section class="modal-body">
        <slot name="body">
          default body!
        </slot>
      </section>
      <footer class="modal-footer">
        <slot name="footer">
          default footer!

          <button type="button" class="btn-green" @click="close">
            Close
          </button>
        </slot>
      </footer>
    </div>
  </div>
</template>

<script>
import "@/styles/themes/default/components/_modal.sass";
export default {
  data: function() {
    return {
      modalContent: ""
    };
  },
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
    close() {
      this.$emit("close");
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
