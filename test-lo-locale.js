const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();

  const consoleErrors = [];
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  page.on('pageerror', err => {
    consoleErrors.push(`Page error: ${err.message}`);
  });

  console.log('Navigating to http://localhost:3000?locale=lo...');
  await page.goto('http://localhost:3000?locale=lo', { waitUntil: 'networkidle' });

  // Wait a bit for any dynamic content
  await page.waitForTimeout(2000);

  // Get page title
  const title = await page.title();
  console.log(`Page title: ${title}`);

  // Get visible text content
  const bodyText = await page.evaluate(() => document.body.innerText);
  console.log('\n--- Page Content (first 500 chars) ---');
  console.log(bodyText.substring(0, 500));

  // Check for garbled characters (common Lao Unicode corruption indicators)
  const hasGarbled = bodyText.includes('à¤') ||
                     bodyText.includes('Ä½') ||
                     bodyText.includes('Ä€') ||
                     bodyText.includes('Ä‚');
  console.log(`\n--- Garbled character check ---`);
  console.log(`Potential garbled text detected: ${hasGarbled}`);

  // Report console errors
  console.log('\n--- Console Errors (Error level only) ---');
  if (consoleErrors.length === 0) {
    console.log('No console errors detected.');
  } else {
    consoleErrors.forEach(err => console.log(`ERROR: ${err}`));
  }

  // Check if page has content or is empty
  const hasContent = bodyText.trim().length > 0;
  console.log(`\n--- Summary ---`);
  console.log(`Page has content: ${hasContent}`);
  console.log(`Content length: ${bodyText.trim().length} characters`);

  await browser.close();

  process.exit(consoleErrors.length > 0 ? 1 : 0);
})();
