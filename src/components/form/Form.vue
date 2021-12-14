<template>
  <form class="form" @submit.prevent="handleSubmit">
    <slot name="title"></slot>
    <slot></slot>
    <slot name="button"></slot>
  </form>
</template>

<script>
export default {
  name: "Form",

  methods: {
    handleSubmit() {
      this.$emit("submit", "form submited");
    },
  },
};
</script>

<style lang="scss" scoped>
.form {
  width: 500px;
  margin-bottom: 50px;
}
</style>
