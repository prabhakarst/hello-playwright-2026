import {Page,Locator,expect} from "@playwright/test";

//add all methods inside class 

export class LoginPage {
    //start writing locator names(POM methodology)
    private readonly username! : Locator;
    private readonly  password! : Locator;
    private readonly loginButton! : Locator;
    private readonly errorMessage! : Locator;

    constructor (private readonly page:Page){
        this.username = page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
        this.errorMessage=page.locator('[data-test="error"]');
    }

    //outside of a class is a function
   
    async openURL (){
        await this.page.goto("https://www.saucedemo.com/");
    }

    async loginAs(user:string,pass='secret_sauce'){
       await this.username.fill(user);
       await this.password.fill(pass);
       await this.loginButton.click();
    }

    async expectErrorMsg(user:string,pass='secret_sauce',text:string){
        await this.username.fill(user);
        await this.password.fill(pass);
        await expect(this.errorMessage).toContainText(text);
       
    }

}
