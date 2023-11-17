import { browser } from '@wdio/globals'
import { $ } from '@wdio/globals'


export default class Page {

    public get homeButton(){ return $('~Home'); }
    public get webbDriverButton(){ return $('~Webview'); }
    public get loginButton(){ return $('~Login'); }
    public get formsButton(){ return $('~Forms'); }
    public get swipeButton(){ return $('~Swipe'); }
    public get dragButton(){ return $('~Drag'); }

    public open (path: string) {
        return browser.url(`https://the-internet.herokuapp.com/${path}`)
    }
}
