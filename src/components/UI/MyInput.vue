<template>
  <div class="main-cards__search">
    <input
      type="text"
      :value="modelValue"
      @input="updateInput"
      placeholder="Search.."
    />
  </div>
</template>

<script>
export default {
  name: "my-input",
  props: {
    moduleValue: [String, Number],
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