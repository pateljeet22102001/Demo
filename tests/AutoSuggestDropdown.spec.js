const{test, expect} = require('@playwright/test')

test('Auto Suggest Dropdown', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/')

    await page.locator("//input[@id='Wikipedia1_wikipedia-search-input']").fill('Delhi');

    await page.click("//input[@type='submit']")

    await page.waitForSelector("//div[@id='Wikipedia1_wikipedia-search-results']")

    


    const formNameOptions= await page.$$("//div[@id='Wikipedia1_wikipedia-search-results']")

    for(let option of formNameOptions)
    {
        const value= await option.textContent()
        // console.log(value);
        if(value.includes('Delhi University'))
        {
            await option.click()
            break;
        }
    }
    await page.waitForTimeout(3000);
})