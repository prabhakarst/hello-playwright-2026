import {Page,Locator,expect} from "@playwright/test";
import{BasePage} from './BasePage';
//import {HeaderComponent} from "./components/HeaderComponent";
export class ProductsPage extends BasePage{
    protected readonly path = '/inventory.html';
    private readonly title : Locator;
    private readonly errorMessage : Locator;
    private readonly cartBadge: Locator;

// constructor (private readonly page : Page){
constructor (page : Page){
super(page);
    this.title=page.locator('.title');
    this.errorMessage=page.locator('[data-test="error"]');
    this.cartBadge=page.locator('.shopping_cart_link');
}

async expectLoaded(){
    await expect(this.title).toHaveText('Products');
}

async expectOutcome(outcome:string):Promise<void>{
    if (outcome==='Products'){
        await expect(this.title).toHaveText('Products')
    }
    else{
        await expect(this.errorMessage).toHaveText(outcome)
    }
}
 async adddToCart(product:string){
    const slug=product.toLowerCase().replace(/\s+/g, '-')
    //await this.page.locator(`[data-test="add-to-cart-${slug}]`).click();
    await this.page.locator(`[data-test="add-to-cart-${slug}"]`).click();

 }

 async expectCartCount(count:string){
    await expect(this.cartBadge).toHaveText(count)

 }
}
