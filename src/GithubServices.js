import axios from "axios";
import yaml from "yaml";

const apiClient = axios.create({
  url: "https://api.github.com/graphql",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${process.env.VUE_APP_GITHUB_TOKEN}`,
    "User-Agent": process.env.VUE_APP_GITHUB_USER
  },
  timeout: 10000
});

export const query = folder => {
  return `{
        repository(owner: "brown-ccv", name: "task-registry-faker") {
            object(expression: "master:${folder}/") {
              ... on Tree {
                entries {
                  oid
                  object {
                    ... on Blob {
                      text
                    }
                  }
                  name
                }
              }
            }
          }
    }`;
};

export const serialize = response => {
  const content = response.data.data.repository.object.entries;
  console.log("content", content);
  const serialized = content.map(entry => {
    return (entry.text = yaml.parse(entry.object.text));
  });
  return serialized;
};

export default {
  getData(query) {
    return apiClient({
      data: {
        query: query
      }
    });
  }
};
