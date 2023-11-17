import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {

    it('Verify Login', async () => {
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        await LoginPage.validateLogin();
    });

    it('Verify Sign Up', async () => {
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");

        await LoginPage.validateSignUp();
    });

})