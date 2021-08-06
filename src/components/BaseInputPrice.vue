<script>
import BaseInput from './BaseInput.vue';
import { priceMask } from '../helpers/text-mask.js';

export default {
  priceMask,

  name: 'BaseInputPrice',

  components: {
    BaseInput,
  },

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
        this.$emit('update:modelValue', this.priceValue);
      },
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
  <BaseInput v-model="modelValueWrapper" :mask="$options.priceMask" type="text" inputmode="numeric" />
</template>
