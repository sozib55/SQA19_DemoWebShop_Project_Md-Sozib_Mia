
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid Login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login('invaliduser123@gmail.com', 'WrongPassword123');

    await expect(loginPage.errorMessage).toBeVisible();

    const errorText = await loginPage.getErrorMessage();

    console.log('Login Error:', errorText);

   await expect(page).toHaveURL(/login/);
await expect(page.locator('.ico-login')).toBeVisible();
await expect(page.locator('.ico-logout')).toHaveCount(0);
});
