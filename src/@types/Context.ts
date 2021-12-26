
/*§BrowserContextOptionsImport§*/
/*§BrowserContextImport§*/
/*§BrowserImport§*/
import { BrowserContract } from './Browser';
import { PageContract } from './Page';

export interface BrowserContextOptionsContract /*§BrowserContextOptionsExtends§*/ {

}

export interface BrowserContextContract<PageType extends PageContract> /*§BrowserContextExtends§*/ {
    /**
    * Returns the browser instance of the context. If it was launched as a persistent context null gets returned.
    */
    browser(): (BrowserContract<PageType> /*&*/ /*§Browser§*/);

    /**
     * Creates a new page in the browser context.
     */
    newPage(): Promise<PageType>;

}