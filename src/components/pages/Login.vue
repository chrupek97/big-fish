<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <h3>Hasło dostępu</h3>
      <div>Aby móc zarządzać rybkami musisz podać hasło dostępu.</div>
      <input type="password" class='input' minlength="5" required v-model="password"/>
      <button type="submit" class='btn btn-secondary'>Zaloguj</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      password: '',
    }
  },
  methods: {
    async submitForm() {
      if(this.password === 'rybkirybki') {
        console.log('abc')
        this.$store.dispatch('login')
        this.$router.push('/')
      }
    }
  }
};
</script>

<style scoped>
.form-container {
  width: 80%;
  margin: 2rem auto;
  padding: 1rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  box-sizing: content-box;
}
form {
  margin: 0 auto;
  text-align: center;
  display: flex;
  flex-direction: column;
}
form > * {
  margin: .5rem;
}

input,
button {
  padding: 0rem 1rem;
  margin: 1rem;
  height: 40px;
  box-sizing: border-box;
}

input {
  border: 1px solid gray;
  border-radius: 0.25rem;
}

input:focus {
  outline: none !important;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
}

</style>
