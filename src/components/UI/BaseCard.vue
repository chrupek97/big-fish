<template>
  <div>
    <slot></slot>
  </div>
</template>

<style scoped>
div {
  padding: 2rem;
  border-radius: 0.25rem;
  -webkit-box-shadow: 0px 0px 40px 0px rgba(66, 68, 90, 1);
  -moz-box-shadow: 0px 0px 40px 0px rgba(66, 68, 90, 1);
  box-shadow: 0px 0px 40px 0px rgba(66, 68, 90, 1);
  width: min(500px, 100%);
}
</style>
