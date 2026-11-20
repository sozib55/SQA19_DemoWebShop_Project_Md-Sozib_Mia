
const { test, expect } = require('@playwright/test');
const RegisterPage = require('../pages/RegisterPage');

test.setTimeout(180000);

test('Q3 - Product Search and Complete Checkout', async ({ page }) => {
    const registerPage = new RegisterPage(page);

    const email = `checkout${Date.now()}@gmail.com`;
    const password = 'Test@12345';

    // 1. Register customer
    await registerPage.navigate();
    await registerPage.register('Checkout', 'Customer', email, password);

    await expect(page.locator('.result'))
        .toContainText('Your registration completed');

    await page.locator('.register-continue-button').click();

    // 2. Search product
    await page.locator('#small-searchterms').fill('computer');
    await page.locator('input.button-1.search-box-button').click();

    const product = page.locator('.product-item .product-title a').first();

    await expect(product).toBeVisible();

    // Verify search result matches the search keyword
    await expect(product).toContainText(/computer/i);

    const productName = (await product.innerText()).trim();
    await product.click();

    // 3. Increase quantity and add to cart
    await page.locator('input[id$="_EnteredQuantity"]').fill('2');
    await page.locator('input[id^="add-to-cart-button-"]').first().click();

    await expect(page.locator('.bar-notification.success')).toBeVisible();

    // 4. Open shopping cart
    await page.goto('https://demowebshop.tricentis.com/cart');

    await expect(page.locator('.cart-item-row')).toContainText(productName);
    await expect(page.locator('.qty-input')).toHaveValue('2');

    // 5. Agree terms and checkout
    await page.locator('#termsofservice').check();
    await page.locator('#checkout').click();

    // 6. Billing address
    await page.locator('#BillingNewAddress_FirstName').fill('Checkout');
    await page.locator('#BillingNewAddress_LastName').fill('Customer');
    await page.locator('#BillingNewAddress_Email').fill(email);
    await page.locator('#BillingNewAddress_CountryId')
        .selectOption({ label: 'Bangladesh' });
    await page.locator('#BillingNewAddress_City').fill('Dhaka');
    await page.locator('#BillingNewAddress_Address1').fill('Test Road');
    await page.locator('#BillingNewAddress_ZipPostalCode').fill('1200');
    await page.locator('#BillingNewAddress_PhoneNumber').fill('01700000000');

    await page.locator(
        '#billing-buttons-container input.new-address-next-step-button'
    ).click();

    // 7. Shipping address
    const shippingAddressStep = page.locator('li').filter({
        has: page.getByRole('heading', { name: 'Shipping address' })
    });

    await shippingAddressStep.getByRole('button', {
        name: 'Continue'
    }).click();

    // 8. Shipping method
    await page.locator(
        'input.button-1.shipping-method-next-step-button'
    ).click();

    // 9. Payment method
    await page.locator(
        'input.button-1.payment-method-next-step-button'
    ).click();

    // 10. Payment information
    await page.locator(
        'input.button-1.payment-info-next-step-button'
    ).click();

    // 11. Confirm order
    await page.locator(
        'input.button-1.confirm-order-next-step-button'
    ).click();

    // 12. Verify order confirmation
    await expect(page.locator('.section.order-completed .title'))
        .toContainText('Your order has been successfully processed');

    console.log('Ordered Product:', productName);

    // 13. View order details
    await page.getByRole('link', {
        name: 'Click here for order details.'
    }).click();

    await expect(page).toHaveURL(/orderdetails/);

    // Verify order details page
    const orderDetails = page.locator('.order-details-page');

    await expect(orderDetails).toBeVisible();
    await expect(orderDetails).toContainText(productName);

    // Verify ordered quantity
    const orderedProductRow = orderDetails
        .locator('.data-table tr')
        .filter({ hasText: productName });

    await expect(orderedProductRow).toBeVisible();
    await expect(orderedProductRow.locator('.quantity')).toContainText('2');

    console.log('Verified Product:', productName);
    console.log('Verified Quantity: 2');
    console.log('Q3 Checkout Completed Successfully');
});
