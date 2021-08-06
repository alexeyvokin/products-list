<script>
import LayoutPage from '@/layouts/LayoutPage.vue';

import PageTitle from '@/components/PageTitle.vue';

import BaseCard from '@/components/BaseCard.vue';

import ProductsAddForm from '@/components/ProductsAddForm.vue';
import ProductsList from '@/components/ProductsList.vue';

const viewOptions = {
  DEFAULT: 'по умолчанию',
  SORT_BY_NAME: 'по наименованию',
  SORT_BY_PRICE_DESC: 'по убыванию',
  SORT_BY_PRICE_ASC: 'по возрастанию',
};

export default {
  viewOptions: Object.values(viewOptions),

  name: 'Products',

  components: {
    PageTitle,
    BaseCard,
    LayoutPage,
    ProductsAddForm,
    ProductsList,
  },

  data() {
    return {
      view: viewOptions.DEFAULT,
    };
  },
};
</script>

<template>
  <LayoutPage class="products">
    <template #header>
      <div class="products__header">
        <PageTitle>Добавление товара</PageTitle>
      </div>
    </template>

    <template #sidebar>
      <BaseCard class="products__form">
        <ProductsAddForm />
      </BaseCard>
    </template>

    <ProductsList />
  </LayoutPage>
</template>

<style lang="scss" scoped>
// .products {}
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
