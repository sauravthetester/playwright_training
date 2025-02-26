import { Browser, chromium, Locator, Page } from "@playwright/test";


export class LoginPage {

    userName:Locator;
    password:Locator;
    loginButton:Locator;

    constructor(page:Page) {
        this.userName = page.locator('#user-name');
        this.password = page.locator('#password');
        this.loginButton = page.locator('#login-button');
    }

    public async loginToApp(page:Page)
    {
        await page.goto('/');
        await this.userName.fill('standard_user');
        await this.password.fill('secret_sauce');
        await this.loginButton.click();
    }

}