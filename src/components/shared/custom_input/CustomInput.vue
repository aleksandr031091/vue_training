<template>
  <label class="label">
    {{ label }}
    <input type="text" :class="{ input: true }" v-on="listener" />
  </label>
</template>

<script>
export default {
  name: "CustomInput",

  props: {
    label: String,
  },

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
.label {
  display: flex;
  flex-direction: column;
  color: steelblue;
}
.input {
  padding: 5px;
  border: 1px solid rgb(40, 46, 129);
}
</style>
