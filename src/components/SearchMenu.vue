<template>
  <div class="main-cards__header">
    <h5>7,618 results found</h5>
    <button class="main-cards__hearts">
      <img src="img/Path (2).svg" alt="" />
    </button>
  </div>
  <my-input v-model="searchQuery" />
</template>

<script>
import MyInput from "./UI/MyInput.vue";

export default {
  components: { MyInput },
};
</script>

<style>
</style>