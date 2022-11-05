module.exports = {
  projectId: 'v7pq3t',
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  watchForFileChanges: false,
  execTimeout: 10000,
  env: {
    url: 'https://www.amazon.in/',
  },
  viewportHeight: 960,
  viewportWidth: 1600,
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require('./cypress/plugins/index.js')(on, config)
    },
    baseUrl: 'https://reqres.in/api',
    specPattern: 'cypress/e2e/**/*.{js,jsx,ts,tsx}',
  },
}
