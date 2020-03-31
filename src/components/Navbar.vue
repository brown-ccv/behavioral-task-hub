<template>
  <div>
    <b-navbar type="light" variant="light">
      <b-navbar-nav>
        <div class="navbar-brand">
          <CCVLogo class="logo" />
          <BrownLogo class="brown-logo" />
        </div>
        <b-navbar-brand class="m-auto nav-title"
          >BEHAVIORAL TASK HUB</b-navbar-brand
        >
      </b-navbar-nav>
      <b-navbar-nav class="ml-auto">
        <b-nav-item class="nav-link" to="/">HOME</b-nav-item>
        <b-nav-item class="nav-link" to="/About">ABOUT</b-nav-item>
      </b-navbar-nav>
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
  }
};
</script>

<style></style>
