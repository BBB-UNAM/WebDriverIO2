import { $ } from '@wdio/globals'
import Page from './page.js';

class LoginPage extends Page {

    public get inputUsername () {
        return $('~input-email');
    }

    public get inputPassword () {
        return $('~input-password');
    }

    public get btnSubmit () {
        return $('~button-LOGIN');
    }

    public get successMesage () {
        return $('ndroid=new UiSelector().resourceId("android:id/message")'); //#android:id/message
    }
    public get okButton () {
        return $('android=new UiSelector().resourceId("android:id/button1")');
    }

    public async login (username: string, password: string) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
        (await this.okButton).click();
        console.log("ok clicked");

        const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));
        await sleep(3000);
    }
}

export default new LoginPage();
