import { BrowserLaunchOptionsContract, BrowserTypeContract } from '@odg/essentials-crawler-node/@types/Browser';
import { PageContract } from '@odg/essentials-crawler-node/@types/Page';
import BrowserAbstract from '@odg/essentials-crawler-node/Context/Browser';

class Browser<BrowserType extends BrowserTypeContract<PageType>, PageType extends PageContract> extends BrowserAbstract<BrowserType, PageType> {

    constructor(browserType: BrowserType) {
        super(browserType);
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
        this.browser = await this.browserType.launch(this.browserOptions());
    }

}

export default Browser;