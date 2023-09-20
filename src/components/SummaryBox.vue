<template>
  <div class="summary-box">
    <h1>Statystyki</h1>
    <div class="statistic-box">
      <div>Łączna waga: {{ totalWeight.toFixed(2) }} kg</div>
      <div>Łączna liczba ryb: {{ fishCount }}</div>
      <div>Największa ryba: {{ maxFishWeight }} kg</div>
    </div>
  </div>
</template>
<script>
export default {
  props: ["totalWeight", "fishCount", "maxFishWeight"],
};
</script>

<style scoped>
.summary-box {
  padding: 2rem;
  margin-top: 2rem;
  background-color: var(--gray-color);
  justify-content: center;
}

.statistic-box {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.statistic-box div {
  padding: .5rem;
}
</style>
