// cypress/config/qauto2.config.js
export default {
    baseUrl: 'https://qauto2.forstudy.space',
    env: {
      username: 'qa_vika@admin071.work',
      password: 'Test123456789'
    },
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'cypress/reports/qauto2',
      overwrite: false,
      html: true,
      json: true,
    },
  };
  