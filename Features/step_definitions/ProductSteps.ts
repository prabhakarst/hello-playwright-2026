import {When,DataTable} from "@cucumber/cucumber";
import {CustomWorld} from "../support/world";

When('they add the following products',
    async function(this:CustomWorld,table:DataTable){
        for(const row of table.hashes()){
            await this.productsPage.adddToCart(row.product)
        }
    });

//     table.hashes() RETURN
// [
//     {product: 'Sauce Labs Backpack',quantity:'1'}
//     {product: 'Sauce Labs Bike Light',quantity:'1'}
// ]

[
  ['product', 'quantity'],
  ['Sauce Labs Backpack', '1'],
  ['Sauce Labs Bike Light', '1']
]

//table.row
