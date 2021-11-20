<template>
  <aside class="aside">
    <div class="aside__header">
      <h5>Filter</h5>
      <button class="aside__hower">@</button>
    </div>
    <div class="aside__characteristic">
      <h4>Multi Range</h4>
      <form action="#">
        <input type="radio" id="radioButton1" />
        <label for="radioButton1">$10</label> <br />
        <input type="radio" id="radioButton2" />
        <label for="radioButton2">$10-$100</label><br />
        <input type="radio" id="radioButton3" />
        <label for="radioButton3">$100-$500</label><br />
        <input type="radio" id="radioButton4" />
        <label for="radioButton4">$500</label><br />
        <input type="radio" id="radioButton5" />
        <label for="radioButton5">All</label>
      </form>
      <hr />
      <h4>Category</h4>
      <div
        class="aside__category"
        v-for="category in categories"
        :key="category"
      >
        <div class="aside__category-element">
          <div class="aside__category-label">
            <input
              type="checkbox"
              :id="category"
              :name="category"
              :value="category"
              v-model="checkedNames"
            />
            <label :for="category">
              <span>{{ category }}</span>
            </label>
          </div>
          <span>1920</span>
        </div>
        <br />
      </div>
      <hr />
      <h4>Brand</h4>
      <div class="aside__category" v-for="brand in brands" :key="brand">
        <div class="aside__category-element">
          <div class="aside__category-label">
            <input
              type="checkbox"
              :id="brand"
              :name="brand"
              :value="brand"
              v-model="checkedNames"
            />
            <label :for="brand">
              <span>{{ brand }}</span>
            </label>
          </div>
          <span>220</span>
        </div>
        <br />
      </div>
      <span>Checked names: {{ checkedNames }}</span>
    </div>
    <button class="aside__clear"><span>CLEAR ALL FILTERS</span></button>
  </aside>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      required: true,
    },
    brands: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      checkedNames: [],
    };
  },
};
</script>

<style>
</style>