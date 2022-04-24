import { createStore } from 'vuex';

export default createStore({
  state: {
    products: [],
    sortOptions: [
      { value: 'default', text: 'По умолчанию' },
      { value: 'min', text: 'По цене min' },
      { value: 'max', text: 'По цене max' },
      { value: 'name', text: 'По наименованию' },
    ],
  },
  getters: {},
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
    removeProduct(state, removedId) {
      const index = state.products.findIndex(({ id }) => id === removedId);
      state.products.splice(index, 1);
    },
  },
  actions: {
    addProduct({ commit }, product) {
      commit('addProduct', product);
    },
    removeProduct({ commit }, removedId) {
      commit('removeProduct', removedId);
    },
  },
  modules: {},
});
