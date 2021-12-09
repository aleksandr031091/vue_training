<template>
  <div class="header">
    <h2>header</h2>
    <Navigation />
  </div>
</template>

<script>
import Navigation from "../navigation/Navigation.vue";

export default {
  name: "Header",

  components: { Navigation },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  height: 50px;
  border-bottom: 1px solid orange;
}
</style>
