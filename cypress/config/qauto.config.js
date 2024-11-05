

module.exports = {
  e2e: {
    baseUrl: 'https://qauto.forstudy.space',
    env: {
      username: 'viktoriacuskina@gmail.com',
      password: 'Test123456789'
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/qauto',
      overwrite: false,
      html: true,
      json: true,
    },
  },
};
