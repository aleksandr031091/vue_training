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
  position: relative;
  width: 100%;
  height: calc(100vh - 60px);
  background-color: silver;
}
</style>
