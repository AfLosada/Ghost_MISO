export const login = async ({ page }) => {
  await page.getByPlaceholder('The Daily Awesome').click();
  await page.getByPlaceholder('The Daily Awesome').fill('Title');
  await page.getByPlaceholder('Jamie Larson').click();
  await page.getByPlaceholder('Jamie Larson').press('CapsLock');
  await page.getByPlaceholder('Jamie Larson').fill('G');
  await page.getByPlaceholder('Jamie Larson').press('CapsLock');
  await page.getByPlaceholder('Jamie Larson').fill('Grupo 5');
  await page.getByPlaceholder('jamie@example.com').click();
  await page.getByPlaceholder('jamie@example.com').fill('nedrocoli@gmail.com');
  await page.getByPlaceholder('jamie@example.com').press('Tab');
  await page.getByPlaceholder('At least 10 characters').click();
  await page.getByPlaceholder('At least 10 characters').fill('12345678910');
  await page.getByRole('button', { name: 'Create account & start publishing →' }).click();
  await page.waitForURL("http://localhost:2368/ghost/#/setup/done")
  await page.goto("http://localhost:2368/ghost/")
}
