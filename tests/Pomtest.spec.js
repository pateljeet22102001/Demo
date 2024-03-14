import {test, expect}  from '@playwright/test';
import { LoginPage} from '..//pages/LoginPage';
import { HomePage } from '..//pages/Homepage';
import { CartPage } from '..//pages/CartPage';
import path from 'path';

test ('test', async ({ page }) =>{

    const Login= new LoginPage(page);
    await Login.gotoLoginPage();
    await Login.login('pavanol','test@123')
    await page.waitForTimeout(3000)

    const home = new HomePage(page)
    await home.addProductToCart("Nexus 6")
    await page.waitForTimeout(3000)
    await home.gotoCart();

    const cart= new CartPage(page)
    await page.waitForTimeout(3000)
    const status= await cart.checkProductInCart('Nexus 6')
    expect(await status).toBe(true);

})