<template>
  <input type="text" :class="{ input: true }" v-on="listener" />
</template>

<script>
export default {
  name: "CustomInput",

  computed: {
    listener() {
      return {
        ...this.$listeners,

        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  padding: 5px;
  border: 1px solid rgb(40, 46, 129);
}
</style>
