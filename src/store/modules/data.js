import GithubServices, { query, serialize } from "@/GithubServices";

export default {
  namespaced: true,
  state: {
    data: []
  },
  mutations: {
    SET_DATA(state, payload) {
      state.data = payload;
    }
  },
  actions: {
    fetchData({ commit }) {
      GithubServices.getData(query("data"))
        .then(response => {
          commit("SET_DATA", serialize(response));
        })
        .catch(error => {
          console.log(error);
        });
    }
  }
};
