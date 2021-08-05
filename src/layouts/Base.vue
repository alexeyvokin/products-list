<template>
  <div class="base-layout">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'BaseLayout',
};
</script>

<style lang="scss">
.base-layout {
  background-color: $app-background;
  padding: $space-4;
}
</style>
