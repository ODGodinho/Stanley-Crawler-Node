import { PageContract } from './Page';

export interface BrowserContextOptionsContract {
    /**
     * Specifies if viewport supports touch events. Defaults to false.
     */
    hasTouch?: boolean;

    /**
     * Whether to ignore HTTPS errors when sending network requests. Defaults to `false`.
     */
    ignoreHTTPSErrors?: boolean;

    /**
     * Whether the `meta viewport` tag is taken into account and touch events are enabled. Defaults to `false`. Not supported
     * in Firefox.
     */
    isMobile?: boolean;
}

export interface BrowserContextContract<PageType extends PageContract> {
    /**
    * Returns the browser instance of the context. If it was launched as a persistent context null gets returned.
    */
    browser(): null | BrowserContract;

    /**
     * Clears context cookies.
     */
    clearCookies(): Promise<void>;

    /**
     * Creates a new page in the browser context.
     */
    newPage(): Promise<PageType>;

    /**
     * Returns all open pages in the context.
     */
    pages(): Array<PageType>;

}