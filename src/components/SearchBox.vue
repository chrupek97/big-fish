<template>
  <form class="search-box" @submit.prevent="submitForm">
    <input type="text" name="owner" list="owners" placeholder="Wyłowił" v-model="owner" />
    <datalist id="owners">
      <option value="Kacper"></option>
      <option value="Mateusz"></option>
      <option value="Patryk"></option>
    </datalist>
    <input type="text" name="owner" list="fishes" placeholder="Ryba" v-model="type" />
    <datalist id="fishes">
      <option value="Amur"></option>
      <option value="Karp"></option>
      <option value="Karaś"></option>
    </datalist>
    <input type="number" placeholder="Waga od" v-model="minWeight" />
    <input type="number" placeholder="Waga do" v-model="maxWeight" />
    <button type="submit" class="btn btn-secondary">Filtruj</button>
  </form>
</template>

<script>
export default {
  props: ['filterFishes'],
  data() {
    return {
      owner: "",
      type: "",
      minWeight: 0,
      maxWeight: 999,
    };
  },
  methods: {
    submitForm() {
      console.log('xd')
      this.filterFishes(this.owner, this.type, this.minWeight, this.maxWeight)
    },
  },
};
</script>

<style scoped>
.search-box {
  background: #ebecef;
  display: flex;
  justify-content: center;
  padding: 2rem 2rem;
  flex-wrap: wrap;
}

input,
button {
  padding: 0rem 1rem;
  margin: 1rem;
  height: 40px;
  box-sizing: border-box;
  width: min(150px, 100%);
}

input {
  border: none;
  border-radius: 0.25rem;
}

input:focus {
  outline: none !important;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
}
</style>
