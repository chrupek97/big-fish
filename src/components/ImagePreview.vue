<template>
  <div class="transparent-box">
    <div class="image-preview-box">
      <div class="close-button" @click="close">X</div>
      <img :src="imageUrl" />
    </div>
  </div>
</template>

<script>
export default {
  props: ["imageUrl", "setImageUrl"],
  methods: {
    close() {
      this.setImageUrl("");
    },
  },
};
</script>

<style scoped>
.transparent-box {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(0.25rem);
  z-index: 1;
}

.image-preview-box {
  position: relative;
  width: 90%;
  background: white;
  border-radius: 1rem;
  -webkit-box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 5px 0px rgba(66, 68, 90, 1);
  margin: 5vh auto;
}

img {
  width: 90vw;
  border-radius: 1rem;
  height: 90vh;
  object-fit: contain;
}

.close-button {
  position: absolute;
  color: var(--primary-color);
  font-weight: bold;;
  top: 20px;
  right: 30px;
  font-size: 20px;
}

.close-button:hover {
  cursor: pointer;
}
</style>
