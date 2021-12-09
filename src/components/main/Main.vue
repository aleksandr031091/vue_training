<template>
  <div class="main">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "Main",
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 30px;
  min-height: calc(100vh - 150px);
}
</style>
