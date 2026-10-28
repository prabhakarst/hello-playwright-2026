//Gherkin

import {Given,When,Then} from "@cucumber/cucumber";
import {CustomWorld} from '../support/world';
import {LoginPage} from "../pages/LoginPage";
import {ProductsPage} from "../pages/ProductsPage";
import { getUser } from "../../test-data/users";

Given ('I am on the login page',
    async function(this:CustomWorld){
       // await this.loginPage.openURL()
       await this.loginPage.open()
    });

When("I login as credentials {string}",
    async function (this:CustomWorld,user:string){
     //await this.loginPage.loginAs(user)
     await this.loginPage.loginAs(getUser(user));
    });

When('I enter the {string} with {string}',
    async function(this:CustomWorld,user:string,pass:string){
        // await this.loginPage.loginAs(user,pass)
        await this.loginPage.loginAs({username:user,password:pass});
    });

Then('catalogue is displayed',
    async function(this:CustomWorld){
        await this.productsPage.expectLoaded()
    });

    Then('they see {string}',
        async function(this:CustomWorld,outcome:string){
            await this.productsPage.expectOutcome(outcome)
    });
