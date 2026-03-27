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

async function testLanguageTranslation(browser, lang) {
  const context = await browser.newContext();
  const page = await context.newPage();

  try {
    const url = `http://localhost:3000?locale=${lang.code}`;
    await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 });
    await page.waitForTimeout(1000);

    // Get key text content
    const h1 = await page.locator('h1').first().innerText().catch(() => 'NO H1');
    const heroTagline = await page.locator('h2').first().innerText().catch(() => 'NO H2');
    const navItems = await page.locator('nav a, header a').allInnerTexts();

    // Check for translated content - look for language-specific text
    const bodyText = await page.textContent('body');

    // Look for language indicators
    const hasTranslatedNav = navItems.some(n => {
      const lower = n.toLowerCase();
      // Check for language-specific navigation
      if (lang.code === 'fr') return lower.includes('à propos') || lower.includes('services') || lower.includes('contact');
      if (lang.code === 'de') return lower.includes('über') || lower.includes('dienstleistungen') || lower.includes('kontakt');
      if (lang.code === 'es') return lower.includes('nosotros') || lower.includes('servicios') || lower.includes('contacto');
      if (lang.code === 'ja') return lower.includes('概要') || lower.includes('サービス') || lower.includes('お問い合わせ');
      if (lang.code === 'ko') return lower.includes('회사') || lower.includes('서비스') || lower.includes('문의');
      if (lang.code === 'vi') return lower.includes('giới thiệu') || lower.includes('dịch vụ') || lower.includes('liên hệ');
      if (lang.code === 'th') return lower.includes('เกี่ยว') || lower.includes('บริการ') || lower.includes('ติดต่อ');
      if (lang.code === 'ms') return lower.includes('tentang') || lower.includes('perkhidmatan') || lower.includes('hubungan');
      if (lang.code === 'id') return lower.includes('tentang') || lower.includes('layanan') || lower.includes('kontak');
      if (lang.code === 'tl') return lower.includes('tungkol') || lower.includes('serbisyo') || lower.includes('kontak');
      if (lang.code === 'my') return lower.includes('ကို') || lower.includes('ဝန်ဆောင်မှု') || lower.includes('ဆက်သွယ်');
      if (lang.code === 'km') return lower.includes('អំពី') || lower.includes('សេវា') || lower.includes('ទំនាក់');
      if (lang.code === 'lo') return lower.includes('ກ່ຽ') || lower.includes('ບໍ') || lower.includes('ติด');
      return false;
    });

    const result = {
      code: lang.code,
      name: lang.name,
      h1,
      heroTagline,
      navItems: navItems.slice(0, 5),
      contentLength: bodyText.length,
      hasTranslatedContent: hasTranslatedNav
    };

    await context.close();
    return result;

  } catch (err) {
    await context.close();
    return {
      code: lang.code,
      name: lang.name,
      error: err.message
    };
  }
}

async function main() {
  console.log('Checking if translations are actually loading...\n');

  const browser = await chromium.launch({ headless: true });

  const results = [];
  for (const lang of languages) {
    const result = await testLanguageTranslation(browser, lang);
    results.push(result);
    await new Promise(r => setTimeout(r, 300));
  }

  await browser.close();

  console.log('=== TRANSLATION CHECK RESULTS ===\n');

  results.forEach(r => {
    console.log(`[${r.code}] ${r.name}`);
    if (r.error) {
      console.log(`  ERROR: ${r.error}`);
    } else {
      console.log(`  H1: "${r.h1}"`);
      console.log(`  Nav items: ${r.navItems.join(', ')}`);
      console.log(`  Content length: ${r.contentLength} chars`);
    }
    console.log('');
  });

  // Compare translations
  console.log('\n=== CONTENT COMPARISON ===');
  const contentLengths = {};
  results.forEach(r => {
    if (!r.error) {
      const len = r.contentLength;
      if (!contentLengths[len]) contentLengths[len] = [];
      contentLengths[len].push(r.code);
    }
  });

  console.log('\nLanguages with identical content length (likely not translated):');
  for (const [len, codes] of Object.entries(contentLengths)) {
    if (codes.length > 2) {
      console.log(`  ${len} chars: ${codes.join(', ')}`);
    }
  }

  console.log('\nLanguages with different content:');
  for (const [len, codes] of Object.entries(contentLengths)) {
    if (codes.length <= 2) {
      console.log(`  ${len} chars: ${codes.join(', ')}`);
    }
  }
}

main().catch(console.error);
