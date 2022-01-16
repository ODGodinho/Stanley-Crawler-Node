import { BrowserLaunchOptionsContract } from '@odg/essentials-crawler-node';
import BrowserEssentials from '@odg/essentials-crawler-node/Context/Browser';
import ContextEssentials from '@odg/essentials-crawler-node/Context/Context';
import { BrowserContract } from '../@types/Browser';
import { BrowserContextContract } from '../@types/Context';
import { BrowserTypeContract } from '../@types/Browser';
import { PageContract } from '../@types/Page';

class Browser<BrowserType extends BrowserTypeContract<PageType>, PageType extends PageContract> extends BrowserEssentials<BrowserType, PageType, typeof ContextEssentials> {

    declare browserType: BrowserType;
    declare browser?: BrowserContract<PageType> | null;

    constructor(browserType: BrowserType, context: typeof ContextEssentials) {
        super(browserType, context);
    }

    protected browserOptions(): BrowserLaunchOptionsContract {
        return {
            headless: false,
            args: [
                "--wm-window-animations-disabled",
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-infobars",
                "--disable-blink-features=AutomationControlled",
            ],
        };
    }

    async initBrowser() {
        if (process.env.PERSISTENT_BROWSER && this.browserType.launchPersistentContext) {
            const persistentContext: BrowserContextContract<PageContract> = await this.browserType.launchPersistentContext(process.env.PERSISTENT_BROWSER, {});
            this.browser = null;
            this.newContext(undefined, persistentContext as BrowserContextContract<PageType>);
            return;
        }
        this.browser = await this.browserType.launch(this.browserOptions());
    }

}

export default Browser;