import GithubServices, { query, serialize } from "@/GithubServices";

export default {
  namespaced: true,
  state: {
    data: [],
    filteredData: [],
    totalRows: 0
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
      state.filteredData = payload;
      state.totalRows = payload.length;
    }
  },
  actions: {
    fetchData({ commit }) {
      GithubServices.getData(query("data"))
        .then(response => {
          commit("SET_DATA", serialize(response));
        })
        .catch(error => {
          // console.log(error);
          error;
        });
    }
  }
};
