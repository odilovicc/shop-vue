<template>
  <div class="flex items-center justify-center h-screen">
    <div v-if="this.userCart.length > 0">
      <Card>
        <template #title>Checkout</template>
        <template #content>
          <li v-for="product in this.userCart" class="flex py-1.5 items-center justify-between gap-12"
              :key="product.id">
            <span>{{ product.name }}</span>
            <span>{{ product.price }}$</span>
          </li>
          <h1 class="mx-auto w-full text-lg font-medium mt-5">Total: {{ this.totalSelectedProductPrice }}$</h1>
        </template>
        <template #footer>
          <div class="flex gap-3 mt-1">
            <Button label="Cancel" @click="clearCart" severity="secondary" outlined class="w-full"/>
            <Button label="Go to payment" class="w-full"/>
          </div>
        </template>
      </Card>
    </div>
    <div v-else>Data is not available. Please go back to dashboard to fill your cart</div>
  </div>
</template>

<script>
import {mapGetters, mapState} from 'vuex'

export default {
  computed: {
    ...mapState('homePage', {
      userCart: state => state.userCart
    }),
    ...mapGetters('homePage', ['totalSelectedProductPrice'])
  },
  methods: {
    clearCart() {
      this.$store.commit("homePage/clearUserCart")
      this.$toast.add({summary: "Cart has been cleaned", life: 3000, severity:"success"})
      this.$router.push("/")
    }
  }
}
</script>

<style lang="scss" scoped>

</style>