import { MetadataRoute } from 'next';

const BASE_URL = 'https://okara.ai';

const locales = [
  { code: 'zh-CN', hreflang: 'zh-CN', region: 'CN' },
  { code: 'zh-TW', hreflang: 'zh-TW', region: 'TW' },
  { code: 'en', hreflang: 'en', region: 'US' },
  { code: 'fr', hreflang: 'fr', region: 'FR' },
  { code: 'de', hreflang: 'de', region: 'DE' },
  { code: 'es', hreflang: 'es', region: 'ES' },
  { code: 'ja', hreflang: 'ja', region: 'JP' },
  { code: 'ko', hreflang: 'ko', region: 'KR' },
  { code: 'vi', hreflang: 'vi', region: 'VN' },
  { code: 'th', hreflang: 'th', region: 'TH' },
  { code: 'ms', hreflang: 'ms', region: 'MY' },
  { code: 'id', hreflang: 'id', region: 'ID' },
  { code: 'tl', hreflang: 'tl', region: 'PH' },
  { code: 'ru', hreflang: 'ru', region: 'RU' },
  { code: 'it', hreflang: 'it', region: 'IT' },
  { code: 'pt', hreflang: 'pt', region: 'PT' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ['', '#about', '#services', '#destinations', '#contact'];

  const staticPages = routes.map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1.0 : 0.8,
  }));

  // Generate locale-specific pages
  const localePages = locales.flatMap((locale) =>
    routes.map((route) => ({
      url: `${BASE_URL}${route}?lang=${locale.code}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: route === '' ? 1.0 : 0.8,
      alternates: {
        languages: {
          [locale.hreflang]: `${BASE_URL}${route}?lang=${locale.code}`,
        },
      },
    }))
  );

  return [...staticPages, ...localePages];
}
