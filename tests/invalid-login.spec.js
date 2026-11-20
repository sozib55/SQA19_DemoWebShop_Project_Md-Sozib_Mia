
const { test, expect } = require('@playwright/test');
const LoginPage = require('../pages/LoginPage');

test('Q1 - Invalid Login should show error message', async ({ page }) => {
    const loginPage = new LoginPage(page);

    await loginPage.navigate();

    await loginPage.login(
        'invaliduser123@gmail.com',
        'WrongPassword123'
    );

    // Verify error message is visible
    await expect(loginPage.errorMessage).toBeVisible();

    // Verify exact error message content
    await expect(loginPage.errorMessage).toContainText(
        'Login was unsuccessful. Please correct the errors and try again.'
    );

    const errorText = await loginPage.getErrorMessage();
    console.log('Login Error:', errorText);

    // Verify user remains on login page
    await expect(page).toHaveURL(/login/);

    // Verify login and logout states
    await expect(page.locator('.ico-login')).toBeVisible();
    await expect(page.locator('.ico-logout')).toHaveCount(0);
});
