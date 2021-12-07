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
  width: 100%;
  height: 100vh;
  background-color: silver;
}
</style>
