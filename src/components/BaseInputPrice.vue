<script>
import BaseInput from './BaseInput.vue';
import { priceMask } from '../helpers/text-mask.js';

export default {
  priceMask,

  name: 'BaseInputPrice',

  components: {
    BaseInput,
  },

  inheritAttrs: false,

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
  },

  data() {
    return {
      localValue: '',
    };
  },

  computed: {
    priceValue() {
      return Number(this.localValue.replace(/[^\d]+/g, ''));
    },
    modelValueWrapper: {
      get() {
        return this.localValue;
      },
      set(value) {
        this.localValue = value;
        if (this.modelValue !== this.priceValue) {
          this.$emit('update:modelValue', this.priceValue);
        }
      },
    },
    inheritedListeners() {
      const { 'update:modelValue': _udpateModelValue, ...inheritedListeners } = this.$listeners;
      return inheritedListeners;
    },
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        this.localValue = newValue;
      },
    },
  },
};
</script>

<template>
  <BaseInput
    v-model="modelValueWrapper"
    v-bind="$attrs"
    :mask="$options.priceMask"
    type="text"
    inputmode="numeric"
    v-on="inheritedListeners"
  />
</template>
