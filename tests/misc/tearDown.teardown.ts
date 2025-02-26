import {test as tearDown} from '@playwright/test';

tearDown('Closure', async ({page}) => {
    console.log('******* DB connection Closed *******');
    console.log('******* Excel file Closed *******');
});