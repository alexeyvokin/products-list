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
  <textarea v-model="modelValueWrapper" :class="{ 'base-textarea': true, 'base-textarea--error': error }" />
</template>

<style lang="scss" scoped>
.base-textarea {
  border: 1px solid transparent;
  min-height: 108px;
  width: 100%;
  padding: vars.$form-field-padding;
  resize: none;
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

.base-textarea--error {
  border-color: vars.$danger;
}
</style>
