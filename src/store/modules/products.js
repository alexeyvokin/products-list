import { createNamespacedHelpers } from 'vuex';
import { loadStorageItem, saveStorageItem } from '@/services/storage.js';

import * as ACTIONS from './action.types.js';

const PRODUCTS_KEY = 'app:products';

const productsModule = {
  namespaced: true,
  state: {
    list: [],
  },
  mutations: {
    addItem(state, item) {
      state.list.push(item);
    },
    deleteItem(state, item) {
      state.list = state.list.filter(({ id }) => id !== item.id);
    },
    setList(state, list) {
      state.list = list;
    },
  },
  actions: {
    [ACTIONS.PRODUCTS_INIT]({ commit }) {
      const list = loadStorageItem(PRODUCTS_KEY) ?? [];
      commit('setList', list);
    },
    [ACTIONS.PRODUCTS_ADD_ITEM]({ commit, dispatch }, item) {
      commit('addItem', { ...item, id: Date.now() });
      dispatch(ACTIONS.PRODUCTS_SAVE);
    },
    [ACTIONS.PRODUCTS_DELETE_ITEM]({ commit, dispatch }, item) {
      commit('deleteItem', item);
      dispatch(ACTIONS.PRODUCTS_SAVE);
    },
    [ACTIONS.PRODUCTS_SAVE]({ state }) {
      saveStorageItem(PRODUCTS_KEY, state.list);
    },
  },
};

export const { mapState, mapActions } = createNamespacedHelpers('products');
export { ACTIONS };
export { productsModule as default };
