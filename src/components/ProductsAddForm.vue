<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import BaseInput from './BaseInput.vue';
import BaseInputPrice from './BaseInputPrice.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseButton from './BaseButton.vue';
import FormItem from './FormItem.vue';

const createFormModel = () => ({
  name: '',
  description: '',
  preview: '',
  price: 0,
});

export default {
  name: 'ProductsAddForm',

  components: {
    ValidationObserver,
    ValidationProvider,
    BaseInput,
    BaseInputPrice,
    BaseTextarea,
    BaseButton,
    FormItem,
  },

  data() {
    return {
      form: createFormModel(),
    };
  },

  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.form });
      this.$refs.form.reset();
      this.form = createFormModel();
    },
  },
};
</script>

<template>
  <ValidationObserver v-slot="{ valid }" ref="form" tag="form" class="products-add-form" @submit.prevent="handleSubmit">
    <div class="products-add-form__fields">
      <ValidationProvider v-slot="{ errors }" rules="required">
        <FormItem label="Наименование товара" required>
          <BaseInput
            v-model="form.name"
            name="name"
            type="text"
            placeholder="Введите наименование товара"
            :error="!!errors[0]"
          />

          <template v-if="errors[0]" #errors>
            {{ errors[0] }}
          </template>
        </FormItem>
      </ValidationProvider>

      <FormItem label="Описание товара">
        <BaseTextarea v-model="form.description" name="description" placeholder="Введите описание товара" />
      </FormItem>

      <ValidationProvider v-slot="{ errors }" rules="required">
        <FormItem label="Ссылка на изображение товара" required>
          <BaseInput
            v-model="form.preview"
            name="preview"
            type="url"
            placeholder="Введите ссылку"
            :error="!!errors[0]"
          />

          <template v-if="errors[0]" #errors>
            {{ errors[0] }}
          </template>
        </FormItem>
      </ValidationProvider>

      <ValidationProvider v-slot="{ errors }" rules="min_value:1">
        <FormItem label="Цена товара" required>
          <BaseInputPrice
            v-model="form.price"
            name="price"
            type="text"
            placeholder="Введите цену"
            :error="!!errors[0]"
          />

          <template v-if="errors[0]" #errors>
            {{ errors[0] }}
          </template>
        </FormItem>
      </ValidationProvider>
    </div>

    <BaseButton type="submit" :disabled="!valid">Добавить товар</BaseButton>
  </ValidationObserver>
</template>

<style lang="scss" scoped>
.products-add-form__fields {
  margin-bottom: vars.$space-1;
}
</style>
