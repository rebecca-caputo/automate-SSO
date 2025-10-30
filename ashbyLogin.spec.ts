import { test } from "@playwright/test";
import * as dotenv from "dotenv";
dotenv.config();

import { AshbyLoginActions } from "../page-objects/AshbyLoginActions";
import { AshbyLoginHelper } from "../helpers/AshbyLoginHelper";

test('Ashby Login', async ({ page }) => {
    const actions = new AshbyLoginActions(page);       
    const helper = new AshbyLoginHelper(actions);       
    const email = process.env.LOGIN_EMAIL!;
    const password = process.env.LOGIN_PASSWORD;

    await actions.goto();
    await helper.loginWithEmail(email, password);
});
