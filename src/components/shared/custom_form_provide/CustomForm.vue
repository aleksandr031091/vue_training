<template>
  <form class="customForm" v-on="$listeners">
    <slot name="title"></slot>
    <slot></slot>
    <slot name="button"></slot>
  </form>
</template>

<script>
export default {
  name: "CustomFormProvide",

  provide() {
    return {
      form: this,
    };
  },

  data() {
    return {
      inputs: [],
    };
  },

  methods: {
    registerInput(input) {
      this.inputs.push(input);
    },

    unRegisterInput(input) {
      this.inputs.filter((el) => el !== input);
    },

    validate() {
      return this.input.evry((input) => input.validate());
    },

    reset() {
      this.input.forEach((input) => input.reset());
    },
  },
};
</script>

<style lang="scss" scoped>
.customForm {
  width: 500px;
}
</style>
