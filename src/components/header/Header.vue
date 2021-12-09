<template>
  <div class="header">
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
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid rgb(255, 166, 1);
  background-color: rgb(223, 223, 223);
}
</style>
