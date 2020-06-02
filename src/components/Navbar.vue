<template>
  <div>
    <b-navbar type="light" toggleable="md">
      <b-navbar-nav>
        <div class="navbar-brand">
          <b-link id="ccv" :href="$t('nav-bar.links.ccv')"
            ><CCVLogo class="ccv-logo"
          /></b-link>
          <b-link id="brown" :href="$t('nav-bar.links.brown')"
            ><BrownLogo class="brown-logo"
          /></b-link>
        </div>
      </b-navbar-nav>
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse is-nav>
        <b-navbar-nav id="navoptions" class="ml-auto">
          <b-nav-item class="nav-link" to="/">HOME</b-nav-item>
          <b-nav-item class="nav-link" to="/About">ABOUT</b-nav-item>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "@/styles/themes/default/components/_navbar.sass";
import CCVLogo from "@/assets/illustrations/ccv-logo.vue";
import BrownLogo from "@/assets/illustrations/brown-logo.vue";
export default {
  components: {
    CCVLogo,
    BrownLogo
  }
};
</script>

<style></style>
