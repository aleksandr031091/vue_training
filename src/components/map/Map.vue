<template>
  <div v-if="isOpen" class="map">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Map",

  props: {
    isOpen: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.map {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: calc(100vh);
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px 1px rgb(94, 94, 94);
}
</style>
