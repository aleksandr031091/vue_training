<template>
  <div>
    <Button @click="onOpenMap">open map</Button>
    <Map :isOpen="isOpenMap">
      <Button :btnMapstyled="true" @click="onOpenMap">
        <svg width="30px" height="30px">
          <use href="../../assets/images/sprite.svg#icon-close"></use>
        </svg>
      </Button>
    </Map>
  </div>
</template>

<script>
import Button from "../../components/button/Button.vue";
import Map from "../../components/map/Map.vue";

export default {
  name: "MapPage",

  components: { Button, Map },

  data() {
    return {
      isOpenMap: false,
    };
  },

  methods: {
    onOpenMap() {
      this.isOpenMap = !this.isOpenMap;
    },
  },
};
</script>

<style lang="scss" scoped></style>
