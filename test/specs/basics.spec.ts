import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {

    beforeEach(async () =>  {
        // Código a ejecutar antes de cada prueba
        await driver.execute('mobile: activateApp', { appId: 'com.wdiodemoapp', });
    });

    afterEach(async () =>  {
        // Código a ejecutar después de cada prueba
        await driver.execute('mobile: terminateApp', { appId: 'com.wdiodemoapp', });
    });

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

    it('Verify wrong password.', async () => {
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");

        await LoginPage.validateSignUpWrong();
    });

})