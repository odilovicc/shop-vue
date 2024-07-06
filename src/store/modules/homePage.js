export default {
  namespaced: true,
  state: () => ({
    userCart: [],
    products: [],
  }),
  mutations: {
    setUserCart(state, payload) {
      state.userCart = payload;
    },
    clearUserCart(state) {
      state.userCart = [];
    },
    setProducts(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await fetch("https://fakestoreapi.com/products");
      const products = await response.json();
      commit("setProducts", products);
    },
  },
  getters: {
    totalSelectedProductPrice: (state) => {
      return state.userCart.reduce(
        (total, product) => total + product.price,
        0
      );
    },
  },
};
