<script>
export default {
  name: 'BaseLayout',
};
</script>

<template>
  <div class="base-layout">
    <router-view />
  </div>
</template>

<style lang="scss">
.base-layout {
  background-color: vars.$app-background;
  padding: vars.$space-4;
}
</style>
