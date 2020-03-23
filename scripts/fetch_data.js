const axios = require("axios");
const yaml = require("yaml");
const fs = require("fs");
const VUE_APP_GITHUB_TOKEN = "cefeb66069de1c607d4fc90673bf29f5dcf882f4";
const VUE_APP_GITHUB_USER = "Rashi1997";

const apiClient = axios.create({
  url: "https://api.github.com/graphql",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${VUE_APP_GITHUB_TOKEN}`,
    "User-Agent": VUE_APP_GITHUB_USER
  },
  timeout: 10000
});

const query = folder => {
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

const serialize = response => {
  const content = response.data.data.repository.object.entries;
  const serialized = content.map(entry => {
    return (entry.text = yaml.parse(entry.object.text));
  });
  return serialized;
};

function getData(query) {
  return apiClient({
    data: {
      query: query
    }
  });
}
getData(query("data")).then(response => {
  fs.writeFile(
    "src/assets/data.json",
    JSON.stringify(serialize(response)),
    "utf8",
    function(err) {
      if (err) {
        console.log(err);
      }
    }
  );
});
