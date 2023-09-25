<template>
  <div>
    <base-card class="card">
      <div class="image-box" @click="onClickImage">
        <img :src="imageUrl" />
      </div>
      <div class="info-box">
        <div class="caption-box">
          <div class="bold">Wyłowił</div>
          <div class="value">{{ owner }}</div>
        </div>
        <div class="caption-box">
          <div class="bold">Waga</div>
          <div class="value">{{ weight }} kg</div>
        </div>
        <div class="caption-box">
          <div class="bold">Ryba</div>
          <div class="value">{{ type }}</div>
        </div>
        <div class="caption-box">
          <div class="bold">Przynęta</div>
          <div class="value">{{ bait }}</div>
        </div>
        <div>{{ additionalInfo }}</div>
      </div>
      <div class="bottom-box">
        <div>{{ formattedDate }}</div>
      </div>
      <div class="buttons-box" v-if="isAuth">
        <button class="btn btn-danger" @click="removeFish">Usuń</button>
      </div>
    </base-card>
  </div>
</template>

<script>
export default {
  props: [
    "id",
    "owner",
    "weight",
    "type",
    "bait",
    "additionalInfo",
    "imageName",
    "date",
    "setImageUrl",
    "deleteFish",
    "setIsEditing",
  ],
  methods: {
    onClickImage() {
      this.setImageUrl(this.imageUrl);
    },
    async removeFish() {
      this.setIsEditing(true);
      await this.deleteFish(this.id);
      this.setIsEditing(false);
    },
  },
  computed: {
    formattedDate() {
      return this.date.toLocaleString("pl-PL");
    },
    imageUrl() {
      return `https://firebasestorage.googleapis.com/v0/b/big-fish-79423.appspot.com/o/${this.imageName}?alt=media&token=7748ae36-118b-441c-aafc-bc827bda53e1`;
    },
    isAuth() {
      return this.$store.getters.userIsLoggedIn;
    },
  },
  data() {
    return {
      isRemoving: false,
    };
  },
};
</script>

<style scoped>
div {
  position: relative;
}

ul {
  list-style: none;
}

.value {
  text-align: right;
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
  background-color: var(--primary-color);
  text-align: center;
}

img {
  object-fit: cover;
  width: 100%;
  height: 100%;
  border-top-left-radius: 0.25rem;
  border-top-right-radius: 0.25rem;
  /* min-height: 100px; */
}

.image-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
}

.buttons-box {
  position: absolute;
  right: 0;
  left: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: -1;
  transition: all 0.5s ease-in-out;
}

.image-box:hover {
  cursor: pointer;
}

.card:hover > .buttons-box {
  transform: translateY(25px);
  transition: all 0.5s ease-in-out;
}
</style>
