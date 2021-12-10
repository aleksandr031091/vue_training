<template>
  <button
    :class="{ button: true, button_modal: btnMapstyled }"
    :type="type"
    @click="$emit('click', $event)"
  >
    <slot>send</slot>
  </button>
</template>

<script>
export default {
  name: "Button",

  props: {
    type: {
      type: String,
      default: "button",
    },

    btnMapstyled: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<style lang="scss" scoped>
.button {
  padding: 5px 20px;
  color: rgb(255, 115, 0);
  background-color: rgb(149, 234, 255);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(94, 94, 94);
  cursor: pointer;

  &:hover,
  &:focus {
    color: orange;
    background-color: rgb(124, 255, 205);
    box-shadow: 0px 0px 5px 0px rgb(38, 0, 255);
  }

  &_modal {
    position: absolute;
    top: 10px;
    right: 10px;
    padding: 10px;
    fill: rgb(255, 115, 0);
    border-radius: 50%;

    &:hover,
    &:focus {
      fill: orange;
      background-color: rgb(124, 255, 205);
      box-shadow: 0px 0px 5px 0px rgb(38, 0, 255);
    }
  }
}
</style>
