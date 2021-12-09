<template>
  <div class="navigation">
    <ul class="navigation_list">
      <li class="navigation_list_item">home</li>
      <li class="navigation_list_item">map</li>
      <li class="navigation_list_item">abaut</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Navigation",
};
</script>

<style lang="scss" scoped>
.navigation {
  &_list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_item {
      font-weight: 700;
      font-size: 20px;
      color: green;
      text-transform: capitalize;

      &:not(:last-child) {
        margin-right: 10px;
      }
    }
  }
}
</style>
