import Browser from './Context/Browser';
import puppeteer from 'puppeteer';
import ExampleGoogleCrawlerController from './Controllers/ExampleGoogleCrawlerController';
import { PageContract } from './@types/Page';
import ContextEssentials from '@odg/essentials-crawler-node/Context/Context';
import Context from './Context/Context';
const browser = new Browser<typeof puppeteer, PageContract>(puppeteer, Context as typeof ContextEssentials);

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