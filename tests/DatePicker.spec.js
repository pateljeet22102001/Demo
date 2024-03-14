const { test, expect } = require('@playwright/test');

test("Date Picker", async ({page}) =>{

    await page.goto("https://testautomationpractice.blogspot.com/")

    const year="2024"
    const month="April"
    const date="15"

    await page.click('#datepicker')

    while(true)
    {
        const currentYear= await page.locator('.ui-datepicker-year').textContent()
        const currentMonth= await page.locator('.ui-datepicker-month').textContent()

        if(currentYear == year &&currentMonth == month)
        {
            break;
        }
        await page.locator('[title="Next"]').click()
    }

    const dates= await page.$$("//a[@class='ui-state-default']")

    await page.click(`//a[@class='ui-state-default'][text()='${date}']`)
    await page.waitForTimeout(5000);
})