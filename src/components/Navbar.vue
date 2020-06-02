<template>
  <div>
    <b-navbar :name="name" type="light" toggleable="md">
      <b-navbar-nav :name="name">
        <div class="navbar-brand">
          <b-link :name="name" :href="$t('nav-bar.links.ccv')"
            ><CCVLogo class="logo"
          /></b-link>
          <b-link :name="name" :href="$t('nav-bar.links.brown')"
            ><BrownLogo class="brown-logo"
          /></b-link>
        </div>
      </b-navbar-nav>
      <b-navbar-toggle :name="name" target="nav-collapse"></b-navbar-toggle>
      <b-collapse :name="name" is-nav>
        <b-navbar-nav :name="name" id="navoptions" class="ml-auto">
          <b-nav-item :name="name" class="nav-link" to="/">HOME</b-nav-item>
          <b-nav-item :name="name" class="nav-link" to="/About"
            >ABOUT</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import "@/styles/themes/default/components/_navbar.sass";
import CCVLogo from "@/assets/illustrations/ccv-logo.svg";
import BrownLogo from "@/assets/illustrations/brown-logo.svg";
export default {
  components: {
    CCVLogo,
    BrownLogo
  },
  props: {
    name: {
      type: String,
      required: true
    }
  }
};
</script>

<style></style>
