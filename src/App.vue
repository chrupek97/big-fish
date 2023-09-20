<template>
  <body>
    <header></header>
    <main>
      <image-preview :imageUrl="imageUrl" :setImageUrl="setImageUrl" v-if="imageUrl !== ''"></image-preview>
      <search-box :filterFishes="filterFishes"></search-box>
      <h1>Ryby</h1>
      <grid-layout v-if="!isLoading">
        <fish-form :addNewFish="addNewFish"></fish-form>
        <fish-item
          v-for="fish in filteredFishes"
          :key="fish.id"
          :id="fish.id"
          :owner="fish.owner"
          :weight="fish.weight"
          :type="fish.type"
          :bait="fish.bait"
          :additionalInfo="fish.additionalInfo"
          :imageName="fish.imageName"
          :date="fish.date"
          :setImageUrl="this.setImageUrl"
        ></fish-item>
      </grid-layout>
      <grid-layout v-else>
        <div>Loading ...</div>
      </grid-layout>
      <summary-box
        :totalWeight="totalWeight"
        :fishCount="fishCount"
        :maxFishWeight="maxFishWeight"
      ></summary-box>
    </main>
  </body>
</template>

<script>
import firebaseConfig from "./firebase";
import axios from "axios";
import FishItem from "./components/FishItem.vue";
import GridLayout from "./components/layout/GridLayout.vue";
import FishForm from "./components/FishForm.vue";
import SearchBox from "./components/SearchBox.vue";
import SummaryBox from "./components/SummaryBox.vue";
import ImagePreview from "./components/ImagePreview.vue";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes } from "firebase/storage";

export default {
  components: {
    FishItem,
    FishForm,
    GridLayout,
    SearchBox,
    SummaryBox,
    ImagePreview,
    // BaseSpinner
  },

  async created() {
    const url = "https://big-fish-79423-default-rtdb.firebaseio.com/fishes.json";
    const response = await axios.get(url);
    const responseData = response.data;

    for (const key in responseData) {
      const fish = {
        owner: responseData[key].owner,
        weight: responseData[key].weight,
        type: responseData[key].type,
        bait: responseData[key].bait,
        date: responseData[key].date,
        additionalInfo: responseData[key].additionalInfo,
        imageName: responseData[key].imageName,
      };
      this.fishes.push(fish);
    }
    this.filteredFishes = this.fishes;
    this.totalWeight = this.filteredFishes.reduce((acc, fish) => acc + fish.weight, 0);
    this.fishCount = this.filteredFishes.length;
    this.maxFishWeight = Math.max(...this.filteredFishes.map((fish) => fish.weight));
    this.isLoading = false;
  },

  data() {
    return {
      isLoading: true,
      isAdding: false,
      fishes: [],
      filteredFishes: [],
      totalWeight: 0,
      fishCount: 0,
      maxFishWeight: 0,
      imageUrl: '',
    };
  },
  methods: {
    setImageUrl(imageUrl){
      this.imageUrl = imageUrl
    },  
    filterFishes(owner, type, minWeight, maxWeight) {
      let filteredFishes = [...this.fishes];
      if (owner && owner !== "") {
        filteredFishes = filteredFishes.filter((fish) => fish.owner === owner);
      }
      if (type && type !== "") {
        filteredFishes = filteredFishes.filter((fish) => fish.type === type);
      }
      if (minWeight && minWeight !== "") {
        filteredFishes = filteredFishes.filter((fish) => fish.weight >= minWeight);
      }
      if (maxWeight && maxWeight !== "") {
        filteredFishes = filteredFishes.filter((fish) => fish.weight <= maxWeight);
      }
      this.filteredFishes = filteredFishes;
      this.totalWeight = this.filteredFishes.reduce((acc, fish) => acc + fish.weight, 0);
      this.fishCount = this.filteredFishes.length;
    },
    async insertImageToStore(file) {
      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      const storageRef = ref(storage, `gs://big-fish-79423.appspot.com/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
      } catch (e) {
        throw Error("aaa");
      }
    },
    async addFish(fish) {
      const url = "https://big-fish-79423-default-rtdb.firebaseio.com/fishes.json";
      try {
        const newFish = {
          owner: fish.owner,
          weight: fish.weight,
          type: fish.type,
          bait: fish.bait,
          date: fish.date,
          additionalInfo: fish.additionalInfo,
          imageName: fish.imageName,
        };
        await fetch(url, {
          method: "POST",
          body: JSON.stringify(newFish),
        });
        this.fishes.push(newFish);
      } catch (e) {
        throw new Error(e);
      }
    },
    async addNewFish(file, fish) {
      await this.insertImageToStore(file);
      await this.addFish(fish);
    },
  },
};
</script>

<style>
h1 {
  font-size: 1.5rem;
  text-align: center;
}
button {
  padding: 0.25rem 2rem;
  border-radius: 0.25rem;
  border: none;
  font-weight: bold;
}

.btn-primary {
  background: white;
  border: 1px solid var(--primary-color);
}

.btn-primary:hover {
  cursor: pointer;
  background: var(--primary-color);
  border: 1px solid white;
  color: white;
}

.btn-secondary {
  background: var(--primary-color);
  border: 1px solid var(--primary-color);
}

.btn-secondary:hover {
  cursor: pointer;
}
</style>
