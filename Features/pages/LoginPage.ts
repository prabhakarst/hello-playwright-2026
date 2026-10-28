import {Page,Locator,expect} from "@playwright/test";
import { BasePage } from "./BasePage";
import { User } from '../../test-data/users';
//add all methods inside class 
export class LoginPage extends BasePage{
    //start writing locator names(POM methodology)
    protected readonly path='/';

    private readonly username! : Locator;
    private readonly  password! : Locator;
    private readonly loginButton! : Locator;
    private readonly errorMessage! : Locator;

    //private readonly is removed here because i want to extend from BaseClass
    constructor (page:Page){
        super(page)
        this.username = page.locator('#user-name');
        this.password=page.locator('#password');
        this.loginButton=page.locator('#login-button');
        this.errorMessage=page.locator('[data-test="error"]');
    }

    //outside of a class is a function
   
    //this method is shifted to BasePage open().So I can comment this method.
    /*async openURL (){
        await this.page.goto("https://www.saucedemo.com/");
    }*/

    //async loginAs(user:string,pass='secret_sauce'){
    //removing the password
    //adding test-data folder to fetch User
    async loginAs(user:User):Promise<void>{
       await this.username.fill(user.username);
       await this.password.fill(user.password);
       await this.loginButton.click();
    }

    async expectErrorMsg(user:string,pass='secret_sauce',text:string):Promise<void>{
        await this.username.fill(user);
        await this.password.fill(pass);
        await expect(this.errorMessage).toContainText(text);
       
    }

}
