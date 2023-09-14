<template>
  <base-card>
    <img :src="imageUrl" />
    <div class="info-box">
      <div class="caption-box">
        <div class="bold">Wyłowił</div>
        <div>{{ owner }}</div>
      </div>
      <div class="caption-box">
        <div class="bold">Waga</div>
        <div>{{ weight }} kg</div>
      </div>
      <div class="caption-box">
        <div class="bold">Ryba</div>
        <div>{{ type }}</div>
      </div>
      <div class="caption-box">
        <div class="bold">Przynęta</div>
        <div>{{ bait }}</div>
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
  props: ["id", "owner", "weight", "type", "bait", "additionalInfo", "imageUrl", "date"],
  computed: {
    formattedDate() {
      return this.date.toLocaleString("pl-PL");
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
  padding: .5rem;
  left: 0;
  right: 0;
  bottom: 0px;
  background-color: var(--primary-color);
  text-align: center;
}

img {
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
</style>
