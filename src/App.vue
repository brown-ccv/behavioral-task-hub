<script setup>
import { RouterLink, RouterView } from 'vue-router'
import BrownLogo from "@/assets/illustrations/brown-logo.vue"
import CCVLogo from "@/assets/illustrations/ccv-logo.vue";
</script>

<template>
  <header>
    <div class="wrapper">
      <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand">
          <a class="navbar-item" href="https://ccv.brown.edu/">
            <CCVLogo/>
          </a>
          <a class="navbar-item" href="https://www.brown.edu/">
            <BrownLogo/>
          </a>

          <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>
        <div id="navbarBasicExample" class="navbar-menu">
        <div class="navbar-end">
          <RouterLink to="/" class="navbar-item">Home</RouterLink>
          <RouterLink to="/about" class="navbar-item">About</RouterLink>
        </div>
        </div>
      </nav>
    </div>
  </header>

  <RouterView />
</template>