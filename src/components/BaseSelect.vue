<script>
export default {
  name: 'BaseSelect',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
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
  <div class="base-select">
    <select v-model="modelValueWrapper" class="base-select__input">
      <template v-for="option in options">
        <option :key="option.value" :value="option.value">
          {{ option.label }}
        </option>
      </template>
    </select>
  </div>
</template>

<style lang="scss" scoped>
$arrow-size: 5px;

.base-select {
  border: 1px solid transparent;
  position: relative;
  display: inline-block;
  color: vars.$form-field-placeholder-color;

  &::after {
    position: absolute;
    top: 50%;
    right: vars.$space-2;
    content: '';
    display: block;
    width: $arrow-size;
    height: $arrow-size;
    border-style: solid;
    border-width: 0 1px 1px 0;
    border-color: currentColor;
    transform-origin: top right;
    transform: rotate(45deg) translateY(-50%);
  }
}

.base-select__input {
  cursor: pointer;
  border: none;
  color: currentColor;
  border-radius: vars.$form-field-border-radius;
  box-shadow: vars.$form-field-shadow;
  transition: all vars.$transition-duration;
  font-size: vars.$form-field-font-size;
  padding: 10px 29px 11px vars.$space-2;
  appearance: none;

  &:hover,
  &:focus {
    box-shadow: vars.$form-field-shadow-focus;
  }
}
</style>
