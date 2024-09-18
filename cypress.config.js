const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    // implement node event listeners here
    myBaseUrl: "..\\..\\index.html",
  },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
