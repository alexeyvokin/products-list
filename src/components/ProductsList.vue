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
  <transition-group name="products-list" tag="ul" class="products-list">
    <li v-for="item in list" :key="item.id" class="products-list__item">
      <ProductsItemCard
        :name="item.name"
        :description="item.description"
        :price="item.price"
        :preview="item.preview"
        @delete="deleteItem(item)"
      />
    </li>
  </transition-group>
</template>

<style lang="scss" scoped>
.products-list {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  margin: 0;
}

.products-list__item {
  width: calc(33.33% - #{(vars.$space-2 * 2) / 3});
  flex-grow: 0;

  @include mixins.media('lg', 'from') {
    &:nth-last-child(n + 4) {
      margin-bottom: vars.$space-2;
    }

    &:not(:nth-child(3n)) {
      margin-right: vars.$space-2;
    }
  }

  @include mixins.media('lg', 'to') {
    width: calc(50% - #{vars.$space-2 / 2});

    @include mixins.media('sm', 'from') {
      &:nth-last-child(n + 3) {
        margin-bottom: vars.$space-2;
      }

      &:not(:nth-child(2n)) {
        margin-right: vars.$space-2;
      }
    }
  }

  @include mixins.media('sm', 'to') {
    width: 100%;

    &:nth-last-child(n + 2) {
      margin-bottom: vars.$space-2;
    }
  }
}

.products-list-move {
  transition: transform 1s;
}

.products-list-enter,
.products-list-leave-to {
  opacity: 0;
  transform: translateY(-50%);
}

.products-list-enter-active,
.products-list-leave-active {
  transition: all 1s;
}

.products-list-leave-active {
  position: absolute;
}

.products-list-enter-to,
.products-list-leave {
  opacity: 1;
}
</style>
