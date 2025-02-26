import { Browser, chromium, expect, Locator, Page } from "@playwright/test";


export class HomePage {

    title:Locator;
    productLink:Locator;

    constructor(page:Page) {
        this.title = page.locator('#header_container>div>.title');
        this.productLink = page.locator('.inventory_item_name');
    }

    public async verifyTitleIsVisible() : Promise<void>
    {
        await expect(this.title).toBeVisible();
    }

    public async getSecondProductName() : Promise<string>
    {
        return await this.productLink.nth(2).innerText({timeout: 5000});
    }

    public async clickOnSecondProduct() : Promise<void>
    {
        await this.productLink.nth(2).click();
    }

}