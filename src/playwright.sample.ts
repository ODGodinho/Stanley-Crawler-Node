import Browser from './Context/Browser';
import { Page, BrowserType, chromium } from 'playwright';
import ExampleGoogleCrawlerController from './Controllers/ExampleGoogleCrawlerController';
import ContextEssentials from '@odg/essentials-crawler-node/Context/Context';
import Context from './Context/Context';
const browser = new Browser<BrowserType, Page>(chromium, Context as typeof ContextEssentials);

browser.initBrowser()
    .then(async () => {
        const contextBase = browser.contexts?.[0]?.context || undefined;
        const context = await browser.newContext(undefined, contextBase);
        const page = await context.newPage();

        const Crawler = new ExampleGoogleCrawlerController(page);
        await Crawler.exampleSearch();

        console.log("Done...");
        process.exit();
    });