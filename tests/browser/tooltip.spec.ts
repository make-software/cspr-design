import { test, expect } from '@playwright/test';
test('keyboard description, Escape, ref/event composition, focus leaves normally', async ({
  page,
}) => {
  const errors: string[] = [];
  page.on('pageerror', (e) => errors.push(e.message));
  await page.goto('/tests/browser/');
  await page.keyboard.press('Tab');
  const button = page.getByRole('button', { name: 'Wallet' });
  const tip = page.getByRole('tooltip');
  await expect(button).toBeFocused();
  await expect(tip).toBeVisible();
  await expect(tip).toHaveCSS('opacity', '1');
  await expect(page.locator('body')).toHaveAttribute('data-focused', 'yes');
  await expect(tip).toHaveCSS('padding', '12px');
  await expect(tip.locator(':scope > div')).toHaveCSS('max-width', '300px');
  await expect(tip).toContainText('Caption');
  await expect(tip).toContainText('Additional details');
  await expect(button).toHaveAttribute(
    'aria-describedby',
    (await tip.getAttribute('id')) as string,
  );
  await expect(button).toHaveAccessibleDescription(
    'Caption Wallet details Additional details',
  );
  await expect(page.getByTestId('container').getByRole('tooltip')).toHaveCount(
    0,
  );
  await page.keyboard.press('Escape');
  await expect(tip).toBeHidden();
  await expect(button).toBeFocused();
  await page.keyboard.press('Enter');
  await expect(page.locator('body')).toHaveAttribute('data-clicked', 'Wallet');
  await expect(page.locator('body')).toHaveAttribute(
    'data-tooltip-ref',
    'tooltip',
  );
  await page.keyboard.press('Tab');
  await expect(page.getByRole('button', { name: 'Next' })).toBeFocused();
  expect(errors).toEqual([]);
});
test('pointer open/close, hoverable content, non-button keyboard anchor', async ({
  page,
}) => {
  await page.goto('/tests/browser/');
  await page.getByRole('button', { name: 'Wallet' }).hover();
  const tip = page.getByRole('tooltip');
  await expect(tip).toBeVisible();
  await expect(tip).toHaveCSS('opacity', '1');
  await tip.hover();
  await expect(tip).toBeVisible();
  await page.mouse.move(600, 500);
  await expect(tip).toBeHidden();
  await page.getByText('Text anchor', { exact: true }).focus();
  await page.keyboard.press('Tab');
  await page.keyboard.press('Shift+Tab');
  await expect(page.getByRole('tooltip')).toHaveText('Text details');
});
