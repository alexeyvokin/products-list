<script>
import ProductsItemCard from './ProductsItemCard.vue';

export default {
  name: 'ProductsList',

  components: {
    ProductsItemCard,
  },
};
</script>

<template>
  <ul class="products-list">
    <li v-for="item in 12" :key="item" class="products-list__item">
      <ProductsItemCard :name="`${item}`" :description="`${item}`" :price="`${item}`" />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.products-list {
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(auto-fit, minmax(332px, 1fr));
  list-style: none;
  padding: 0;
  margin: 0;
  gap: vars.$space-2;
}
</style>
