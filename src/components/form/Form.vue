<template>
  <form>
    <slot :name="title"></slot>
    <slot></slot>
  </form>
</template>

<script>
export default {
  name: "Form",

  props: {
    title: String,
  },
};
</script>

<style lang="scss" scoped></style>
