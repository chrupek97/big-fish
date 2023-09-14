<template>
  <header></header>
  <main>
    <grid-layout>
      <fish-item
        v-for="fish in fishes"
        :key="fish.id"
        :id="fish.id"
        :owners="fish.owners"
        :weight="fish.weight"
        :type="fish.type"
        :bait="fish.bait"
        :additionalInfo="fish.additionalInfo"
      ></fish-item>
    </grid-layout>
  </main>
</template>

<script>
import FishItem from "./components/FishItem.vue";
import GridLayout from "./components/layout/GridLayout.vue";

export default {
  components: {
    FishItem,
    GridLayout,
  },
  data() {
    return {
      fishes: [
        {
          id: "f1",
          owners: ["Mateusz", "Patryk"],
          weight: 5.5,
          type: "Karp",
          bait: "abc",
          additionalInfo: "aaa",
        },
        {
          id: "f2",
          owners: ["Mateusz"],
          weight: 10.5,
          type: "Karp",
          bait: "cde",
          additionalInfo: "aaa",
        },
      ],
    };
  },
};
</script>

<style></style>
