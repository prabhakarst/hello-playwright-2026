import{
    BeforeAll,Before,After,AfterAll,Status,setDefaultTimeout}
     from "@cucumber/cucumber";



import {chromium,Browser} from "@playwright/test";
import{CustomWorld} from './world';
import{LoginPage} from "../pages/LoginPage";
import{ProductsPage} from "../pages/ProductsPage";

setDefaultTimeout(60*1000)

let browser:Browser;
BeforeAll (async function (){
    browser=await chromium.launch({
        headless: process.env.HEADLESS!=='false'

    });
});

Before (async function(this:CustomWorld){
    this.context=await browser.newContext();
    this.page=await this.context.newPage();
    this.loginPage=new LoginPage(this.page);
    this.productsPage=new ProductsPage(this.page);

    
})

After(async function(this:CustomWorld,scenario){
    if (scenario.result?.status===Status.FAILED){
        const shot=await this.page.screenshot();
        this.attach(shot,'image/png')
    }
})

    AfterAll(async function(){
        await browser?.close();

    });


