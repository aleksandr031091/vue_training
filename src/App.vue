<template>
  <div id="app">
    <Btn v-show="!isOpenMap" @click="onOpenMap">Open map</Btn>
    <Map :isOpen="isOpenMap">
      <Btn :btnMapstyled="true" @click="onOpenMap"></Btn>
    </Map>
  </div>
</template>

<script>
import Btn from "./components/Btn/Btn.vue";
import Map from "./components/map/Map.vue";

export default {
  name: "App",

  data() {
    return {
      isOpenMap: false,
    };
  },

  components: { Map, Btn },

  methods: {
    onOpenMap() {
      console.log("click");
      this.isOpenMap = !this.isOpenMap;
    },
  },
};
</script>

<style lang="scss" scoped>
#app {
  padding: 30px;
  text-align: center;
}
</style>
