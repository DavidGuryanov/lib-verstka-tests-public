import { Page } from 'puppeteer';
import { Options, LaunchResult } from '../types/utils/puppeteer';
declare const hasElementBySelectors: (page: Page, selectors: string) => Promise<boolean>;
declare const getStyle: (page: Page, selectors: string, properties: string[]) => Promise<string[]>;
declare const getStyles: (page: Page, selectors: string, properties: string[]) => Promise<never[] | {
    [k: string]: string;
}>;
declare const launchBrowser: (url: string, options?: Options) => Promise<LaunchResult>;
export { hasElementBySelectors, getStyle, getStyles, launchBrowser, };
