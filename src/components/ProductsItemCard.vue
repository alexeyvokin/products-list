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
      type: [String, Number],
      required: true,
    },
    preview: {
      type: String,
      required: true,
    },
  },

  methods: {
    deleteItem() {
      this.$emit('delete');
    },
  },
};
</script>

<template>
  <BaseCard tag="article" class="products-item-card">
    <div class="products-item-card__preview">
      <img :src="preview" alt="preview" :title="name" class="products-item-card__image" />
    </div>

    <div class="products-item-card__content">
      <h3 class="products-item-card__name">{{ name }}</h3>
      <p v-if="description" class="products-item-card__description">
        {{ description }}
      </p>
      <div class="products-item-card__price">{{ price }} руб.</div>
    </div>

    <button class="products-item-card__button" type="button" @click="deleteItem">
      <img src="../assets/icons/bucket.svg" alt="delete icon" title="Удалить" />
    </button>
  </BaseCard>
</template>

<style lang="scss" scoped>
$button-size: 32px;

.products-item-card {
  position: relative;
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

.products-item-card__button {
  position: absolute;
  top: -8px;
  right: -8px;
  opacity: 0;
  cursor: pointer;
  width: $button-size;
  height: $button-size;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: vars.$button-border-radius;
  background-color: vars.$danger;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: all vars.$transition-duration;

  &:hover,
  &:focus {
    background-color: mix($color1: vars.$danger, $color2: vars.$white, $weight: 90);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
  }

  &:active {
    background-color: mix($color1: vars.$danger, $color2: vars.$black, $weight: 90);
  }
}

.products-item-card:hover .products-item-card__button {
  opacity: 1;
}
</style>
