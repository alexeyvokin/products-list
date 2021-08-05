<script>
export default {
  name: 'BaseButton',
};
</script>

<template>
  <button class="base-button">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.base-button {
  cursor: pointer;
  width: 100%;
  font-size: vars.$font-size-small;
  font-weight: vars.$font-weight-semibold;
  border: none;
  padding: vars.$button-padding;
  border-radius: vars.$button-border-radius;
  color: vars.$white;
  background-color: vars.$primary;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all vars.$transition-duration;

  &:disabled {
    cursor: not-allowed;
    color: vars.$dark-gray;
    background-color: vars.$gray;
  }

  &:not(:disabled) {
    &:hover,
    &:focus {
      background-color: saturate($color: vars.$primary, $amount: 5);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
    }

    &:active {
      background-color: mix($color1: vars.$primary, $color2: vars.$black, $weight: 90);
    }
  }
}
</style>
