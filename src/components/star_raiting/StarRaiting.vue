<template>
  <div class="star_raiting">
    <span v-for="idx in limit" :key="idx" class="star star_colored"></span>

    <div class="star_raiting_fullfilled" :style="raitingWidthStyle">
      <span v-for="idx in limit" :key="idx" class="star star_outline"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "StarRaiting",

  props: {
    rating: {
      type: Number,
      require: true,
    },
    limit: {
      type: Number,
      default: 5,
    },
  },

  computed: {
    raitingWidth() {
      return (this.rating / this.limit) * 100;
    },

    raitingWidthStyle() {
      return `width: ${this.raitingWidth}%;`;
    },
  },
};
</script>

<style lang="scss" scoped>
.star_raiting {
  position: relative;
  display: inline-flex;

  &_fullfilled {
    display: inline-flex;
    position: absolute;
    width: 0;
    height: 100%;
    top: 0;
    left: 0;
    overflow: hidden;
  }
}

.star {
  display: inline-block;

  width: 15px;
  height: 15px;
  margin: 0 3px;
  flex-shrink: 0;

  &_colored {
    background: url("../../assets/images/star.svg") center no-repeat;
  }
  &_outline {
    background: url("../../assets/images/star_outline.svg") center no-repeat;
  }
}
</style>
