<script>
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
  <form class="products-add-form" @submit.prevent="handleSubmit">
    <div class="products-add-form__fields">
      <FormItem label="Наименование товара" required>
        <BaseInput v-model="form.name" name="name" type="text" placeholder="Введите наименование товара" />
      </FormItem>
      <FormItem label="Описание товара">
        <BaseTextarea v-model="form.description" name="description" placeholder="Введите описание товара" />
      </FormItem>
      <FormItem label="Ссылка на изображение товара" required>
        <BaseInput v-model="form.preview" name="preview" type="text" placeholder="Введите ссылку" />
      </FormItem>
      <FormItem label="Цена товара" required>
        <BaseInput v-model.number="form.price" name="price" type="text" placeholder="Введите цену" />
      </FormItem>
    </div>

    <BaseButton type="submit">Добавить товар</BaseButton>
  </form>
</template>

<style lang="scss" scoped>
.products-add-form__fields {
  margin-bottom: vars.$space-3;
}
</style>
