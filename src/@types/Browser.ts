import { BrowserContextContract, BrowserContextOptionsContract } from './Context';
import { PageContract } from './Page';
/*§BrowserLaunchOptionImport§*/

export type BrowserLaunchOptionsContract = { args?: Array<string> } /*&*/ /*§BrowserLaunchOptionName§*/;
export type BrowserTypeContract<PageType> = {
    launch(options?: BrowserLaunchOptionsContract): Promise<PageType | any>;
} /*&*/ /*§BrowserType§*/;

export type BrowserContract<PageType extends PageContract> = {
    close(): Promise<any>;
    contexts(): Array<BrowserContextContract<PageType>>;
    newContext?: (options?: BrowserContextOptionsContract) => Promise<BrowserContextContract<PageType>>;
    createIncognitoBrowserContext?: () => Promise<BrowserContextContract<PageType>>;
} /*&*/ /*§Browser§*/;
