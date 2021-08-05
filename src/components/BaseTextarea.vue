<script>
export default {
  name: 'BaseTextarea',

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
  <textarea v-model="modelValueWrapper" class="base-textarea" />
</template>

<style lang="scss" scoped>
.base-textarea {
  min-height: 108px;
  width: 100%;
  padding: vars.$form-field-padding;
  resize: none;
  border: none;
  border-radius: vars.$form-field-border-radius;
  box-shadow: vars.$form-field-shadow;
  font-size: vars.$form-field-font-size;

  &::placeholder {
    color: vars.$form-field-placeholder-color;
  }
}
</style>
