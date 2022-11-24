const {defineConfig} = require("cypress");
const moment = require('moment');

const now = Date.now()
const today = moment(now).format('YYYY-MM-DD HH:mm:ss')

module.exports = defineConfig({
    e2e: {
        setupNodeEvents(on, config) {
        },
        baseUrl: 'https://www.cathaybk.com.tw/cathaybk',
        report: `reporters/${today}.js`
    },
});
