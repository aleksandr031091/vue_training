<template>
  <div v-if="isOpen" :class="{ modal: true, modal_aside_bar: aasideBarStyled }">
    <slot name="button"></slot>
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Modal",

  props: {
    isOpen: Boolean,

    aasideBarStyled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.modal {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgb(255, 255, 255);
  box-shadow: 0px 0px 20px 1px rgb(94, 94, 94);

  &_aside_bar {
    width: 500px;
  }
}
</style>
