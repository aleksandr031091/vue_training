<template>
  <button class="btn" :type="type" @click="$emit('click', $event)">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "Btn",

  props: {
    type: {
      type: String,
      default: "button",
    },
  },
};
</script>

<style lang="scss" scoped>
.btn {
  padding: 5px 20px;
  color: rgb(61, 61, 61);
  background-color: rgb(149, 234, 255);
  border: none;
  border-radius: 5px;
  box-shadow: 0px 0px 5px 0px rgb(94, 94, 94);
  cursor: pointer;

  &:hover,
  :focus {
    background-color: rgb(124, 255, 205);
    box-shadow: 0px 0px 5px 0px rgb(38, 0, 255);
  }
}
</style>
