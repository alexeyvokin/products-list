<script>
export default {
  name: 'BaseInput',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
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
  <input v-model="modelValueWrapper" class="base-input" />
</template>

<style lang="scss" scoped>
.base-input {
  height: 36px;
  width: 100%;
  padding: 0 vars.$space-2;
  border: none;
  box-shadow: vars.$form-field-shadow;
  font-size: vars.$form-field-font-size;

  &::placeholder {
    color: vars.$form-field-placeholder-color;
  }
}
</style>
