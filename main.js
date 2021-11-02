Vue.component("product", {
  template: `
  <div>
    <div class="product"></div>
    <div class="product-image">
      <img :src="image" alt="" />
    </div>
    <div class="product-info">
      <h1>{{ title }}</h1>
      <p v-if="inStock">In Stock</p>
      <p v-else :class="{ outOfStock: !inStock }">Out of Stock</p>
      <p>{{ sale }}</p>
      <ul>
        <li v-for="detail in details">{{ detail }}</li>
      </ul>
      <div
        v-for="(variant, index) in variants"
        :key="variant.variantId"
        class="color-box"
        :style="{ backgroundColor: variant.variantColor }"
        @mouseover="updateProduct(index)"
      ></div>
      <ul>
        <li v-for="size in sizes">{{ size }}</li>
      </ul>
      <button
        @click="addToCart"
        :disabled="!inStock"
        :class="{ disabledButton: !inStock }"
      >
        Add to Cart
      </button>
      <button @click="decreaseFromCart">Decrease from Cart</button>
      <div class="cart">
        <p>Cart({{ cart }})</p>
      </div>
    </div>
  </div>
  
  `,
  data() {
    return {
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
    };
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

var app = new Vue({
  el: "#app",
});
