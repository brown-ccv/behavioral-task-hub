module.exports = {
  setupFilesAfterEnv: ["<rootDir>/tests/unit/vueSetup.js"],
  preset: "@vue/cli-plugin-unit-jest",
  collectCoverage: true,
  collectCoverageFrom: ["**/components/*.{js,vue}", "!**/node_modules/**"],
  coverageReporters: ["html", "text-summary"],
  coverageDirectory: "coverage"
};
