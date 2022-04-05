const app = Vue.createApp({
  data() {
    return {
      cart: [],
      // cart: 0,
      // premium: true,
      premium: false,
    };
  },
  methods: {
    updateCart(id) {
      this.cart.push(id);
    },
    // updateCart() {
    //   this.cart += 1;
    // },
  },
});
