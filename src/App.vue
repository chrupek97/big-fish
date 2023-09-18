<template>
  <header></header>
  <main>
    <grid-layout v-if="!isLoading">
      <fish-form :addNewFish="addNewFish"></fish-form>
      <fish-item
        v-for="fish in fishes"
        :key="fish.id"
        :id="fish.id"
        :owner="fish.owner"
        :weight="fish.weight"
        :type="fish.type"
        :bait="fish.bait"
        :additionalInfo="fish.additionalInfo"
        :imageName="fish.imageName"
        :date="fish.date"
      ></fish-item>
    </grid-layout>
    <grid-layout v-else>
      <div>Loading ...</div>
    </grid-layout>
  </main>
</template>

<script>
import firebaseConfig from "./firebase";
import axios from "axios";
import FishItem from "./components/FishItem.vue";
import GridLayout from "./components/layout/GridLayout.vue";
import FishForm from "./components/FishForm.vue";
// import BaseSpinner from "./components/UI/BaseSpinner.vue";
import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";

export default {
  components: {
    FishItem,
    FishForm,
    GridLayout,
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
      console.log(responseData[key])
      this.fishes.push(fish);
    }
    this.isLoading = false;
  },

  data() {
    return {
      isLoading: true,
      isAdding: false,
      fishes: [],
    };
  },

  methods: {
    async insertImageToStore(file) {
      const app = initializeApp(firebaseConfig);
      const storage = getStorage(app);
      const storageRef = ref(storage, `gs://big-fish-79423.appspot.com/${file.name}`);
      try {
        await uploadBytes(storageRef, file);
      } catch (e) {
        throw Error('aaa')
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
    }
  },
};
</script>

<style>
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
