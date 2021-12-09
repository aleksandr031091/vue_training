<template>
  <div class="navigation">
    <ul class="navigation_list">
      <li
        class="navigation_list_item"
        v-for="route of routes"
        :key="route.path"
      >
        <router-link :to="route.path">{{ route.name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import routes from "../../route/router";

export default {
  name: "Navigation",

  data() {
    return { routes: [...routes] };
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  &_list {
    display: flex;
    justify-content: space-between;
    align-items: center;

    &_item {
      padding: 1px;
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
