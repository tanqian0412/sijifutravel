const { chromium } = require('playwright');

const languages = [
  { code: 'zh-CN', name: 'Chinese Simplified' },
  { code: 'zh-TW', name: 'Chinese Traditional' },
  { code: 'en', name: 'English' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
  { code: 'es', name: 'Spanish' },
  { code: 'ja', name: 'Japanese' },
  { code: 'ko', name: 'Korean' },
  { code: 'vi', name: 'Vietnamese' },
  { code: 'th', name: 'Thai' },
  { code: 'ms', name: 'Malay' },
  { code: 'id', name: 'Indonesian' },
  { code: 'tl', name: 'Filipino' },
  { code: 'my', name: 'Burmese' },
  { code: 'km', name: 'Khmer' },
  { code: 'lo', name: 'Lao' }
];

async function testLanguage(browser, lang) {
  const context = await browser.newContext();
  const page = await context.newPage();

  const errors = [];
  const consoleErrors = [];

  // Capture console errors
  page.on('console', msg => {
    if (msg.type() === 'error') {
      consoleErrors.push(msg.text());
    }
  });

  // Capture page errors
  page.on('pageerror', err => {
    errors.push(err.message);
  });

  try {
    const url = `http://localhost:3000?locale=${lang.code}`;
    console.log(`\n=== Testing ${lang.name} (${lang.code}) ===`);
    console.log(`URL: ${url}`);

    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 30000 });

    // Wait a bit for JS to execute
    await page.waitForTimeout(2000);

    // Check if page has content
    const bodyText = await page.textContent('body');
    const hasContent = bodyText && bodyText.trim().length > 100;

    // Check page title
    const title = await page.title();

    // Check for key content sections
    const hasBeijingContent = bodyText.includes('北京') || bodyText.includes('Beijing');
    const hasNavLinks = await page.$$('nav a, header a');

    console.log(`  Title: ${title}`);
    console.log(`  Has content: ${hasContent ? 'YES' : 'NO'} (${bodyText.trim().length} chars)`);
    console.log(`  Has Beijing content: ${hasBeijingContent ? 'YES' : 'NO'}`);
    console.log(`  Navigation links found: ${hasNavLinks.length}`);
    console.log(`  Console errors: ${consoleErrors.length > 0 ? consoleErrors.join(', ') : 'None'}`);
    console.log(`  Page errors: ${errors.length > 0 ? errors.join(', ') : 'None'}`);

    const result = {
      language: lang.name,
      code: lang.code,
      url,
      status: 'OK',
      hasContent,
      hasBeijingContent,
      consoleErrors,
      pageErrors: errors
    };

    if (!hasContent) {
      result.status = 'ISSUE - No content rendered';
    }
    if (consoleErrors.length > 0) {
      result.status = `ISSUE - ${consoleErrors.length} console error(s)`;
    }
    if (errors.length > 0) {
      result.status = `ISSUE - ${errors.length} page error(s)`;
    }

    await context.close();
    return result;

  } catch (err) {
    console.log(`  ERROR: ${err.message}`);
    await context.close();
    return {
      language: lang.name,
      code: lang.code,
      url: `http://localhost:3000?locale=${lang.code}`,
      status: `FAILED - ${err.message}`,
      hasContent: false,
      hasBeijingContent: false,
      consoleErrors: [],
      pageErrors: [err.message]
    };
  }
}

async function main() {
  console.log('Starting multi-language website tests...');
  console.log(`Total languages to test: ${languages.length}`);

  const browser = await chromium.launch({
    headless: true,
    args: [
      '--no-sandbox',
      '--disable-setuid-sandbox',
      '--disable-dev-shm-usage',
      '--disable-gpu',
      '--disable-software-rasterizer',
      '--disable-web-security'
    ]
  });

  const results = [];

  for (const lang of languages) {
    const result = await testLanguage(browser, lang);
    results.push(result);

    // Small delay between tests
    await new Promise(r => setTimeout(r, 500));
  }

  await browser.close();

  // Summary
  console.log('\n\n========================================');
  console.log('           TEST SUMMARY');
  console.log('========================================');

  const passed = results.filter(r => r.status === 'OK').length;
  const failed = results.filter(r => r.status.startsWith('ISSUE') || r.status.startsWith('FAILED')).length;

  console.log(`\nTotal: ${results.length} | Passed: ${passed} | Failed: ${failed}`);

  console.log('\n--- Languages with issues ---');
  results.forEach(r => {
    if (r.status !== 'OK') {
      console.log(`\n[${r.code}] ${r.language}`);
      console.log(`  Status: ${r.status}`);
      if (r.consoleErrors.length > 0) {
        console.log(`  Console Errors: ${r.consoleErrors.join('; ')}`);
      }
      if (r.pageErrors.length > 0) {
        console.log(`  Page Errors: ${r.pageErrors.join('; ')}`);
      }
    }
  });

  console.log('\n--- All test results ---');
  results.forEach(r => {
    const statusIcon = r.status === 'OK' ? 'PASS' : 'FAIL';
    console.log(`[${statusIcon}] ${r.code} (${r.language}): ${r.status}`);
  });

  console.log('\n========================================');
}

main().catch(console.error);
