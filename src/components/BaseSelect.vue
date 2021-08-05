<script>
export default {
  name: 'BaseSelect',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: String,
      default: '',
    },
    options: {
      type: Array,
      required: true,
    },
  },

  computed: {
    modelValueWrapper: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit('update:modelValue', value);
      },
    },
  },
};
</script>

<template>
  <select v-model="modelValueWrapper" class="base-select">
    <option v-for="(option, index) in options" :key="index">
      {{ option }}
    </option>
  </select>
</template>

<style lang="scss" scoped>
.base-select {
  display: inline-block;
}
</style>
