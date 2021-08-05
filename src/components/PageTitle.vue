<script>
export default {
  name: 'PageTitle',
};
</script>

<template>
  <h1 class="page-title">
    <slot />
  </h1>
</template>

<style lang="scss" scoped>
.page-title {
  font-size: vars.$font-size-title;
  margin: 0;
}
</style>
