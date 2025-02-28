// import {test as base, Page} from '@playwright/test';
// import { HomePage } from '../pages/HomePage';
// import { ProductDetailPage } from '../pages/ProductDetailPage';
// import { getPage } from '../pages/Util';

// type MyFixtures = {
//     loginPage: LoginPage;
//     homePage: HomePage;
//     productDetailPage:ProductDetailPage
// }

// let page:Page;
// export const test = base.extend<MyFixtures> ({

//     loginPage: async ({}, use) => {
//         page = await getPage();
//         const loginPage = new LoginPage(page);
//         await loginPage.loginToApp(page);
//         await use(loginPage);
//     },
//     homePage: async ({}, use) => {
//         const homePage = new HomePage(page);
//         await use(homePage);
//     },
//     productDetailPage: async ({}, use) => {
//         const productDetailPage = new ProductDetailPage(page);
//         await use(productDetailPage);
//     },

// });