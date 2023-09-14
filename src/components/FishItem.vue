<template>
  <base-card>
    <ul class="owners-box" v-for="owner in owners" :key="owner">
      <li class="owner">{{ owner }}</li>
    </ul>
    <p>{{ weight }}</p>
    <p>{{ type }}</p>
    <p>{{ bait }}</p>
    <p>{{ additionalInfo }}</p>
  </base-card>
</template>

<script>
export default {
  props: ["id", "owners", "weight", "type", "bait", "additionalInfo"],
};
</script>

<style scoped>
ul {
  list-style: none;
}

.owner {
  margin-right: 0.75rem;
}

.owners-box {
  display: inline-block;
}
</style>
