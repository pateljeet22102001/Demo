const {test, expect} = require('@playwright/test')
const exp = require('constants')

test('AssertionsTest', async ({page})=>{

    await page.goto('https://demo.nopcommerce.com/register')

    await expect(page).toHaveURL('https://demo.nopcommerce.com/register')

    await expect(page).toHaveTitle('nopCommerce demo store. Register')

    const logoElement= await page.locator('.header-logo')
    await expect(logoElement).toBeVisible()

    const searchstoreBox= await page.locator('#small-searchterms')
    await expect(searchstoreBox).toBeEnabled()

    const maleRadioButton=await page.locator('#gender-male')
    await maleRadioButton.click()
    await expect(maleRadioButton).toBeChecked()

    const newsletterCheckbox= await page.locator('#Newsletter')
    await expect(newsletterCheckbox).toBeChecked()

    const regButton= await page.locator('#register-button')
    await expect(regButton).toHaveAttribute('type', 'submit')

    const emailInput = await page.locator('#Email')
    await emailInput.fill('test@demo.com');
    await expect(emailInput).toHaveValue('test@demo.com')
})