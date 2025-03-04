import { test, expect } from '@playwright/test';
import { enterCredentials, submitLoginForm, gotoLoginPage } from './helpers/login-page';

test.only('Successful Login', async ({ page }) => {
  await gotoLoginPage(page);
  await enterCredentials(page, 'reta_kuhic@putsbox.com', '123456');
  await submitLoginForm(page);

  await expect(page).toHaveURL(/.*\/dashboard/);
});

test('Invalid Credentials Login', async ({ page }) => {
  await gotoLoginPage(page);
  await enterCredentials(page, 'wrong@email.com', 'wrongpass');
  await submitLoginForm(page);

  await expect(page.getByText(/No user found for this email address/i)).toBeVisible();
});

test('api responds with error', async ({ page }) => {
  await gotoLoginPage(page);
  // mockoon is used to return a 500 error when the email is simulate_error
  await enterCredentials(page, 'simulate_error@putsbox.com', '123456');
  await submitLoginForm(page);

  // application error, since no message is displayed for this scenario
  await expect(page.getByText('An Error Occurred')).toBeVisible();
});
