<template>
  <header-app />
  <h2>card id {{ $router.push("/shop/${card.id}") }}</h2>
</template>

<script>
import HeaderApp from "@/components/HeaderApp.vue";

export default {
  components: {
    HeaderApp,
  },
};
</script>
<style>
</style>