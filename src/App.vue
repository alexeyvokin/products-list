<script>
export default {
  name: 'App',
};
</script>

<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="scss" scoped>
#app {
  // prevent margin collapse
  &::after {
    content: '';
    display: table;
  }
}
</style>
