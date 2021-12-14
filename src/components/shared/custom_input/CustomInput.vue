<template>
  <label class="label">
    {{ label }}
    <input
      :class="{ input: true, input_error: !isValid && true }"
      v-on="listener"
      v-bind="$attrs"
    />
    <span v-if="!isValid" class="label_validate">{{ error }}</span>
  </label>
</template>

<script>
export default {
  name: "CustomInput",

  inheritAttrs: false,

  inject: {
    form: {
      default: null,
    },
  },

  data() {
    return {
      isValid: true,
      error: "",
    };
  },

  props: {
    value: {
      type: String,
      default: "",
    },

    errorMessage: {
      type: String,
      default: "",
    },

    rules: {
      type: Array,
      default: () => [],
    },

    label: String,
  },

  mounted() {
    if (!this.form) return;
    this.form.registerInput(this);
  },

  beforeDestroy() {
    if (!this.form) return;
    this.form.unRegisterInput(this);
  },

  watch: {
    value(value) {
      this.validate(value);
    },
  },

  computed: {
    listener() {
      return {
        ...this.$listeners,

        input: (event) => this.$emit("input", event.target.value),
      };
    },
  },

  methods: {
    validate(value) {
      this.isValid = this.rules.every((rule) => {
        const { hasPassed, message } = rule(value);

        if (!hasPassed) {
          this.error = message;
        }

        return hasPassed;
      });
    },

    reset() {
      this.$emit("input", "");
    },
  },
};
</script>

<style lang="scss" scoped>
.label {
  position: relative;
  display: flex;
  flex-direction: column;
  color: steelblue;

  &_validate {
    position: absolute;
    top: 100%;
    left: 0;
    font-size: 12px;
    color: tomato;
  }
}

.input {
  padding: 5px;
  border: 1px solid rgb(40, 46, 129);

  &_error {
    border: 1px solid rgb(255, 72, 16);
  }
}
</style>
