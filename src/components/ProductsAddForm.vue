<script>
import BaseInput from './BaseInput.vue';
import FormItem from './FormItem.vue';

export default {
  name: 'ProductsAddForm',
  components: {
    BaseInput,
    FormItem,
  },
};
</script>

<template>
  <form class="products-add-form">
    <div class="products-add-form__fields">
      <FormItem label="Наименование товара" required>
        <BaseInput type="text" placeholder="Введите наименование товара" />
      </FormItem>
      <FormItem label="Описание товара" />
      <FormItem label="Ссылка на изображение товара" required>
        <BaseInput type="text" placeholder="Введите ссылку" />
      </FormItem>
      <FormItem label="Цена товара">
        <BaseInput type="text" placeholder="Введите цену" />
      </FormItem>
    </div>
  </form>
</template>

<style lang="scss" scoped>
.products-add-form__fields {
  margin-bottom: vars.$space-3;
}
</style>
