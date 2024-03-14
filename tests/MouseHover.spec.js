const { test, expect } = require('@playwright/test');

test('Mouse Hover', async ({page})=>{

    await page.goto('https://demo.opencart.com/')

    const desktops= await page.locator('//a[normalize-space()="Desktops"]')
    const macbook= await page.locator('//a[normalize-space()="Mac (1)"]')

    await desktops.hover()
    await macbook.hover()
       
    
        // for right click action
    // await button.click({button: 'right'});

    // double click

    // await btnCopy.dblclick()
    // const f2=await page.locator()
    // await expect(f2).toHaveValue()

    await page.waitForTimeout(5000)

})