import LoginPage from '../pageobjects/login.page.js'

describe('My Login application', () => {
    it('this is test1', async () => {
        console.log("Test1");
    });

    it('this is test2', async () => {
        console.log("Test2");
    });

    it('Verify Login', async () => {
        await (await LoginPage.loginButton).isDisplayed();
        await (await LoginPage.loginButton).click();
        await LoginPage.login('tomsmith@mail.com', 'SuperSecretPassword!');
        //const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        //await sleep(8000);
        //await driver.switchToFrame($('#android:id/content'));
        //await driver;
        //console.log("frame switched");
        //const contexts = await browser.getContexts();
        //console.log(contexts[0]);
        //await driver.switchContext(contexts[0]);
        //const iframe = $('#android:id/content');
        //iframe.switchToFrame();
    });
})