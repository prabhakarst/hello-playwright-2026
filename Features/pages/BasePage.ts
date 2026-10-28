import {Page,Locator,expect} from '@playwright/test'

import {env} from '../../config/env'

/*base page will be parent of every page
Rule: only put things here if ever page needs it*/

export abstract class BasePage{
    protected abstract readonly path: string;

    //giving alias page:Page

    constructor(protected readonly page:Page){}
       
    
    protected get url():string{
            return new URL(this.path,env.baseUrl).toString();
        }
    
//methods start here
    async open():Promise<void> {
        await this.page.goto(this.url);
    }


    async expectOnPage(): Promise<void>{
        await expect(this.page).toHaveURL(this.url)
    }


    protected byTestId(id:string):Locator{
        return this.page.getByTestId(id);
    }
   //protected get url2():string;
}
