import { test, expect, ConsoleMessage } from '@playwright/test';

const locales = [
  { code: 'en', name: 'English', expectedH1: 'Your Beijing Journey, Our Fortune' },
  { code: 'fr', name: 'French' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
];

const navItems = ['About Us', 'Services', 'Destinations', 'Contact'];

for (const locale of locales) {
  test(`Locale ${locale.code} (${locale.name})`, async ({ page }) => {
    const consoleErrors: string[] = [];

    page.on('console', (msg: ConsoleMessage) => {
      if (msg.type() === 'error') {
        consoleErrors.push(msg.text());
      }
    });

    await page.goto(`http://localhost:3000?locale=${locale.code}`);
    await page.waitForLoadState('networkidle');

    // Check H1
    const h1 = page.locator('h1').first();
    const h1Text = await h1.textContent();

    // Check navigation
    const navLinks = page.locator('nav a, header a').allTextContents();
    const navText = await navLinks;

    // Report
    console.log(`\n=== ${locale.name} (${locale.code}) ===`);
    console.log(`H1: "${h1Text}"`);
    console.log(`Nav items: ${JSON.stringify(navText)}`);
    console.log(`Console errors: ${consoleErrors.length > 0 ? consoleErrors.join(', ') : 'None'}`);

    // For English, verify it doesn't show Chinese
    if (locale.code === 'en') {
      expect(h1Text).toBe('Your Beijing Journey, Our Fortune');
      expect(h1Text).not.toContain('京城之旅');
    }

    // Check no console errors
    expect(consoleErrors).toHaveLength(0);
  });
}
