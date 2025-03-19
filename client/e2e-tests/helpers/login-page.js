/**
 * This file contains exported functions to interact with the login page.
 */

// Locators (moved outside functions to avoid redundant lookups)
const emailFieldLocator = (page) => page.getByRole('main').getByRole('textbox', { name: 'Please Enter Your Email' });
const passwordFieldLocator = (page) => page.getByRole('textbox', { name: 'Please Enter Your Password' });
const loginButtonLocator = (page) => page.getByRole('button', { name: 'Login' });
const welcomeLinkLocator = (page) => page.getByRole('link', { name: 'Welcome! ' })
const loginMenuLocator = (page) => page.getByRole('menuitem', { name: 'Login' });

export async function enterCredentials(page, email, password) {
    const emailField = emailFieldLocator(page);
    const passwordField = passwordFieldLocator(page);
    await emailField.click();
    await emailField.fill(email);
    await passwordField.click();
    await passwordField.fill(password);
}

export async function submitLoginForm(page) {
    const loginButton = loginButtonLocator(page);
    await loginButton.click({ force: true });
}

export async function gotoLoginPage(page) {
    await page.goto('');
    await welcomeLinkLocator(page).click();
    await loginMenuLocator(page).click();
}
