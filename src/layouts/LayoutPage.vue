<script>
export default {
  name: 'LayoutPage',
};
</script>

<template>
  <div class="layout-page">
    <header class="layout-page__header">
      <slot name="header" />
    </header>

    <aside class="layout-page__sidebar">
      <slot name="sidebar" />
    </aside>

    <main class="layout-page__content">
      <slot />
    </main>
  </div>
</template>

<style lang="scss">
.layout-page {
  display: flex;
  flex-wrap: wrap;
  background-color: vars.$app-background;
  margin: vars.$space-4;

  @include mixins.media('xs', 'to') {
    margin: vars.$space-3;
  }

  @include mixins.media('xxs', 'to') {
    margin: vars.$space-2;
  }
}

.layout-page__header {
  flex: 0 0 100%;
  margin-bottom: vars.$space-2;
}

.layout-page__sidebar {
  position: relative;
  flex: 0 1 calc(25% - #{vars.$space-1});
  margin-right: vars.$space-2;

  @include mixins.media('lg', 'to') {
    flex-basis: calc(33.33% - #{vars.$space-1});
  }

  @include mixins.media('md', 'to') {
    flex-basis: 100%;
    margin-right: 0;
    margin-bottom: vars.$space-2;
  }
}

.layout-page__content {
  flex: 0 1 calc(75% - #{vars.$space-1});

  @include mixins.media('lg', 'to') {
    flex-basis: calc(66.67% - #{vars.$space-1});
  }

  @include mixins.media('md', 'to') {
    flex-basis: 100%;
  }
}
</style>
