<template>
  <header></header>
  <main>
    <grid-layout>
      <fish-item
        v-for="fish in fishes"
        :key="fish.id"
        :id="fish.id"
        :owner="fish.owner"
        :weight="fish.weight"
        :type="fish.type"
        :bait="fish.bait"
        :additionalInfo="fish.additionalInfo"
        :imageUrl="fish.imageUrl"
        :date="fish.date"
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
          owner: "Mateusz",
          weight: 5.5,
          type: "Karp",
          bait: "abc",
          date: new Date(),
          additionalInfo: "aaa",
          imageUrl: 'https://media.istockphoto.com/id/519920656/photo/wild-common-carp.jpg?s=612x612&w=0&k=20&c=KXwXVOuCftWeyLIv7xOX9J5avCHws_U8nSN8IvjWxwE='
        },
        {
          id: "f2",
          owner: "Kacper",
          weight: 10.5,
          type: "Karp",
          bait: "cde",
          date: new Date(),
          additionalInfo: "aaa",
          imageUrl: 'https://media.istockphoto.com/id/519920656/photo/wild-common-carp.jpg?s=612x612&w=0&k=20&c=KXwXVOuCftWeyLIv7xOX9J5avCHws_U8nSN8IvjWxwE='
        },
         {
          id: "f3",
          owner: "Mateusz",
          weight: 5.5,
          type: "Karp",
          bait: "abc",
          date: new Date(),
          additionalInfo: "aaa",
          imageUrl: 'https://media.istockphoto.com/id/519920656/photo/wild-common-carp.jpg?s=612x612&w=0&k=20&c=KXwXVOuCftWeyLIv7xOX9J5avCHws_U8nSN8IvjWxwE='
        },
        {
          id: "f4",
          owner: "Kacper",
          weight: 10.5,
          type: "Karp",
          bait: "cde",
          date: new Date(),
          additionalInfo: "aaa",
          imageUrl: 'https://media.istockphoto.com/id/519920656/photo/wild-common-carp.jpg?s=612x612&w=0&k=20&c=KXwXVOuCftWeyLIv7xOX9J5avCHws_U8nSN8IvjWxwE='
        },
      ],
    };
  },
};
</script>

<style></style>
