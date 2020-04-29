import GithubService from "@/GithubServices";

// const fs = require("fs")
// const data = require("@/assets/data.json");

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
      return GithubService.getData("data").then(response => {
        commit("SET_DATA", response.data);
      });
    }
  }
};
