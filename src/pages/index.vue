<template>
  <div class="flex flex-col gap-12">
    <navigation :selected-product="selectedProduct" @toggle-drop="toggleDrop" />
    <div class="px-8">
      <product-list :products="products" @selected="handleSelectedProduct" />
    </div>
    <page-footer />
  </div>

  <!-- Dropdown -->
  <Popover ref="opened">
    <template v-if="selectedProduct.length > 0">
      <h1 class="text-lg font-medium">Selected products</h1>
      <Divider />
      <ul>
        <li
          class="py-2 px-1 flex items-center justify-between gap-12"
          v-for="(selected, index) in selectedProduct"
          :key="selected.id"
        >
          {{ index + 1 }}. {{ selected.name }}
          <Button
            icon="pi pi-minus"
            severity="danger"
            @click="deleteSelectedProduct(selected)"
          />
        </li>
      </ul>
      <Divider />
      <Button class="w-full" @click="redirectCheckout" label="Checkout" />
    </template>
    <template v-else>Cart is empty</template>
  </Popover>
  <!-- Dropdown -->
</template>

<script>
import Navigation from "@/components/navigation/Navigation.vue";
import ProductList from "../components/ProductList.vue";
import PageFooter from "@/components/PageFooter.vue";
import { mapState } from "vuex";

export default {
  components: { ProductList, Navigation, PageFooter },
  data() {
    return {
      selectedProduct: [],
    };
  },
  computed: {
    ...mapState("homePage", {
      products: (state) => state.products,
    }),
  },
  methods: {
    handleSelectedProduct(product) {
      this.selectedProduct.push(product);
    },
    toggleDrop(event) {
      if (this.$refs.opened) {
        this.$refs.opened.toggle(event);
      }
    },
    deleteSelectedProduct(selected) {
      const index = this.selectedProduct.findIndex(
        (item) => item.id === selected.id
      );
      if (index !== -1) {
        this.selectedProduct.splice(index, 1);
      }
    },
    redirectCheckout() {
      this.$store.commit("homePage/setUserCart", this.selectedProduct);
      this.$router.push("/checkout");
    },
  },
  mounted() {
    this.$store.dispatch("homePage/fetchProducts");
  },
};
</script>
