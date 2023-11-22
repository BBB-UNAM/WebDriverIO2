import LoginPage from '../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'

describe('My Login application', () => {

    beforeEach(async () =>  {
        await driver.execute('mobile: activateApp', { appId: 'com.wdiodemoapp', });
    });

    afterEach(async () =>  {
        await driver.execute('mobile: terminateApp', { appId: 'com.wdiodemoapp', });
    });

    it('Verify Login', async () => {
        allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('Verify Sign Up', async () => {
        allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('Verify wrong password', async () => {
        allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

})