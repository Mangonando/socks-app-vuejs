var app = new Vue({
  el: "#app",
  data: {
    brand: "The Incredible",
    product: "Socks",
    selectedVariant: 0,
    inventory: 100,
    // inStock: false,
    details: ["80% cotton", "20% polyester", "Gender-neutral"],
    variants: [
      {
        variantId: 2234,
        variantColor: "green",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-green-onWhite.jpg",
        variantQuantity: 10,
      },
      {
        variantId: 2235,
        variantColor: "blue",
        variantImage:
          "https://www.vuemastery.com/images/challenges/vmSocks-blue-onWhite.jpg",
        variantQuantity: 0,
      },
    ],
    sizes: ["S", "M", "L", "XL", "XXL", "XXXL"],
    cart: 0,
    onSale: true,
  },
  methods: {
    addToCart() {
      this.cart += 1;
    },
    decreaseFromCart() {
      this.cart -= 1;
    },
    updateProduct(index) {
      this.selectedVariant = index;
      // console.log(index)
      //when you console.log(index) hovering over green and blue color == 1 & 0
    },
  },
  computed: {
    title() {
      return this.brand + " " + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
    sale() {
      return this.onSale
        ? this.brand + " " + this.product + " are now on sale!"
        : this.brand + " " + this.product;
    },
  },
});
