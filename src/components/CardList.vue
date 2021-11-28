<template>
  <section class="main-cards__container">
    <card-item v-for="card in cards" :key="card.id" :card="card" />
  </section>
</template>

<script>
import CardItem from "./CardItem.vue";
export default {
  components: { CardItem },

  props: {
    cards: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
</style>