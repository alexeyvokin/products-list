<script>
export default {
  name: 'BaseCard',

  props: {
    tag: {
      type: String,
      default: 'div',
    },
  },
};
</script>

<template>
  <component :is="tag" class="base-card">
    <slot />
  </component>
</template>

<style lang="scss" scoped>
.base-card {
  box-shadow: vars.$card-shadow;
  background-color: vars.$card-background;
  border-radius: vars.$card-border-radius;
}
</style>
