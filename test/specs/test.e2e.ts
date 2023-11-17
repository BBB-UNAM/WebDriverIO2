//import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
//import SecurePage from '../pageobjects/secure.page.js'

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await (await LoginPage.loginBtn).click();
        console.log("Login clicked")
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
    });
})

