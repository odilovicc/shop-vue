<template>
  <div class="flex gap-2 flex-wrap justify-center">
    <Card
      v-for="product in products"
      :key="product.id"
      class=" w-[20%] flex flex-col shadow-none justify-between"
    >
      <template #header>
        <img alt="product image" :src="product.image" class="h-72 mx-auto" />
      </template>
      <template #title>{{ product.title }} <Tag :severity="product.rating.rate > 3 ? 'success' : 'danger'" :value="product.rating.rate"></Tag></template>
      <template #subtitle>{{ product.price }}$</template>
      <template #footer>
        <Button
          label="Buy"
          icon="pi pi-cart-plus"
          @click="
            $emit('selected', {
              name: product.title,
              price: product.price,
              id: product.id,
            })
          "
          class="w-full"
        />
      </template>
    </Card>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  props: {
    products: Array,
  },
  emits: ["selected"],
};
</script>

<style scoped>
/* No additional styles needed */
</style>
