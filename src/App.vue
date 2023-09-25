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
  methods: {
    tryLogin() {
      const expiryDate = localStorage.getItem("expiryDate");
      console.log(expiryDate);
      console.log(new Date().getTime())
      console.log(expiryDate)
      if (new Date().getTime() < expiryDate) {
        console.log("abc");
        this.$store.dispatch("login");
      }
    },
  },
  mounted() {
    console.log("av");
    this.tryLogin();
  },
};
</script>
