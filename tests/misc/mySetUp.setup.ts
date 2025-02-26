import {test as setUp} from '@playwright/test';

setUp('DB connection', async ({page}) => {
    console.log('******* DB connection setup *******');
});