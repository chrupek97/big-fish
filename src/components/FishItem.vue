<template>
  <base-card>
    <div class="image-box">
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
  </base-card>
</template>

<script>
export default {
  props: ["id", "owner", "weight", "type", "bait", "additionalInfo", "imageName", "date"],
  computed: {
    formattedDate() {
      return this.date.toLocaleString("pl-PL");
    },
    imageUrl() {
      return `https://firebasestorage.googleapis.com/v0/b/big-fish-79423.appspot.com/o/${this.imageName}?alt=media&token=7748ae36-118b-441c-aafc-bc827bda53e1`;
    },
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
  /* min-height: 100px; */
}

.image-box {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 200px;
}
</style>
