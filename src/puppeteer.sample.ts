import Browser from './Context/Browser';
import puppeteer from 'puppeteer';
import ExampleGoogleCrawlerController from './Controllers/ExampleGoogleCrawlerController';
import { PageContract } from './@types/Page';
const browser = new Browser<typeof puppeteer, PageContract>(puppeteer);

browser.initBrowser()
.then(async () => {
        const context = await browser.newContext();
        const page = await context.newPage();

        const Crawler = new ExampleGoogleCrawlerController(page);
        await Crawler.exampleSearch();

        console.log("Done...");
        process.exit();
});