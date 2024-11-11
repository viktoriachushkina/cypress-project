const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    env: {
      BASE_URL: "https://www.saucedemo.com/",
      USER_NAME: "standard_user",
      USER_PASSWORD: "secret_sauce"
    },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports', // Папка для сохранения отчётов
    overwrite: false,
    html: false, 
    json: true, 
  },
},
});

