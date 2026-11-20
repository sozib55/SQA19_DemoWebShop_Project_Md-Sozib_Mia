
class LoginPage {
    constructor(page) {
        this.page = page;

        this.emailInput = page.locator("#Email");
        this.passwordInput = page.locator("#Password");
        this.loginButton = page.locator(".login-button");
        this.errorMessage = page.locator(".validation-summary-errors");
    }

    async navigate() {
        await this.page.goto("https://demowebshop.tricentis.com/login");
    }

    async login(email, password) {
        await this.emailInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }

    async getErrorMessage() {
        return await this.errorMessage.innerText();
    }
}

module.exports = LoginPage;
