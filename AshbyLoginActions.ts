import { Page, expect } from '@playwright/test';
import { AshbyLoginLocators } from './AshbyLoginLocators';

export class AshbyLoginActions {
    readonly page: Page;
    readonly locators: AshbyLoginLocators;

    constructor(page: Page){
        this.page = page;
        this.locators = new AshbyLoginLocators(page);
    }

    async goto() {
        await this.page.goto('http://ashbyhq.com');
        await this.locators.loginButton.click()
        await this.locators.loginWithSSO.click()
    }

    async enterEmail(email: string) {
        await this.locators.emailInput.fill(email)
    }

    async loginWithSSO() {
        await this.locators.signInWithSSOButton.click()
    }

    async inputJumpCloudEmail(email: string) {
        await this.locators.loginToJumpCloud.fill(email)
    }

    async loginToAshby() {
        await this.locators.continueToAshby.click()
    }

    async inputJumpCloudPassword(password: string) {
        await this.locators.enterPassword.fill(password)
    }
    
    async clickSSOLogin() {
        await this.locators.clickSSOLoginButton.click()
    }
}