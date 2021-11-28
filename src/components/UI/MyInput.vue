<template>
  <div class="main-cards__search">
    <input
      type="text"
      placeholder="Search.."
      :value="modelValue"
      @input="updateInput"
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    modelValue: [String, Number],
  },
  methods: {
    updateInput(event) {
      this.$emit("update:modelValue", event.target.value);
    },
  },
};
</script>

<style scoped>
</style>