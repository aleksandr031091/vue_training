<template>
  <label class="custom_select">
    {{ label }}
    <select class="custom_select input" v-on="listener">
      <option
        v-for="item of formatedItems"
        :key="item.value"
        :value="item.value"
        :selected="item.selected"
      >
        {{ item.label }}
      </option>
    </select>
  </label>
</template>

<script>
export default {
  name: "CustomSelect",

  props: {
    items: {
      type: Array,
    },

    label: {
      type: String,
      default: "?",
    },
  },

  computed: {
    listener() {
      return {
        ...this.$listeners,

        input: (event) => this.$emit("input", event.target.value),
      };
    },

    formatedItems() {
      return this.items.map((item) => {
        return typeof item === "object" ? item : { value: item, label: item };
      });
    },
  },
};
</script>

<style lang="scss" scoped>
.custom_select {
  display: flex;
  flex-direction: column;
  color: steelblue;

  &.input {
    padding: 5px;
    border: 1px solid rgb(40, 46, 129);
  }
}
</style>
