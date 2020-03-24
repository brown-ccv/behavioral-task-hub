// import GithubServices, { query, serialize } from "@/GithubServices";

// const fs = require("fs")
const data = require("@/assets/data.json");

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
      commit("SET_DATA", data);
    }
  }
};
