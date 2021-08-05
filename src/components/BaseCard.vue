<script>
export default {
  name: 'BaseCard',
};
</script>

<template>
  <div class="base-card">
    <slot />
  </div>
</template>

<style lang="scss" scoped>
.base-card {
  box-shadow: vars.$card-shadow;
  background-color: vars.$card-background;
  border-radius: vars.$card-border-radius;
}
</style>
