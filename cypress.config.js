const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "3guven",
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  video: true
});
