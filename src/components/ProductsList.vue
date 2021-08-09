<script>
import ProductsItemCard from './ProductsItemCard.vue';

export default {
  name: 'ProductsList',

  components: {
    ProductsItemCard,
  },

  props: {
    list: {
      type: Array,
      required: true,
    },
  },

  methods: {
    deleteItem(item) {
      this.$emit('delete', item);
    },
  },
};
</script>

<template>
  <ul class="products-list">
    <li v-for="item in list" :key="item.id" class="products-list__item">
      <ProductsItemCard
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :preview="item.preview"
        @delete="deleteItem(item)"
      />
    </li>
  </ul>
</template>

<style lang="scss" scoped>
.products-list {
  display: grid;
  align-items: stretch;
  grid-template-columns: repeat(3, 1fr);
  list-style: none;
  padding: 0;
  margin: 0;
  gap: vars.$space-2;

  @include mixins.media('lg', 'to') {
    grid-template-columns: repeat(2, 1fr);
  }

  @include mixins.media('sm', 'to') {
    grid-template-columns: 1fr;
  }
}
</style>
