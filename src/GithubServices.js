import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://datasci.brown.edu/task-registry/data",
  method: "GET",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "localhost"
  },
  timeout: 10000
});

export default {
  getData() {
    return apiClient.get();
  }
};
