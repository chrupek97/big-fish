<template>
  <nav>
    <ul>
      <li>Ryby</li>
      <li v-if="!isAuth">
        <router-link to="/login" class='link'> Zaloguj się</router-link>
      </li>
      <li v-else>
        <router-link to="/"  class='link'> Zaloguj się</router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  computed: {
    isAuth() {
      // console.log(this.$store.getters)
      return this.$store.getters.userIsLoggedIn;
    },
  },
};
</script>

<style scoped>
ul {
  background: var(--primary-color);
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  list-style-type: none;
}
li:hover {
  cursor: pointer;
  font-weight: bold;
}
.link{
  text-decoration: none;
  color: black;
}
</style>
