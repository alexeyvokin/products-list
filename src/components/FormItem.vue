<script>
export default {
  name: 'FormItem',

  props: {
    label: {
      type: String,
      required: true,
    },
    required: {
      type: Boolean,
      default: false,
    },
  },
};
</script>

<template>
  <div class="form-item">
    <label :class="{ 'form-item__label': true, 'form-item__label--required': required }">{{ label }}</label>

    <div class="form-item__field">
      <slot />
    </div>

    <div class="form-item__errors">
      <slot name="errors" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use "sass:math";

.form-item {
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: 2px;
  }
}

.form-item__label {
  font-size: vars.$font-size-x-small;
  margin-bottom: math.div(vars.$space-1, 2);
}

.form-item__label--required {
  &::after {
    content: '';
    display: inline-block;
    vertical-align: text-top;
    width: 4px;
    height: 4px;
    border-radius: 100%;
    background-color: vars.$danger;
  }
}

.form-item__field {
  margin-bottom: 4px;
}

.form-item__errors {
  min-height: 10px;
  line-height: 10px;
  font-size: vars.$font-size-xx-small;
  color: vars.$danger;
  margin-bottom: 2px;
}
</style>
