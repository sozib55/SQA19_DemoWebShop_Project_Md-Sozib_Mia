
const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    fullyParallel: true,

    reporter: [
        ['list'],
        ['html', { outputFolder: 'playwright-report', open: 'never' }],
        ['allure-playwright']
    ],

    use: {
        baseURL: 'https://demowebshop.tricentis.com',
        browserName: 'chromium',
        headless: true,
        screenshot: 'on',
        trace: 'on-first-retry'
    }
});
