<script>
import createTextMaskInputElement from 'text-mask-core/src/createTextMaskInputElement';

export const TEXT_MASK_CONFIG_DEFAULT = {
  guide: false,
  placeholderChar: '#',
};

export const TEXT_MASK_AVAILABLE_INPUT_TYPES = ['text', 'tel', 'url', 'password', 'search'];

export default {
  name: 'BaseInput',

  model: {
    prop: 'modelValue',
    event: 'update:modelValue',
  },

  props: {
    modelValue: {
      type: [String, Number],
      default: '',
    },
    error: {
      type: Boolean,
      default: false,
    },
    type: {
      type: String,
      default: 'text',
    },
    mask: {
      type: [String, Array, Function],
      default: null,
    },
  },

  data() {
    return {
      textMask: null,
      localValue: '',
    };
  },

  computed: {
    modelValueWrapper: {
      get() {
        return this.localValue;
      },
      set(value) {
        if (this.textMask) {
          this.updateTextMaskValue(value);
        } else {
          this.localValue = value;
          this.$emit('update:modelValue', this.localValue);
        }
      },
    },
    isValidTypeForMask() {
      // see more: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#known-issues
      return TEXT_MASK_AVAILABLE_INPUT_TYPES.includes(this.type);
    },
  },

  watch: {
    modelValue: {
      immediate: true,
      handler(newValue) {
        if (this.textMask) {
          this.updateTextMaskValue(newValue);
        } else {
          this.localValue = newValue;
        }
      },
    },
    mask() {
      this.bindTextMask();
    },
    type() {
      this.bindTextMask();
    },
  },

  mounted() {
    this.bindTextMask();
  },

  methods: {
    bindTextMask() {
      if (this.mask && this.isValidTypeForMask) {
        this.textMask = Object.freeze(
          createTextMaskInputElement({
            inputElement: this.$refs.input,
            // more options: https://github.com/text-mask/text-mask/blob/master/componentDocumentation.md#readme
            mask: this.mask,
            ...TEXT_MASK_CONFIG_DEFAULT,
          })
        );

        // format value by mask and emit 'input' event
        this.updateTextMaskValue(this.localValue);
      } else {
        this.textMask = null;
      }
    },
    updateTextMaskValue(value) {
      this.textMask.update(value);
      this.localValue = this.$refs.input.value;

      // not fire 'input' event, if value is not changed
      if (this.localValue !== this.value) {
        this.$emit('update:modelValue', this.localValue);
      }
    },
  },
};
</script>

<template>
  <input
    ref="input"
    v-model="modelValueWrapper"
    :type="type"
    :class="{ 'base-input': true, 'base-input--error': error }"
  />
</template>

<style lang="scss" scoped>
.base-input {
  border: 1px solid transparent;
  width: 100%;
  padding: vars.$form-field-padding;
  border-radius: vars.$form-field-border-radius;
  box-shadow: vars.$form-field-shadow;
  font-size: vars.$form-field-font-size;
  transition: all vars.$transition-duration;

  &::placeholder {
    color: vars.$form-field-placeholder-color;
  }

  &:hover,
  &:focus {
    box-shadow: vars.$form-field-shadow-focus;
  }
}

.base-input--error {
  border-color: vars.$danger;
}
</style>
