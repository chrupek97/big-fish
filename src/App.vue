<template>
  <header></header>
  <main>
    <base-card>
      <div>Lorem ipsum dolor</div>
    </base-card>
  </main>
</template>

<script>
export default {
  data() {
    return {
      fishes: [
        {
          id: "f1",
          owners: ["Mateusz"],
          weight: 5.5,
          type: "Karp",
        },
        {
          id: "f2",
          owners: ["Mateusz"],
          weight: 10.5,
          type: "Karp",
        },
      ],
    };
  },
};
</script>

<style></style>
