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
  </div>
</template>

<style lang="scss" scoped>
.form-item {
  display: flex;
  flex-direction: column;

  &:not(:last-child) {
    margin-bottom: vars.$space-2;
  }
}

.form-item__label {
  font-size: vars.$font-size-extra-small;
  margin-bottom: vars.$space-1 / 2;
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
</style>
