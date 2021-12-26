import { BrowserTypeContract } from '@odg/essentials-crawler-node/@types/Browser';
import { BrowserContextContract } from '@odg/essentials-crawler-node/@types/Context';
import { PageContract } from '@odg/essentials-crawler-node/@types/Page';
import ContextEssentials from '@odg/essentials-crawler-node/Context/Context';
import Browser from './Browser';

class Context<BrowserType extends BrowserTypeContract<PageType>, PageType extends PageContract> extends ContextEssentials<BrowserType, PageType> {

    constructor(browser: Browser<BrowserType, PageType>, context: BrowserContextContract<PageType>) {
        super(browser, context);
    }

}

export default Context;