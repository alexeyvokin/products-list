<script>
import BaseCard from './BaseCard.vue';

export default {
  name: 'ProductsItemCard',

  components: {
    BaseCard,
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      default: '',
    },
    price: {
      type: String,
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },
};
</script>

<template>
  <BaseCard tag="article" class="products-item-card">
    <div class="products-item-card__preview">
      <img src="/images/preview_stub.png" alt="preview" :title="name" class="products-item-card__image" />
    </div>

    <div class="products-item-card__content">
      <h3 class="products-item-card__name">{{ name }}</h3>
      <p v-if="description" class="products-item-card__description">
        {{ description }}
      </p>
      <div class="products-item-card__price">
        {{ price }}
      </div>
    </div>
  </BaseCard>
</template>

<style lang="scss" scoped>
.products-item-card {
  display: flex;
  flex-direction: column;
  min-height: 423px;
  height: 100%;
}

.products-item-card__preview {
  height: 200px;
  width: 100%;
  overflow: hidden;
  border-top-left-radius: inherit;
  border-top-right-radius: inherit;
}

.products-item-card__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.products-item-card__content {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  padding: vars.$space-2 vars.$space-2 vars.$space-3;
}

.products-item-card__name,
.products-item-card__description {
  margin: 0 0 vars.$space-2;
}

.products-item-card__name {
  font-size: vars.$font-size-subtitle;
}

.products-item-card__description {
  flex-grow: 1;
}

.products-item-card__price {
  font-size: vars.$font-size-accent;
}
</style>
