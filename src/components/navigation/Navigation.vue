<template>
  <div class="navigation">
    <ul class="navigation_list">
      <li
        class="navigation_list_item"
        v-for="{ path, name } of routes"
        :key="path"
      >
        <router-link class="router_link" :to="{ name }">{{ name }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import mainRoutes from "../../routes/mainRouters";

export default {
  name: "Navigation",

  computed: {
    routes() {
      return mainRoutes.filter((route) => route.name !== "contact");
    },
  },
};
</script>

<style lang="scss" scoped>
.navigation {
  &_list {
    display: flex;
  }

  &_list_item {
    padding: 1px;
    font-weight: 700;
    font-size: 20px;
    text-transform: capitalize;

    &:not(:last-child) {
      margin-right: 10px;
    }
  }

  .router_link {
    color: rgb(0, 0, 99);
  }
}
</style>
