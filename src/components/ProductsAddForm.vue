<script>
import { ValidationObserver, ValidationProvider } from 'vee-validate';

import BaseInput from './BaseInput.vue';
import BaseTextarea from './BaseTextarea.vue';
import BaseButton from './BaseButton.vue';
import FormItem from './FormItem.vue';

const createFormModel = () => ({
  name: '',
  description: '',
  preview: '',
  price: '',
});

export default {
  name: 'ProductsAddForm',

  components: {
    ValidationObserver,
    ValidationProvider,
    BaseInput,
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
      this.form = createFormModel();
    },
  },
};
</script>

<template>
  <ValidationObserver
    v-slot="{ invalid }"
    tag="form"
    class="products-add-form"
    @submit.prevent="!invalid && handleSubmit()"
  >
    {{ invalid }}
    <div class="products-add-form__fields">
      <FormItem label="Наименование товара" required>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <BaseInput v-model="form.name" name="name" type="text" placeholder="Введите наименование товара" />
          {{ errors }}
        </ValidationProvider>
      </FormItem>
      <FormItem label="Описание товара">
        <BaseTextarea v-model="form.description" name="description" placeholder="Введите описание товара" />
      </FormItem>
      <FormItem label="Ссылка на изображение товара" required>
        <ValidationProvider v-slot="{ errors }" rules="required|url">
          <BaseInput v-model="form.preview" name="preview" type="text" placeholder="Введите ссылку" />
          {{ errors }}
        </ValidationProvider>
      </FormItem>
      <FormItem label="Цена товара" required>
        <ValidationProvider v-slot="{ errors }" rules="required">
          <BaseInput v-model.number="form.price" name="price" type="text" placeholder="Введите цену" />
          {{ errors }}
        </ValidationProvider>
      </FormItem>
    </div>

    <BaseButton type="submit" :disabled="invalid">Добавить товар</BaseButton>
  </ValidationObserver>
</template>

<style lang="scss" scoped>
.products-add-form__fields {
  margin-bottom: vars.$space-3;
}
</style>
