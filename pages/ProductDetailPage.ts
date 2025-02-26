import { Browser, chromium, expect, Locator, Page } from "@playwright/test";


export class ProductDetailPage {

    itemName:Locator;

    constructor(page:Page) {
        this.itemName = page.locator('.inventory_details_name.large_size');
    }

    public async verifyItemNameIsVisible(name:string|null) : Promise<void>
    {
        const nameValue:string = name +"";
        await expect(this.itemName).toHaveText(nameValue);
    }

}