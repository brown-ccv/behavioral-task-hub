<template>
  <nav class="navbar" role="navigation" aria-label="main navigation">
    <div class="navbar-brand">
      <CCVLogo class="logo" />
      <BrownLogo class="brown-logo" />
    </div>
    <div class="navbar-menu">
      <div class="nav-end">
        <span class="navbar-item text-dark"
          ><router-link to="/">About</router-link>
        </span>
        |
        <span class="navbar-item text-dark"
          ><router-link to="/Search">Search</router-link></span
        >
      </div>
    </div>
  </nav>
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
