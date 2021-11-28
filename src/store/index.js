import { createStore } from 'vuex';

export default createStore({
  state: {
    checkedFilters: [],
  },
  mutations: {
    clearFilterList(state) {
      state.checkedFilters = []
    }
  },
  actions: {
  },
  modules: {

  },
});
