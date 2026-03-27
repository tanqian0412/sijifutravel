import type { Metadata } from 'next';
import './globals.css';

const BASE_URL = 'https://okara.ai';

const locales = [
  { code: 'zh-CN', hreflang: 'zh-CN', name: '简体中文', region: 'CN' },
  { code: 'zh-TW', hreflang: 'zh-TW', name: '繁體中文', region: 'TW' },
  { code: 'en', hreflang: 'en', name: 'English', region: 'US' },
  { code: 'fr', hreflang: 'fr', name: 'Français', region: 'FR' },
  { code: 'de', hreflang: 'de', name: 'Deutsch', region: 'DE' },
  { code: 'es', hreflang: 'es', name: 'Español', region: 'ES' },
  { code: 'ja', hreflang: 'ja', name: '日本語', region: 'JP' },
  { code: 'ko', hreflang: 'ko', name: '한국어', region: 'KR' },
  { code: 'vi', hreflang: 'vi', name: 'Tiếng Việt', region: 'VN' },
  { code: 'th', hreflang: 'th', name: 'ไทย', region: 'TH' },
  { code: 'ms', hreflang: 'ms', name: 'Bahasa Melayu', region: 'MY' },
  { code: 'id', hreflang: 'id', name: 'Bahasa Indonesia', region: 'ID' },
  { code: 'tl', hreflang: 'tl', name: 'Filipino', region: 'PH' },
  { code: 'ru', hreflang: 'ru', name: 'Русский', region: 'RU' },
  { code: 'it', hreflang: 'it', name: 'Italiano', region: 'IT' },
  { code: 'pt', hreflang: 'pt', name: 'Português', region: 'PT' },
];

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: '北京四季福旅行社 | Beijing Four Seasons Fortune Travel',
    template: '%s | 北京四季福旅行社',
  },
  description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆。十年深耕，50,000+游客选择，专业中英文双语导游。',
  keywords: ['北京旅游', '北京旅行社', '北京团队游', '北京定制游', '北京导游', '北京五日游', '北京长城', '故宫', '颐和园', 'Beijing tours', 'China travel', 'Beijing travel agency'],
  authors: [{ name: '四季福旅行社' }],
  creator: '四季福旅行社',
  publisher: '四季福旅行社',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'zh_CN',
    alternateLocale: locales.filter(l => l.code !== 'zh-CN').map(l => l.hreflang),
    url: BASE_URL,
    siteName: '北京四季福旅行社',
    title: '北京四季福旅行社 | Beijing Four Seasons Fortune Travel',
    description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆',
    images: [
      {
        url: '/素材/hero-bg.jpg',
        width: 1200,
        height: 630,
        alt: '北京四季福旅行社 - 京城之旅，四季如福',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: '北京四季福旅行社 | Beijing Four Seasons Fortune Travel',
    description: '专注北京团队游与定制游，为全球游客打造难忘的京城记忆',
    images: ['/素材/hero-bg.jpg'],
  },
  alternates: {
    canonical: BASE_URL,
    languages: Object.fromEntries(locales.map(l => [l.hreflang, `${BASE_URL}?lang=${l.code}`])),
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <head>
        {/* Hreflang tags for all locales */}
        <link rel="canonical" href={BASE_URL} />
        {locales.map((locale) => (
          <link
            key={locale.hreflang}
            rel="alternate"
            hrefLang={locale.hreflang}
            href={`${BASE_URL}?lang=${locale.code}`}
          />
        ))}
        {/* Default to x-default for the main page */}
        <link rel="alternate" hrefLang="x-default" href={BASE_URL} />
        {/* Geo tags */}
        <meta name="geo.region" content="CN" />
        <meta name="geo.placename" content="Beijing, China" />
        <meta name="geo.position" content="39.9042;116.4074" />
        <meta name="ICBM" content="39.9042, 116.4074" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
