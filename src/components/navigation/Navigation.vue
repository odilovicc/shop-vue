<template>
  <div class="flex justify-between items-center p-4 px-8">
    <h1 class="text-2xl font-semibold">Market</h1>
    <div class="flex gap-2">
      <overlay-badge
        :value="selectedProduct.length > 0 ? Number(selectedProduct.length) : 0"
      >
        <Button
          icon="pi pi-cart-arrow-down"
          @click="$emit('toggle-drop', $event)"
        />
      </overlay-badge>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navigation",
  props: {
    selectedProduct: Array,
  },
};
</script>
