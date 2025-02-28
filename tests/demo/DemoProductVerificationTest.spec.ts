import {expect, FrameLocator, Locator, test} from '@playwright/test';
// import {test} from '../../util/MyFixtures'
// import {getTableCellData} from '../../pages/Util'

import {ai} from '@zerostep/playwright'
import exp from 'constants'

var productName:string

test.describe('Demo Product Verification Test Suite', () => {

  test('https://the-internet.herokuapp.com/', async ({page}) => {
      await page.goto('https://the-internet.herokuapp.com/');
      await page.getByRole('link', { name : 'Checkboxes'}).click();
      await page.locator('//form/input[1]').check();
      await page.locator('//form/input[2]').uncheck();
  });

  test('https://the-internet.herokuapp.com/ iframe + window', async ({page}) => {
      await page.goto('https://the-internet.herokuapp.com/');
      await page.getByRole('link', { name : 'Multiple Windows'}).click();
      const [page2] = await Promise.all([
          page.context().waitForEvent('page'),
          page.getByRole('link',{name: 'Click Here'}).click()
        ]);

      await expect(page2.getByRole('heading', {name: 'New Window'})).toBeVisible();
      await expect(page.getByRole('link',{name: 'Click Here'})).toBeVisible();
  });

//   test('https://the-internet.herokuapp.com/ table', async ({page}) => {
//       await page.goto('https://the-internet.herokuapp.com/');
//       await page.getByRole('link', { name : 'Sortable Data Tables'}).click();
      
//       await page.waitForURL('https://the-internet.herokuapp.com/tables',{timeout: 5000, waitUntil: 'load'});
//       const cntR = await page.locator('#table1>tbody>tr').count(); // How many rows
//       const row:Locator = page.locator('#table1>tbody>tr').nth(0); // 1st row
//       const cntC:number = await row.locator('td').count(); // 1st row has how many columns

//       console.log(`cntR === ${cntR}, cntC ==== ${cntC}`);
//       for(let i = 0; i< cntR; i++)
//       {
//           for(let j=0; j<cntC; j++)
//           {
//               const value:string = await getTableCellData(page,i,j);
//               console.log(' Value =========== '+value);
//           }
//       }
//   });

// new comment now
  test('https://the-internet.herokuapp.com/ alerts', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
      await page.getByRole('link', { name : 'JavaScript Alerts'}).click();
      
      await page.waitForURL('https://the-internet.herokuapp.com/javascript_alerts',{timeout: 5000, waitUntil: 'load'});
      await page.getByRole('button', {name: 'Click for JS Prompt'}).click();
      page.on('dialog', dialog => dialog.accept('Accepted'));

      await page.locator('.sjdhfsjdhf').click();
  });

  test.skip('https://the-internet.herokuapp.com/ Download', async ({page}) => {
      await page.goto('https://the-internet.herokuapp.com/');
      await page.getByRole('link', { name : 'File Download', exact: true}).click();
      
      await page.waitForURL('https://the-internet.herokuapp.com/download',{timeout: 5000, waitUntil: 'load'});

      const downloadPromise = page.waitForEvent('download');
      await page.getByRole('link', {name: 'multipart.jpg'}).click();
      const download = await downloadPromise;
      await download.saveAs('screenshots/'+download.suggestedFilename());
  });

  test.skip('Datepicker', async ({page}) => {
      await page.goto('https://demo.automationtesting.in/Datepicker.html');
      await page.locator('//img[@class="imgdp"]').click();

      await page.locator('//*[text()="Next"]').click();

      const numberOfDates:number = await page.locator('//table//tr/td/a').count();

      const todayDate = await page.locator('//table//tr/td/a[contains(@class,"ui-state-highlight")]').innerText();
      const todayDateNum = Number(todayDate);
      
      // for(let i=0; i<numberOfDates; i++)
      // {
      //     const dateValue = await page.locator('//table//tr/td/a').nth(i).innerText();
      //     const dateValueNum = Number(dateValue);
      //     if(dateValueNum==(todayDateNum+1))
      //     {
      //         await page.locator('//table//tr/td/a').nth(i).click();
      //         break;
      //     }
      //     console.log(`Date: ${dateValue}`);
      // }
  });

  test('page has more than 20 images', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/');
    const images = await page.locator('//img').count();
    expect(images).toBeGreaterThan(1);
  });

  test('zerostep demo', async ({ page }) => {
    await page.goto('https://www.flipkart.com/');
    await ai('Search for "mouse"',{page,test});
    await ai('Press Enter Key',{page,test});
    await page.waitForURL('https://www.flipkart.com/search?q=mouse&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off');
    await ai('Click on Cart',{page,test});
    await ai('Click on Login button below "Login to see the items you added previously"',{page,test});
    await ai('Enter number as "8778175753"',{page,test});
    await ai('Click on Request OTP',{page,test});
    const visible:boolean = await ai('Assert that this text is present: Not received your code?',{page,test});
    await expect(visible).toEqual(true);
    //Not received your code?
  });


  test('https://the-internet.herokuapp.com/ Download AI', async ({page}) => {
    await page.goto('https://the-internet.herokuapp.com/');
    await ai('Click on "File Download"',{page,test});
    //await page.getByRole('link', { name : 'File Download', exact: true}).click();
    
    await page.waitForURL('https://the-internet.herokuapp.com/download',{timeout: 5000, waitUntil: 'load'});


    const downloadPromise = page.waitForEvent('download');
    await ai('Click on link "image.jpg"',{page,test});
    // await page.getByRole('link', {name: 'image.jpg'}).click();
    const download = await downloadPromise;
    await download.saveAs('screenshots/'+download.suggestedFilename());
});



});