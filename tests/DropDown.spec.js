const {test, expect} = require('@playwright/test')

test('Handle Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.selectOption("#country", 'India');

    await page.waitForTimeout(5000);

    page.close();
})