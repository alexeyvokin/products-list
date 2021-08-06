<script>
export default {
  name: 'BaseInput',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
  },

  computed: {
    modelValueWrapper: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<template>
  <input v-model="modelValueWrapper" :class="{ 'base-input': true, 'base-input--error': error }" />
</template>

<style lang="scss" scoped>
.base-input {
  border: 1px solid transparent;
  width: 100%;
  padding: vars.$form-field-padding;
  border-radius: vars.$form-field-border-radius;
  box-shadow: vars.$form-field-shadow;
  font-size: vars.$form-field-font-size;
  transition: all vars.$transition-duration;

  &::placeholder {
    color: vars.$form-field-placeholder-color;
  }

  &:hover,
  &:focus {
    box-shadow: vars.$form-field-shadow-focus;
  }
}

.base-input--error {
  border-color: vars.$danger;
}
</style>
