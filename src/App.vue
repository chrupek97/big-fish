<template>
  <body>
    <header>
      <the-navbar></the-navbar>
    </header>
    <main>
      <router-view></router-view>
    </main>
  </body>
</template>

<script>

import TheNavbar from "./components/UI/TheNavbar.vue";

export default {
  components: {
    TheNavbar,
  },
};
</script>
