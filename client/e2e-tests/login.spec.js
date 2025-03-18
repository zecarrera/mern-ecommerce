import { test, expect } from '@playwright/test';
import { enterCredentials, submitLoginForm, gotoLoginPage } from './helpers/login-page';

test.describe('Given a user is on the login page', { tag: '@login' }, () => {
  test('When entering valid credentials Then the user is redirected to the dashboard', { tag: '@live' }, async ({ page }) => {
    await gotoLoginPage(page);
    await enterCredentials(page, 'reta_kuhic@putsbox.com', '123456');
    await submitLoginForm(page);

    await expect(page).toHaveURL(/.*\/dashboard/);
  });

  test('When entering invalid credentials Then the user sees an error message', { tag: '@live' }, async ({ page }) => {
    await gotoLoginPage(page);
    await enterCredentials(page, 'wrong@email.com', 'wrongpass');
    await submitLoginForm(page);

    await expect(page.getByText(/No user found for this email address/i)).toBeVisible();
  });

  test('api responds with error', { tag: '@mockoon' }, async ({ page }) => {
    await gotoLoginPage(page);
    // mockoon is used to return a 500 error when the email is simulate_error
    await enterCredentials(page, 'simulate_error@putsbox.com', '123456');
    await submitLoginForm(page);

    await expect(page).toHaveURL(/.*\/login/);
  });

});

