import { $ } from '@wdio/globals'
import Page from './page.js';
import * as assert from 'assert';

class HomePage extends Page {
    //******************************Locators************************************************* */
    public get webdriverLetter() { return $('//android.widget.TextView[@text="WEBDRIVER"]'); }
    public get homeMessage () { return $('//android.widget.TextView[@text="Demo app for the appium-boilerplate"]'); }
    public get icons () { return $$('//android.widget.TextView[@text="󰀵"]');}
    public get supportMessage () { return $('//android.widget.TextView[@text="Support"]');}

    //*****************************Functions**************************************************
    public async validateWebdriverLetter(){
        (await this.webdriverLetter).waitForDisplayed({ //wait a maximum of five seconds to succed message is displayed
            timeout: 5000,                            // with intervals of two seconds.
            interval: 500, 
            reverse: false,
            timeoutMsg: 'El elemento webdriverLetter no existió en el tiempo especificado'
        });
    }
    public async validateHomeMessage(){
        (await this.homeMessage).waitForDisplayed({ //wait a maximum of five seconds to succed message is displayed
            timeout: 5000,                            // with intervals of two seconds.
            interval: 500, 
            reverse: false,
            timeoutMsg: 'El elemento homeMessage no existió en el tiempo especificado'
        });
    }
    public async validateSupportMessage(){
        (await this.supportMessage).waitForDisplayed({ //wait a maximum of five seconds to succed message is displayed
            timeout: 5000,                            // with intervals of two seconds.
            interval: 500, 
            reverse: false,
            timeoutMsg: 'El elemento supportMessage no existió en el tiempo especificado'
        });
    }

    public async validateIcons(){
        //console.log(await this.icons.length);
        await assert.strictEqual(await this.icons.length === 1,true,"The platforms icons arent displayed");
    }
}

export default new HomePage();