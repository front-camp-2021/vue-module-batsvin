<template>
  <header-app />
  <main>
    <aside-comp :brands="brands" :categories="categories" />
    <section class="main-cards">
      <div class="main-cards__header">
        <h5>7,618 results found</h5>
        <button class="main-cards__hearts">
          <img src="img/Path (2).svg" alt="" />
        </button>
      </div>
      <my-input v-model="searchQuery" />
      <card-list :cards="searchCards" v-if="cards.length > 0" />
      <h2 v-else>List clear</h2>
    </section>
  </main>
  <div class="pagination">
    <a href="/#" @click="previosPage()">&laquo;</a>
    <a
      href="/#"
      v-for="pageNumber in totalPages"
      :key="pageNumber"
      :class="{ active: page === pageNumber }"
      @click="changePage(pageNumber)"
      >{{ pageNumber }}</a
    >
    <a href="/#" @click="nextPage()">&raquo;</a>
  </div>
</template>

<script>
import CardList from "@/components/CardList";
import axios from "axios";
import HeaderApp from "@/components/HeaderApp.vue";
import SearchMenu from "@/components/SearchMenu.vue";
import AsideComp from "@/components/AsideComp.vue";
import MyInput from "@/components/UI/MyInput.vue";

export default {
  components: {
    CardList,
    HeaderApp,
    AsideComp,
    MyInput,
  },

  data() {
    return {
      cards: [],
      brands: [],
      categories: [],
      searchQuery: "",
      page: 1,
      limit: 9,
      totalPages: 0,
    };
  },
  methods: {
    changePage(pageNumber) {
      this.page = pageNumber;
      this.fetchCards();
    },
    nextPage() {
      this.page += 1;
      this.fetchCards();
    },
    previosPage() {
      this.page -= 1;
      this.fetchCards();
    },
    async fetchCards() {
      try {
        const response = await axios.get("http://localhost:3000/products", {
          params: {
            _page: this.page,
            _limit: this.limit,
          },
        });
        this.totalPages = Math.ceil(
          response.headers["x-total-count"] / this.limit
        );
        this.cards = response.data;
      } catch (e) {
        alert("warning with cards data");
      }
    },
    async fetchCategories() {
      try {
        const response = await axios.get("http://localhost:3000/categories");
        this.categories = response.data;
      } catch (e) {
        alert("warning with categories data");
      }
    },
    async fetchBrands() {
      try {
        const response = await axios.get("http://localhost:3000/brands");
        this.brands = response.data;
      } catch (e) {
        alert("warning with brands data");
      }
    },
  },
  mounted() {
    this.fetchCards();
    this.fetchCategories();
    this.fetchBrands();
  },
  computed: {
    filterCards() {
      if (this.$store.state.checkedFilters.length == 0) {
        return this.cards;
      }

      let a = this.cards.filter((card) => {
        let filterChecker = false;
        this.$store.state.checkedFilters.forEach((e) => {
          e = e.toLowerCase().replace(" ", "_");
          if (e == card.category || e == card.brand) {
            filterChecker = true;
          }
        });
        return filterChecker;
      });
      return a;
      //return (
      //this.$store.state.checkedFilters
      // .forEach((e) => {
      //   e = e.toLoverCase().replace(" ", "_");
      // }).
      //.indexOf(card.category) != -1 ||
      // this.$store.state.checkedFilters
      //.forEach((e) => {
      //   e = e.toLoverCase().replace(" ", "_");
      //  })
      //.indexOf(card.brand) != -1
      //);
      //$store.state.checkedFilters.toLowerCase().some(card.category);
      //return card;
    },
    searchCards() {
      return this.filterCards.filter((card) =>
        card.title.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
};
</script>
<style scoped>
</style>