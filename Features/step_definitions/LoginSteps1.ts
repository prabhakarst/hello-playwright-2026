// //Gherkin

// import {Given,When,Then} from "@cucumber/cucumber";
// import {CustomWorld} from '../support/world';
// import {LoginPage} from "../pages/LoginPage";
// import {ProductsPage} from "../pages/ProductsPage";


// Given ('I am on the login page',
//     async function(this:CustomWorld){
//         await this.loginPage.openURL()
//     });

// When("I login as credentials {string}",
//     async function (this:CustomWorld,user:string){
//      await this.loginPage.loginAs(user)
//     });

// When('I enter the {string} with {string}',
//     async function(this:CustomWorld,user:string,pass:string){
//         await this.loginPage.loginAs(user,pass)
//     });

// Then('catalogue is displayed',
//     async function(this:CustomWorld){
//         await this.productsPage.expectLoaded()
//     });

//     Then('they see {string}',
//         async function(this:CustomWorld,outcome:string){
//             await this.productsPage.expectOutcome(outcome)
//     });
