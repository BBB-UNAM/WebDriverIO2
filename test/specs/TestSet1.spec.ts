import HomePage from '../pageobjects/home.page.js';
import LoginPage from '../pageobjects/login.page.js'
import allureReporter from '@wdio/allure-reporter'

describe('Test set 2', () => {

    beforeEach(async () =>  {
        await driver.execute('mobile: activateApp', { appId: 'com.wdiodemoapp', });
    });

    afterEach(async () =>  {
        await driver.execute('mobile: terminateApp', { appId: 'com.wdiodemoapp', });
    });

    it('01 Verify Login 0', async () => {
        //allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('02 Verify Sign Up 0', async () => {
        //allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('03 Verify wrong password 0', async () => {
        //allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

    it('04 Validate Home tab 0', async () => {
        //allureReporter.addFeature('Validate Home tab');

        await (await LoginPage.homeButton).isDisplayed();
        await (await LoginPage.homeButton).click();
        allureReporter.addStep("1 - Home screen opened");

        await HomePage.validateHomeMessage();
        allureReporter.addStep("2 - Home message validated");
        await HomePage.validateSupportMessage();
        allureReporter.addStep("3 - Support message validated");
        await HomePage.validateWebdriverLetter();
        allureReporter.addStep("4 - Web driver letter validated");
        await HomePage.validateIcons();
        allureReporter.addStep("5 - Icons Validated");

    });

    it('05 Verify Login 1', async () => {
        //allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword2!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('06 Verify Sign Up 1', async () => {
        //allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('07 Verify wrong password 1', async () => {
        //allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

    it('08 Validate Home tab 1', async () => {
        //allureReporter.addFeature('Validate Home tab');

        await (await LoginPage.homeButton).isDisplayed();
        await (await LoginPage.homeButton).click();
        allureReporter.addStep("1 - Home screen opened");

        await HomePage.validateHomeMessage();
        allureReporter.addStep("2 - Home message validated");
        await HomePage.validateSupportMessage();
        allureReporter.addStep("3 - Support message validated");
        await HomePage.validateWebdriverLetter();
        allureReporter.addStep("4 - Web driver letter validated");
        await HomePage.validateIcons();
        allureReporter.addStep("5 - Icons Validated");

    });

    it('09 Verify Login 2', async () => {
        //allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('10 Verify Sign Up 2', async () => {
        //allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('11 Verify wrong password 2', async () => {
        //allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

    it('12 Validate Home tab 2', async () => {
        //allureReporter.addFeature('Validate Home tab');

        await (await LoginPage.homeButton).isDisplayed();
        await (await LoginPage.homeButton).click();
        allureReporter.addStep("1 - Home screen opened");

        await HomePage.validateHomeMessage();
        allureReporter.addStep("2 - Home message validated");
        await HomePage.validateSupportMessage();
        allureReporter.addStep("3 - Support message validated");
        await HomePage.validateWebdriverLetter();
        allureReporter.addStep("4 - Web driver letter validated");
        await HomePage.validateIcons();
        allureReporter.addStep("5 - Icons Validated");

    });

    it('13 Verify Login 3', async () => {
        //allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('14 Verify Sign Up 3', async () => {
        //allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('15 Verify wrong password 3', async () => {
        //allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

    it('16 Validate Home tab 3', async () => {
        //allureReporter.addFeature('Validate Home tab');

        await (await LoginPage.homeButton).isDisplayed();
        await (await LoginPage.homeButton).click();
        allureReporter.addStep("1 - Home screen opened");

        await HomePage.validateHomeMessage();
        allureReporter.addStep("2 - Home message validated");
        await HomePage.validateSupportMessage();
        allureReporter.addStep("3 - Support message validated");
        await HomePage.validateWebdriverLetter();
        allureReporter.addStep("4 - Web driver letter validated");
        await HomePage.validateIcons();
        allureReporter.addStep("5 - Icons Validated");

    });

    it('17 Verify Login 4', async () => {
        //allureReporter.addFeature('Verify Login');
        //allureReporter.addStep("Open");
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        allureReporter.addStep("1 - Open Login Screen");
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        allureReporter.addStep("2 - Complete form");
        await LoginPage.validateLogin();
        allureReporter.addStep("3 - Validate Login");   
    });

    it('18 Verify Sign Up 4', async () => {
        //allureReporter.addFeature('Verify Sign Up');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened"); 
        await LoginPage.signUp("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUp();
        allureReporter.addStep("3 - Validate Sign Up"); 
    });

    it('19 Verify wrong password 4', async () => {
        //allureReporter.addFeature('Verify wrong password');

        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await (await LoginPage.signUpTab).click();
        allureReporter.addStep("1 - Sign Up Screen Opened");
        await LoginPage.signUpWrong("picassoa12@gmail.com","qwertyuiop");
        allureReporter.addStep("2 - Complete Credentials"); 

        await LoginPage.validateSignUpWrong();
        allureReporter.addStep("3 - Validate wrong Sign Up"); 
    });

    it('20 Validate Home tab 4', async () => {
        //allureReporter.addFeature('Validate Home tab');

        await (await LoginPage.homeButton).isDisplayed();
        await (await LoginPage.homeButton).click();
        allureReporter.addStep("1 - Home screen opened");

        await HomePage.validateHomeMessage();
        allureReporter.addStep("2 - Home message validated");
        await HomePage.validateSupportMessage();
        allureReporter.addStep("3 - Support message validated");
        await HomePage.validateWebdriverLetter();
        allureReporter.addStep("4 - Web driver letter validated");
        await HomePage.validateIcons();
        allureReporter.addStep("5 - Icons Validated");

    });
    
/* 
    it.skip('QA dummy', async () => {
        allureReporter.addFeature('QA dummy');
        //allureReporter.addStory("Hola2");
        console.log("This is step 1");
        console.log("This is step 2");
        console.log("This is step 3");
        console.log("This is step 4");
        console.log("This is step 5");
    });
*/
})