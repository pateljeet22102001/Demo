const {test, expect}= require('@playwright/test');
const exp = require('constants');

test('handle radio button', async ({page})=>{
    
    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='male']").check();
    await expect(await page.locator("//input[@id='male']")).toBeChecked();
    await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();

    await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();

    await page.waitForTimeout(5000);
})


// for(const locator of checkboxLOcatoors)
// {
//     await page.locator(locator).check();
// }
// for(const locator of checkbox)
// {
//     if(await page.locator(locator).isChecked())
//     {
//         await page.locator(locator).uncheck();          
//     }
// }