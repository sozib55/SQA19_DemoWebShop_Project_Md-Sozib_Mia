
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');
const LoginPage = require('../pages/LoginPage');

test('Q2 - Register, Login and Add Product to Cart', async ({ page }) => {

    const registerPage = new RegisterPage(page);
    const loginPage = new LoginPage(page);

    const firstName = 'Test';
    const lastName = 'Customer';
    const email = `customer${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // Step 1: Register new customer
    await registerPage.navigate();
    await registerPage.register(firstName, lastName, email, password);

    await expect(page.locator('.result'))
        .toContainText('Your registration completed');

    // Step 2: Logout after registration
    await page.locator('.register-continue-button').click();
    await page.locator('.ico-logout').click();

    // Step 3: Login with registered account
    await loginPage.navigate();
    await loginPage.login(email, password);

    await expect(page.locator('.ico-logout')).toBeVisible();

    // Step 4: Open Books category
   await page.getByRole('link', { name: 'Books', exact: true }).first().click();

    // Step 5: Select first product
    const productLink = page.locator('.product-item .product-title a').first();
    await expect(productLink).toBeVisible();

    const productName = (await productLink.innerText()).trim();
    await productLink.click();

    // Step 6: Set quantity and add to cart
    const quantityInput = page.locator('input[id$="_EnteredQuantity"]');

    if (await quantityInput.count()) {
        await quantityInput.fill('1');
    }

    await page.locator('input[id^="add-to-cart-button-"], button[id^="add-to-cart-button-"]').first().click();

    // Step 7: Open shopping cart
   await page.getByRole('link', { name: 'Shopping cart', exact: true }).click();

    // Step 8: Verify product and quantity
    const cartRow = page.locator('.cart-item-row').filter({
        hasText: productName
    });

    await expect(cartRow).toBeVisible();
    await expect(cartRow.locator('.qty-input')).toHaveValue('1');

    console.log('Added Product:', productName);
    console.log('Cart Quantity: 1');
});
