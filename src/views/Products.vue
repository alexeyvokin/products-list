<script>
import LayoutPage from '@/layouts/LayoutPage.vue';

import PageTitle from '@/components/PageTitle.vue';

import BaseSelect from '@/components/BaseSelect.vue';
import BaseCard from '@/components/BaseCard.vue';

import ProductsAddForm from '@/components/ProductsAddForm.vue';
import ProductsList from '@/components/ProductsList.vue';

import { ACTIONS, mapActions, mapState } from '@/store/modules/products.js';

const viewValues = {
  DEFAULT: 'default',
  SORT_BY_NAME: 'sortByName',
  SORT_BY_PRICE_DESC: 'sortByPriceDesc',
  SORT_BY_PRICE_ASC: 'sortByPriceAsc',
};

const viewOptions = [
  { label: 'по умолчанию', value: viewValues.DEFAULT },
  { label: 'по наименованию', value: viewValues.SORT_BY_NAME },
  { label: 'по убыванию', value: viewValues.SORT_BY_PRICE_DESC },
  { label: 'по возрастанию', value: viewValues.SORT_BY_PRICE_ASC },
];

export default {
  viewOptions,

  name: 'Products',

  components: {
    PageTitle,
    BaseSelect,
    BaseCard,
    LayoutPage,
    ProductsAddForm,
    ProductsList,
  },

  data() {
    return {
      view: viewValues.DEFAULT,
    };
  },

  computed: {
    ...mapState({
      products: 'list',
    }),
    sortedProducts() {
      if (this.view === viewValues.SORT_BY_NAME) {
        return this.products.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
      }
      if (this.view === viewValues.SORT_BY_PRICE_DESC) {
        return this.products.slice().sort((a, b) => (+a.price < +b.price ? 1 : -1));
      }
      if (this.view === viewValues.SORT_BY_PRICE_ASC) {
        return this.products.slice().sort((a, b) => (+a.price > +b.price ? 1 : -1));
      }
      return this.products;
    },
  },

  created() {
    this.initProducts();
  },

  methods: {
    ...mapActions({
      initProducts: ACTIONS.PRODUCTS_INIT,
      addProduct: ACTIONS.PRODUCTS_ADD_ITEM,
      deleteProduct: ACTIONS.PRODUCTS_DELETE_ITEM,
    }),
  },
};
</script>

<template>
  <LayoutPage class="products">
    <template #header>
      <div class="products__header">
        <PageTitle>Добавление товара</PageTitle>
        <div class="products__spacer"></div>
        <BaseSelect v-model="view" :options="$options.viewOptions" />
      </div>
    </template>

    <template #sidebar>
      <BaseCard class="products__form">
        <ProductsAddForm @submit="addProduct" />
      </BaseCard>
    </template>

    <ProductsList :list="sortedProducts" @delete="deleteProduct" />
  </LayoutPage>
</template>

<style lang="scss" scoped>
.products__header {
  display: flex;
}

.products__spacer {
  flex: 1 0 vars.$space-2;
}

.products__form {
  top: vars.$space-3;
  position: sticky;
  padding: vars.$space-3;
}
</style>
