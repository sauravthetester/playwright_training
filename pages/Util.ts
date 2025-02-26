import { Locator, Page, chromium } from "@playwright/test";


export async function getPage() : Promise<Page> {

    const browser = await chromium.launch({ headless: false, channel: 'chrome'});
    const context = await browser.newContext();
    const page = await context.newPage();
    return page;
}

export async function getTableCellData(page:Page, row:number, column:number): Promise<string>{

    const rowIndex:Locator = page.locator('#table1>tbody>tr').nth(row);
    const cellIndex:Locator = rowIndex.locator('td').nth(column);
    return await cellIndex.innerText();

}
