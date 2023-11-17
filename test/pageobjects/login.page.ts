import { $ } from '@wdio/globals'
import Page from './page.js';
import * as assert from 'assert';

class LoginPage extends Page {
    //---------------------------------------Login Elemnts-----------------------------------------
    public get inputUsername () { return $('~input-email'); }
    public get inputPassword () { return $('~input-password'); }
    public get btnSubmit () { return $('~button-LOGIN'); }

    public get successMesage () {
        return $('android=new UiSelector().resourceId("android:id/message")'); //#android:id/message
    }
    public get okButton () {
        return $('android=new UiSelector().resourceId("android:id/button1")');
    }
    //---------------------------------------Sing up elements-----------------------------------------
    public get loginTab () { return $('~button-login-container'); }
    public get signUpTab () { return $('~button-sign-up-container'); }
    public get emailSignUp () { return $('~input-email'); }
    public get passSignUp () { return $('~input-password'); }
    public get repeatPassSignUp () { return $('~input-repeat-password'); }
    public get btnSighUp () { return $('~button-SIGN UP'); }
    //---------------------------------------Methods-----------------------------------------
    public async login (username: string, password: string) {
        //Steps to login to the app
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }

    public async validateLogin(){
        (await this.successMesage).waitForDisplayed({ //wait a maximum of five seconds to succed message is displayed
            timeout: 5000,                            // with intervals of two seconds.
            interval: 500, 
            reverse: false,
            timeoutMsg: 'El elemento no existió en el tiempo especificado'
        });

        const message = await (await this.successMesage).getText(); //get the content of the message.

        await assert.strictEqual("You are logged in!".includes(message),true,"Message not displayed"); //hard assert example

        try { //soft assert example
            await assert.strictEqual("You are logged in!".includes(message),true);
        } catch(error){
            console.log("This message isnt the expected: ",message);
        }

        (await this.okButton).click(); // click on OK button
    }

    public async signUp(username: string, password: string){
        await (await this.signUpTab).click();
        await (await this.emailSignUp).setValue(username);
        await (await this.passSignUp).setValue(password);
        await (await this.repeatPassSignUp).setValue(password);
        await (await this.btnSighUp).click();
    }
}

export default new LoginPage();
