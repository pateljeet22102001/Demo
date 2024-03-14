const { test, expect } = require('@playwright/test')

test('Alert with OK', async ({page})=>{

    await page.goto('https://testautomationpractice.blogspot.com/');

    page.on('dialog', async dialog=>{
        expect(dialog.type()).toContain('confirm')
        expect(dialog.message()).toContain('Press a button!')
        await dialog.accept();
    })

    await page.click('//button[normalize-space()="Confirm Box"]');

    await expect(page.locator('//p[@id="demo"]')).toHaveText("You pressed OK!")

    await page.waitForTimeout(5000);
})