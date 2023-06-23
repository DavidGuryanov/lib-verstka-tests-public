import { Browser, Page, Viewport, PuppeteerLaunchOptions } from 'puppeteer';
export interface Options extends PuppeteerLaunchOptions {
    viewport?: Viewport;
}
export interface LaunchResult {
    browser: Browser;
    page: Page;
}
