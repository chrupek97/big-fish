<template>
  <div>
    <div v-if="isAdding">
      <base-spinner></base-spinner>
    </div>
    <base-card>
      <form @submit.prevent="submitForm">
        <div class="top-box">
          <input type="file" id="myFile" name="filename" @change="onFileChange" />
        </div>
        <div class="info-box">
          <div class="caption-box">
            <div class="bold">Wyłowił</div>
            <div>
              <input type="text" required minlength="3" v-model="newFish.owner" />
            </div>
          </div>
          <div class="caption-box">
            <div class="bold">Waga</div>
            <div>
              <input
                type="number"
                step="0.1"
                min="0.1"
                required
                v-model="newFish.weight"
              />
            </div>
          </div>
          <div class="caption-box">
            <div class="bold">Ryba</div>
            <div><input type="text" minlength="4" required v-model="newFish.type" /></div>
          </div>
          <div class="caption-box">
            <div class="bold">Przynęta</div>
            <div><input type="text" minlength="4" required v-model="newFish.bait" /></div>
          </div>
          <div class="caption-box">
            <div class="bold">Data</div>
            <div><input type="date" required v-model="newFish.date" /></div>
          </div>
          <div class="description-box">
            <textarea
              rows="5"
              placeholder="Dodatkowe informacje (opcjonalnie)"
              v-model="newFish.additionalInfo"
            />
          </div>
        </div>
        <div class="bottom-box">
          <button class="btn-secondary" type="submit">Dodaj</button>
        </div>
      </form>
    </base-card>
  </div>
</template>

<script>
import BaseSpinner from "../components/UI/BaseSpinner.vue";
export default {
  components: {
    BaseSpinner,
  },
  data() {
    return {
      isAdding: false,
      imageFile: {},
      newFish: {
        owner: "",
        weight: "",
        type: "",
        bait: "",
        date: "",
        imageName: "",
        additionalInfo: "",
      },
    };
  },
  props: ["addNewFish"],
  methods: {
    onFileChange(e) {
      const files = e.target.files || e.dataTransfer.files;
      this.newFish.imageName = files[0].name;
      this.imageFile = files[0];
    },
    async submitForm() {
      this.isAdding = true;
      await this.addNewFish(this.imageFile, this.newFish);
      // this.newFish.owner = "";
      // this.newFish.weight = "";
      // this.newFish.type = "";
      // this.newFish.bait = "";
      // this.newFish.date = "";
      // this.newFish.imageName = "";
      // this.newFish.additionalInfo = "";
      this.isAdding = false;
    },
  },
};
</script>

<style scoped>
form {
  /* position: relative; */
}
input {
  width: 150px;
  border: 1px solid;
  padding: 0.1rem;
}

input:focus,
textarea:focus {
  outline: none !important;
  border: 1px solid var(--primary-color);
  box-shadow: 0 0 10px var(--primary-color);
}

input[type="file"] {
  width: 250px;
  border: none;
}

input[type="file"]:focus {
  outline: none;
}

div {
  position: relative;
}

ul {
  list-style: none;
}

textarea {
  margin-top: 1rem;
  width: 100%;
  resize: none;
}

.top-box {
  position: absolute;
  top: 100px;
  left: 0;
  right: 0;
  text-align: center;
}

.bold {
  font-weight: bold;
}

.owner {
  margin-right: 0.75rem;
}

.owners-box {
  display: inline-block;
}

.info-box {
  top: 200px;
}

.caption-box {
  display: flex;
  justify-content: space-between;
}

.bottom-box {
  font-weight: bold;
  position: absolute;
  padding: 0.5rem;
  left: 0;
  right: 0;
  bottom: 0px;
  border-top: 1px solid var(--primary-color);
  text-align: center;
}

img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
