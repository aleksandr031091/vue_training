<template>
  <div class="main">
    <h1>main</h1>
    <Btn v-show="!isOpenMap" @click="onOpenMap">Open map</Btn>
    <Map :isOpen="isOpenMap">
      <Btn :btnMapstyled="true" @click="onOpenMap">
        <svg width="30px" height="30px">
          <use href="../../assets/images/sprite.svg#icon-close"></use>
        </svg>
      </Btn>
    </Map>
  </div>
</template>

<script>
import Btn from "../Btn/Btn.vue";
import Map from "../map/Map.vue";

export default {
  name: "Main",

  data() {
    return {
      isOpenMap: false,
    };
  },

  components: { Map, Btn },

  methods: {
    onOpenMap() {
      this.isOpenMap = !this.isOpenMap;
    },
  },
};
</script>

<style lang="scss" scoped>
.main {
  padding: 0 30px;
  min-height: calc(100vh - 150px);
}
</style>
